import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  type Target,
  type VariantLabels,
  type TargetAndTransition,
  type LegacyAnimationControls,
} from "framer-motion";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?:
    | boolean
    | VariantLabels
    | TargetAndTransition
    | LegacyAnimationControls;
  exit?: Target | VariantLabels | TargetAndTransition;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Memoize splitIntoCharacters for performance
    const splitIntoCharacters = useMemo(() => {
      // Prefer native Intl.Segmenter if available
      const SegmenterCtor =
        typeof Intl !== "undefined" &&
        typeof (Intl as any).Segmenter !== "undefined"
          ? (Intl as any).Segmenter
          : undefined;
      if (SegmenterCtor) {
        const segmenter = new SegmenterCtor("en", { granularity: "grapheme" });
        return (text: string) =>
          Array.from(
            segmenter.segment(text),
            (segment: any) => segment.segment
          );
      }
      return (text: string) => Array.from(text);
    }, []);

    // Memoize elements to avoid unnecessary recalculations
    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex] || "";
      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      if (splitBy === "words") {
        return currentText.split(" ").map((word, i, arr) => ({
          characters: [word],
          needsSpace: i !== arr.length - 1,
        }));
      }
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i, arr) => ({
          characters: [line],
          needsSpace: i !== arr.length - 1,
        }));
      }
      // Custom split
      return currentText.split(splitBy).map((part, i, arr) => ({
        characters: [part],
        needsSpace: i !== arr.length - 1,
      }));
    }, [texts, currentTextIndex, splitBy, splitIntoCharacters]);

    const getStaggerDelay = useCallback(
      (index: number, totalChars: number): number => {
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last")
          return (totalChars - 1 - index) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(totalChars / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * totalChars);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        if (typeof staggerFrom === "number") {
          return Math.abs(staggerFrom - index) * staggerDuration;
        }
        return 0;
      },
      [staggerFrom, staggerDuration]
    );

    const next = useCallback(() => {
      setCurrentTextIndex((prev) => {
        const nextIndex =
          prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1;
        if (nextIndex !== prev) onNext?.(nextIndex);
        return nextIndex;
      });
    }, [texts.length, loop, onNext]);

    const previous = useCallback(() => {
      setCurrentTextIndex((prev) => {
        const prevIndex =
          prev === 0 ? (loop ? texts.length - 1 : prev) : prev - 1;
        if (prevIndex !== prev) onNext?.(prevIndex);
        return prevIndex;
      });
    }, [texts.length, loop, onNext]);

    const jumpTo = useCallback(
      (index: number) => {
        setCurrentTextIndex((prev) => {
          const validIndex = Math.max(0, Math.min(index, texts.length - 1));
          if (validIndex !== prev) onNext?.(validIndex);
          return validIndex;
        });
      },
      [texts.length, onNext]
    );

    const reset = useCallback(() => {
      setCurrentTextIndex((prev) => {
        if (prev !== 0) onNext?.(0);
        return 0;
      });
    }, [onNext]);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    useEffect(() => {
      if (!auto) return;
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(next, rotationInterval);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [next, rotationInterval, auto]);

    return (
      <motion.span
        className={cn(
          "flex flex-wrap whitespace-pre-wrap relative",
          mainClassName
        )}
        {...rest}
        layout
        transition={transition}
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentTextIndex}
            className={cn(
              splitBy === "lines"
                ? "flex flex-col w-full"
                : "flex flex-wrap whitespace-pre-wrap relative"
            )}
            layout
            aria-hidden="true"
          >
            {(() => {
              const totalChars = elements.reduce(
                (sum, word) => sum + word.characters.length,
                0
              );
              let charOffset = 0;
              return elements.map((wordObj, wordIndex) => {
                const previousCharsCount = charOffset;
                charOffset += wordObj.characters.length;
                return (
                  <span
                    key={wordIndex}
                    className={cn("inline-flex", splitLevelClassName)}
                  >
                    {wordObj.characters.map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={
                          initial as
                            | TargetAndTransition
                            | VariantLabels
                            | boolean
                            | undefined
                        }
                        animate={
                          animate as
                            | TargetAndTransition
                            | VariantLabels
                            | boolean
                            | LegacyAnimationControls
                            | undefined
                        }
                        exit={
                          exit as
                            | TargetAndTransition
                            | VariantLabels
                            | undefined
                        }
                        transition={{
                          ...transition,
                          delay: getStaggerDelay(
                            previousCharsCount + charIndex,
                            totalChars
                          ),
                        }}
                        className={cn("inline-block", elementLevelClassName)}
                      >
                        {char}
                      </motion.span>
                    ))}
                    {wordObj.needsSpace && (
                      <span className="whitespace-pre"> </span>
                    )}
                  </span>
                );
              });
            })()}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;

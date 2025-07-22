import angular from "./../assets/techno/angular.svg";
import linux from "./../assets/techno/linux.png";
import mysql from "./../assets/techno/mysql.png";
import nodejs from "./../assets/techno/nodejs.png";
import springboot from "./../assets/techno/springboot.svg";
import postgre from "./../assets/techno/postgre.png";
import docker from "./../assets/techno/docker.png";
import gitlab from "./../assets/techno/gitlab.png";
import jenkins from "./../assets/techno/jenkins.svg";

const IMGS = [
  { text: "Angular", image: angular },
  { text: "Linux", image: linux },
  { text: "MySQL", image: mysql },
  { text: "NodeJS", image: nodejs },
  { text: "Spring Boot", image: springboot },
  { text: "PostgreSQL", image: postgre },
  { text: "Docker", image: docker },
  { text: "GitLab", image: gitlab },
  { text: "Jenkins", image: jenkins },
];

const Technologies = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col  p-4 mt-5">
      <h1 className="flex flex-row text-lg text-white mb-4 text-center items-center justify-center gap-2 italic">
        I've worked with
      </h1>

      <div className="flex justify-evenly mb-4 grid-cols-3 md:grid-cols-5 gap-6 py-8">
        <img
          src={springboot}
          alt="Spring Boot"
          className="w-30 h-30 object-contain mb-2"
        />
        <img
          src={mysql}
          alt="postgre"
          className="w-30 h-30 object-contain mb-2"
        />
        <img
          src={postgre}
          alt="postgre"
          className="w-30 h-30 object-contain mb-2"
        />
      </div>
      <div className="flex justify-evenly mb-4 grid-cols-4 md:grid-cols-5 gap-6 py-8">
        <img
          src={linux}
          alt="linux"
          className="w-30 h-30 object-contain mb-2"
        />
        <img
          src={jenkins}
          alt="jenkins"
          className="w-30 h-30 object-contain mb-2"
        />
        <img
          src={gitlab}
          alt="postgre"
          className="w-30 h-30 object-contain mb-2"
        />
        <img
          src={docker}
          alt="postgre"
          className="w-30 h-30 object-contain mb-2"
        />
      </div>
      <div className="flex justify-evenly mb-4  gap-6 py-8">
        <img
          src={nodejs}
          alt="linux"
          className="w-30 h-30 object-contain mb-2"
        />
        <img
          src={angular}
          alt="postgre"
          className="w-30 h-30 object-contain mb-2"
        />
      </div>
    </div>
  );
};

export default Technologies;

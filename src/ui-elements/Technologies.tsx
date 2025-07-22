import angular from "../assets/techno/angular.png";
import linux from "../assets/techno/linux.png";
import mysql from "../assets/techno/mysql.png";
import nodejs from "../assets/techno/node.png";
import springboot from "../assets/techno/spring.png";
import postgre from "../assets/techno/postgre.png";
import docker from "../assets/techno/docker.png";
import gitlab from "../assets/techno/gitlab.png";
import jenkins from "../assets/techno/jenkins.png";

const Technologies = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col  p-4 mt-5">
      <h1 className="flex flex-row text-2xl text-white mb-4 mt-8 text-center items-center justify-center gap-2 italic">
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

import Image from "next/image";

export default function Skills() {
  return (
    <div className="w-8/12 flex flex-col justify-center items-center py-10 gap-y-10">
      <h1 className="text-center font-bold text-4xl">My Skills</h1>
      <div className="flex items-center justify-center w-full mx-auto">
        <div className="w-full mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-16 text-center">
          <i className="devicon-javascript-plain colored text-9xl mx-auto"></i>
          <i className="devicon-nodejs-plain-wordmark colored text-9xl mx-auto"></i>
          <i className="devicon-react-original colored text-9xl mx-auto"></i>
          <i className="devicon-nextjs-plain colored text-9xl"></i>
          <i className="devicon-express-original-wordmark colored text-9xl"></i>
          <i className="devicon-tailwindcss-original colored text-9xl"></i>
          <i className="devicon-python-plain colored text-9xl mx-auto"></i>
          <i className="devicon-flask-original-wordmark colored text-9xl"></i>
          <i className="devicon-fastapi-plain-wordmark colored text-9xl"></i>
          <i className="devicon-neovim-plain colored text-9xl"></i>
          <i className="devicon-git-plain colored text-9xl"></i>
          <i className="devicon-cplusplus-plain colored text-9xl"></i>
        </div>
      </div>
    </div>
  );
}

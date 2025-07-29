import React from "react";

const Home: React.FC = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
        &#x53;&#x41;&#x4d;&#x55;&#x45;&#x4c;&#x20;&#x44;&#x41;&#x20;&#x53;&#x49;&#x4c;&#x56;&#x41;&#x20;&#x4d;&#x45;&#x4e;&#x44;&#x45;&#x53;
      </h1>
      <p className="text-2xl md:text-4xl text-blue-400 mb-8 animate-fade-in-up delay-100">
        Desenvolvedor Backend
      </p>
      <p className="text-lg md:text-xl leading-relaxed animate-fade-in-up delay-200">
      Utilize as setas para navegar.
      </p>
    </div>
  );
};

export default Home;

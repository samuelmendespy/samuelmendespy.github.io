import React from "react";

const Contact: React.FC = () => {

  const contactLinks = {
    github: "https://github.com/samuelmendespy",
    email: "samuelmendespy@gmail.com",
    linkedin: "https://www.linkedin.com/in/smstll/"
  };

  return (
    <div className="text-center max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">
        Entre em Contato
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-8">
        Sinta-se à vontade para me contatar através dos links abaixo.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href={`${contactLinks.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.702-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.356-1.087.654-1.336-2.22-.253-4.555-1.113-4.555-4.93 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.865c.85.004 1.701.11 2.503.324 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.202 2.398.099 2.65a3.78 3.78 0 011.029 2.682c0 3.823-2.339 4.675-4.562 4.922.357.307.678.915.678 1.846 0 1.335-.012 2.41-.012 2.727 0 .268.18.579.688.481C21.137 20.19 24 16.425 24 12.017 24 6.484 19.522 2 14 2h-2z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>
        <a
          href={`${contactLinks.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.951v5.662H9.59V9.21h3.413v1.56a3.795 3.795 0 013.426-1.88c3.666 0 4.358 2.427 4.358 5.592v6.007zM7.91 8.16C6.717 8.16 6 7.424 6 6.52c0-.903.717-1.635 1.91-1.635 1.192 0 1.91.732 1.91 1.635 0 .904-.718 1.636-1.91 1.636zM6.028 20.452H9.59V9.21H6.028v11.242zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.204 24 24 23.227 24 22.271V1.729C24 .774 23.204 0 22.225 0z" />
          </svg>
          LinkedIn
        </a>
        <a
          href={`mailto:${contactLinks.email}`}
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M1.5 8.67v8.58c0 .87.954 1.488 1.755 1.049l16.5-7.5a1.125 1.125 0 000-1.99L3.255 7.621A1.125 1.125 0 001.5 8.67z" />
          </svg>
          E-mail
        </a>
      </div>
    </div>
  );
};

export default Contact;

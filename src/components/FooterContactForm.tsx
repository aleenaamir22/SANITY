import React from "react";

export default function FooterContactForm() {
  return (
    <form className=" bg-purple-200 px-20 sm:px-10 lg:px-12 py-8 w-[500px] rounded-lg mt-6 mb-6 shadow-lg shadow-gray-300">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-5 text-dark text-center uppercase">
          reach us
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full px-3 py-2  text-dark placeholder-gray-400 bg-light border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="w-full px-3 py-2  text-dark placeholder-gray-400 bg-light border rounded"
          />
        </div>

        <textarea
          rows={3}
          placeholder="Message"
          name="message"
          className="mb-4 w-full px-3 py-2  text-dark placeholder-gray-400 bg-light border rounded"
        />

        <button className="px-12 py-3 text-xl font-semibold border-2 border-black  text-black hover:text-dark uppercase transition-all duration-150 ease-linear bg-dark hover:bg-light rounded-lg block mx-auto">
          Submit
        </button>
      </div>
    </form>
  );
}
import React from "react";
import FooterContactForm from "../components/FooterContactForm";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-8">
      <section className="flex flex-col md:flex-row justify-center bg-black">
        <FooterContactForm />
      </section>

      <div className="bg-black h-[40px] text-left flex justify-between items-center px-4 bg-gray-500">
        <p className="text-md text-gray-200">
          © 2024 <span className="text-purple-500 font-bold">&nbsp;Techno</span>
          <span className="text-accentDarkPrimary font-bold">
            Talks&nbsp;
          </span>{" "}
          All rights reserved.
        </p>
        <SocialMedia />
      </div>
    </footer>
  );
}

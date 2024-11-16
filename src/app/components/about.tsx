"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div>
      <section
        id="about"
       className="text-stone-50 h-screen bg-[url('/images/pink.png')] bg-cover sm:bg-center md:bg-cover opacity-90 md:grid grid-row-2 space-y-2 p-4 place-content-center items-center text-center"
      >
        <div className="text-4xl md:text-6xl font-bold font-Merienda text-pink-800 p-8 md:pt-2 pb-2 text-center drop-shadow-lg hover:text-pink-300 transition duration-300 ease-in-out">
          <TypeAnimation
            sequence={["About", 500, "Me..", 500]}
            style={{ fontSize: "1.5em" }}
            speed={40}
            repeat={Infinity}
          />
        </div>

        <div className="h-screen md:h-[400px] w-full md:w-[1000px] bg-black/40 md:border border-2 border-pink-300 rounded-xl leading-relaxed md:leading-10 p-8 text-lg md:text-xl font-lg font-sans md:tracking-wider sm:flex-wrap text-justify text-pink-200">
          <div className="">
            <div className="flex-wrap">
              <TypeAnimation
                sequence={[
                  "I’m a passionate Front-End Web Developer with expertise in crafting visually appealing, responsive, and user-friendly websites. I specialize in HTML, CSS, JavaScript, and modern frameworks like Next.js and React, with a deep focus on Tailwind CSS for rapid, customizable UI design. My goal is to turn creative ideas into functional, high-performing websites that deliver seamless user experiences across devices. With a strong eye for design and attention to detail, I prioritize clean, maintainable code and optimized performance. Whether building dynamic single-page applications or robust websites, I aim to bridge the gap between design and development. Let’s create something amazing together!",
                  3000,
                  "", 
                ]}
                speed={30}
                omitDeletionAnimation={true}
                style={{
                  fontSize: "1.2em",
                  display: "block",
                  minHeight: "200px",
                  color: "#fff",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


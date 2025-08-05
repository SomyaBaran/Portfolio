import React from "react";
import { TypeAnimation } from "react-type-animation";

function HomePage() {
  return (
    <section className="relative h-[calc(100vh-64px)] overflow-hidden">
      {/* ✅ Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-2xl"
        style={{ backgroundImage: `url('/background1.jpeg')` }}
      ></div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div
          className="w-full h-full blur-sm"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 15%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
      </div>

      {/* ✅ Animated text */}
      <div className="relative z-30 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1
          style={{ fontFamily: '"Playwrite AU QLD", sans-serif' }}
          className="text-4xl md:text-5xl font-bold"
        >
          <TypeAnimation
            sequence={["Welcome to My Portfolio", 1000]}
            speed={20}
            cursor={true}
            repeat={0}
          />
        </h1>
      </div>
    </section>
  );
}

export default HomePage;

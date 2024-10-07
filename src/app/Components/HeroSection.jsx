"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"> Hello, I&#39;m{" "} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'CJ',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'a Game Designer',
                                1000,
                                'a Web Developer',
                                1000,
                                'a Software Engineer',
                                1000
                            ]}
                            wrapper="span"
                            speed={25}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#c0c0c0] text-base sm:text-lg mb-6 lg:text-xl">
                        I am a recent Computer Science graduate from Kettering University with over 3 years of industry experience in embedded programming, software testing, and systems design.
                        Additionally, I have personal and academic experience in game design, level design, environmental modelling, and systems programming.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-full rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 hover:bg-slate-200 text-black">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-full rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:bg-slate-800  text-white mt-3">
                            <span className="block bg-[#192029] hover:bg-slate-800 rounded-full px-5 py-2"> Download Resume </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#c3c2c2] w-[375px] h-[375px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/OIG4.png"
                            alt="OIG"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; HeroSection
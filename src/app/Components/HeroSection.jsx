"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="lg:py-16 h-screen" id="home">
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-12 mx-auto text-center">
                    <h1 className="text-white mb-4 text-5xl sm:text-2xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                            Hello, I&#39;m{" "}
                        </span>
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
                            speed={10}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#c0c0c0] text-base sm:text-lg mb-6 lg:text-xl">
                        Kettering University Computer Science Alumni
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 hover:bg-slate-200 text-white"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="/documents/CJKarinen-2-PageResume.pdf"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#192029] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default HeroSection; HeroSection
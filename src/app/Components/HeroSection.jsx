import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hello, I am CJ.
                    </h1>
                    <p className="text-[#c0c0c0] text-lg lg:text-xl">
                        I am a recent Computer Science graduate from Kettering University with over 2 years of tech industry experience in embedded programming, software testing, and systems design.
                        Additionally, I have personal and academic experience in game design, level design, environmental modelling, and systems programming.
                    </p>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#d4d3d3] w-[375px] h-[375px] lg:w-[400px] lg:h-[400px] relative">
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
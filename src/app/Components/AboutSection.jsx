"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Coding Languages",
        id: "codinglanguages",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>C,C++,C#</li>
                <li>Javascript</li>
                <li>Haskell</li>
                <li>React</li>
                <li>mySQL</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Unity</li>
                <li>Unreal</li>
                <li>Blender</li>
                <li>Git</li>
                <li>Agile</li>
            </ul>
        )
    },
    {
        title: "Web/DB",
        id: "webdb",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>C,C++,C#</li>
                <li>Javascript</li>
                <li>Haskell</li>
                <li>React</li>
                <li>mySQL</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Unity</li>
                <li>Unreal</li>
                <li>Blender</li>
                <li>Git</li>
                <li>Agile</li>
            </ul>
        )
    },
    {
        title: "Game Dev",
        id: "gamedev",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>C,C++,C#</li>
                <li>Javascript</li>
                <li>Haskell</li>
                <li>React</li>
                <li>mySQL</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Unity</li>
                <li>Unreal</li>
                <li>Blender</li>
                <li>Git</li>
                <li>Agile</li>
            </ul>
        )
    },
    {
        title: "Engineering Skills",
        id: "engineering",
        content: (
            <ul className="list-disc pl-2">
                <li>Java</li>
                <li>C,C++,C#</li>
                <li>Javascript</li>
                <li>Haskell</li>
                <li>React</li>
                <li>mySQL</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>Unity</li>
                <li>Unreal</li>
                <li>Blender</li>
                <li>Git</li>
                <li>Agile</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Hartland High School &#40;2016 - 2020&#41;</li>
                <li>Kettering University &#40;2020 - 2024&#41;</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Kettering University IGVC Project &#40;October - December 2020&#41;</li>
                <li>JMC Industries Controls Team Intern &#40;October - December 2021&#41;</li>
                <li>Inspectron Tools Software Team Intern &#40;April 2022 - June 2024&#41;</li>
            </ul>
        )
    }
]


const AboutSection = () => {
    const [tab, setTab] = useState("codinglanguages");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/Portrait_Chicago.jpg" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font'bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I&#39;m a recent Kettering University graduate with a degree in Computer Science and a minor in business.
                        I&#39;m detail-oriented worker, a creative thinker, and experienced in managing small teams and projects.
                        I have over 3 years of industry experience in embedded programming, software testing, and systems design.
                        Additionally, I have personal and academic experience in game design, level design, environmental modelling, and systems programming.

                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() =>
                            handleTabChange("codinglanguages")}
                            active={tab === "codinglanguages"}
                        >
                            {" "}
                            Coding Languages{" "}
                        </TabButton>
                        <TabButton selectTab={() =>
                            handleTabChange("webdb")}
                            active={tab === "webdb"}
                        >
                            {" "}
                            Web/DB{" "}
                        </TabButton>
                        <TabButton selectTab={() =>
                            handleTabChange("gamedev")}
                            active={tab === "gamedev"}
                        >
                            {" "}
                            Game Dev{" "}
                        </TabButton>
                        <TabButton selectTab={() =>
                            handleTabChange("engineering")}
                            active={tab === "engineering"}
                        >
                            {" "}
                            Engineering Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() =>
                            handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() =>
                            handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
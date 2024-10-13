"use client"
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from "../Components/contact-form";


const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0" id="contact">
            <div>
                <h5
                    className="text-xl font-bold text-white my-2 ">
                    Let&#39;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&#39;m always open to new opportunities and collaborations.
                    Feel free to reach out to me for any queries.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/cjkarinen20">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/craig-karinen-589b99186/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
        </section>
    );
};

export default EmailSection
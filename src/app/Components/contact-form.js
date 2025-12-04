import React, { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xkgnnown");
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    if (state.succeeded) {
        return <p>Message Sent!</p>;
    }

    return (
        <form method="POST" className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium">
                    Your email
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Placeholder@example.com"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="subject"
                    className="text-white block mb-2 text-sm font-medium">
                    Subject
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Example Subject"
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your message goes here."
                />
            </div>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="bg-orange-600 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                Send Message
            </button>
        </form>
    );
}
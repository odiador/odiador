"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(-50%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const phrases = [
    [{ text: "Lover", bold: true }, { text: " of Creative Code" }],
    [{ text: "Lover", bold: true }, { text: " of Innovation" }],
    [{ text: "Programming ", bold: false }, { text: "lover", bold: true }],
    [{ text: "Lover ", bold: true }, { text: "of Innovative Solutions", bold: false }],
    [{ text: "Lover ", bold: true }, { text: "of tech", bold: false }],
];

export default function BlurReveal() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            key={index}
            transition={transition}
            variants={variants}
            className="font-nanum text-center text-6xl mb-8"
        >
            {phrases[index].map((word, i) =>
                word.bold ? <span className="text-teal-200" key={i}>{word.text}</span> : word.text
            )}
        </motion.div>
    );
}

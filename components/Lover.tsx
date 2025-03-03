"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0)" },
    exit: { opacity: 0, y: 30, filter: "blur(10px)" },
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
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full flex items-center justify-center flex-1">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={transition}
                    variants={variants}
                    className="font-nanum text-center text-6xl mb-8 absolute"
                >
                    {phrases[index].map((word, i) =>
                        word.bold ? <span className="text-teal-200" key={i}>{word.text}</span> : word.text
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

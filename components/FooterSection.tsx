"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const FooterSection = () => {
    return (<section className="w-full font-nanum text-xl flex flex-col items-center py-4">
        <Link className="cursor-pointer" href={"https://odiador.dev"} target="_blank">
            <motion.div initial="normal" whileHover={"odiador"} className="relative  w-56 cursor-pointer text-center text-xl/[1.25rem] font-bold text-nowrap flex gap-1">
                {"Made with ❤️ by "}
                <div className="relative">
                    <div className="relative select-none overflow-hidden h-5 w-14">
                        <motion.span className="text-[#a96eb9] select-none cursor-pointer absolute text-nowrap font-bold top-[2px] left-0 size-full text-center text-xl/[1rem]" variants={{ normal: { y: 0, opacity: 1 }, odiador: { y: 20, opacity: 0 } }}>Amador</motion.span>
                        <motion.span className="text-[#8ae4e7] select-none cursor-pointer absolute text-nowrap font-bold top-[2px] left-0 size-full text-center text-xl/[1rem]" variants={{ normal: { y: -20, opacity: 0 }, odiador: { y: 0, opacity: 1 } }}>Odiador</motion.span>
                    </div>
                    <motion.svg viewBox="0 0 800 90" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="absolute -top-4 left-0 h-4 w-fit pointer-events-none">
                        <motion.path d="m20 100v-80c11 28 32 49 60 60"
                            variants={{ normal: { pathLength: 0 }, odiador: { pathLength: 1 } }}
                            transition={{ pathLength: { delay: 0.15, type: "spring", duration: 0.5, bounce: 0 } }}
                            stroke="#8ae4e7" strokeWidth="20" strokeLinecap="round" strokeLinejoin="bevel">
                        </motion.path>
                        <motion.path d="m310 100v-80c-11 28-32 49-60 60"
                            variants={{ normal: { pathLength: 0 }, odiador: { pathLength: 1 } }}
                            transition={{ pathLength: { delay: 0.15, type: "spring", duration: 0.5, bounce: 0 } }}
                            stroke="#8ae4e7" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round">
                        </motion.path>
                    </motion.svg>
                </div>
            </motion.div>
        </Link>

    </section>);
}
export default FooterSection;

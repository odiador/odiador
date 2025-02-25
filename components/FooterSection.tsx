"use client";
import { motion } from "framer-motion";

const FooterSection = () => {
    return <motion.div initial="normal" whileHover={"odiador"} className="font-nanum text-xl relative h-8 w-56 overflow-hidden">
        <motion.label className="select-none absolute text-nowrap font-bold top-0 left-0 size-full text-center" variants={{ normal: { y: 0, opacity: 1 }, odiador: { y: 30, opacity: 0 } }}>Made with ❤️ by <span className="text-[#a96eb9]">Amador</span></motion.label>
        <motion.label className="select-none absolute text-nowrap font-bold top-0 left-0 size-full text-center" variants={{ normal: { y: 30, opacity: 0 }, odiador: { y: 0, opacity: 1 } }}>Made with ❤️ by <span className="text-[#8ae4e7]">Odiador</span></motion.label>
    </motion.div>
}
export default FooterSection;
"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const ArrowScroll = ({ href }: { href: string }) => {
    return (
        <Link href={href} scroll className="flex flex-col items-center text-[#8ae4e7]">
            <IoIosArrowDown className="animate-bounce text-5xl" />
        </Link>
    )
}
export default ArrowScroll;
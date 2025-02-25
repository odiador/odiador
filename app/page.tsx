import Arrow from "@/components/Arrow";
import FooterSection from "@/components/FooterSection";
import Lover from "@/components/Lover";
import Image from "next/image";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 items-center">
      <section className="flex flex-col px-8 py-16 gap-4 min-h-screen lg:max-w-5xl w-full items-center">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bangers text-balance w-full text-center text-5xl">I'm</h2>
          <h1 className="font-bangers text-balance w-full text-center text-7xl">Juan Manuel <span className="text-teal-200">Amador</span> Roa</h1>

        </div>
        <Lover />
        <div className="text-3xl flex justify-center gap-2">
          <Link className="hover:scale-110 transition-all hover:text-teal-200" target="_blank" href={"https://github.com/odiador"}><FaGithub /></Link>
          <Link className="hover:scale-110 transition-all hover:text-teal-200" target="_blank" href={"https://linkedin.com/in/jamadorr/"}><FaLinkedin /></Link>
          <Link className="hover:scale-110 transition-all hover:text-teal-200" target="_blank" href={"https://www.instagram.com/amadour.r/"}><FaInstagram /></Link>
        </div>
        <Link href={"mailto:info@odiador.dev"} >
          <button className="flex text-xl font-semibold gap-2 items-center px-4 py-2 bg-foreground text-black rounded-lg transition-all hover:scale-110 font-questrial">
            <CgMail />info@odiador.dev</button>
        </Link>
        <p className="font-questrial text-balance w-full text-base"><span className="text-teal-200">Note:</span> this page is work in progress</p>
        <Arrow href={"#about"} />
      </section>
      <section id="about" className="flex flex-col px-8 py-16 gap-4 min-h-screen lg:max-w-5xl w-full">

        <h2 className="font-teko text-7xl text-teal-200">About me</h2>
        <div className="flex gap-8">
          <Link className="hover:scale-105 transition-all text-black bg-white size-52 rounded-xl flex items-center justify-center" target="_blank" href={"https://leetcode.com/u/odiador/"}>
            <SiLeetcode className="size-40" />
          </Link>
          <Link className="hover:scale-105 transition-all bg-white size-52 rounded-xl flex items-center justify-center" target="_blank" href={"https://judge.beecrowd.com/en/profile/831384"}>
            <Image src={"https://resources.beecrowd.com.br/judge/img/5.0/logo-beecrowd.png"} alt={"Beecrowd"} width={200} height={116} className="h-fit" />
          </Link>
        </div>
        <Arrow href={"#projects"} />
      </section>
      <section id="projects" className="flex flex-col px-8 py-16 gap-4 min-h-screen lg:max-w-5xl w-full">

        <h2 className="font-teko text-7xl text-teal-200">My Projects</h2>
        <div className="flex gap-4">
          <Link href={"https://amaevents.vercel.app"} target="_blank"
            className="w-[512px] px-4 py-8 rounded-xl group border-white/10 border-[1px] flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 transition-all">
            <label className="w-full font-teko text-2xl text-teal-200">AmaTickets</label>
            <p className="text-xl text-balance font-questrial">Web app fullstack relacionada con la compra de tickets y boletería para eventos.</p>
            <Image src={"/amatickets.png"} alt={"Amatickets"} width={512} height={300} className="w-full h-fit rounded-xl group-hover:scale-[1.025] transition-all" />
          </Link>
          <Link href={"https://4colors.odiador.dev"} target="_blank"
            className="w-[512px] px-4 py-8 rounded-xl group border-white/10 border-[1px] flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 transition-all">
            <label className="w-full font-teko text-2xl text-teal-200">Four Colors theorem</label>
            <p className="text-xl text-balance font-questrial">Demostración visual del teorema de los cuatro colores usando el algoritmo de Welsh-Powell</p>
            <Image src={"/4colors.png"} alt={""} width={512} height={300} className="w-full h-fit rounded-xl group-hover:scale-[1.025] transition-all" />
          </Link>
        </div>
        <div className="flex flex-col">
        </div>
      </section>
      <FooterSection />
    </div>
  );
}

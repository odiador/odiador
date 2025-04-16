import Arrow from "@/components/Arrow";
import FooterSection from "@/components/FooterSection";
import Lover from "@/components/Lover";
import { aboutme } from "@/info/texts";
import Image from "next/image";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 items-center">
      <Analytics />
      <Hero />
      <About />
      <Projects />
      <FooterSection />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="flex flex-col px-8 pt-16 gap-4 min-h-screen lg:max-w-5xl w-full items-center">
      <div className="flex flex-col items-center justify-center size-fit gap-4">
        <h2 className="font-bangers text-balance w-full text-center text-5xl">I&apos;m</h2>
        <h1 className="font-bangers text-balance w-full text-center text-7xl">Juan Manuel <span className="text-teal-200">Amador</span> Roa</h1>
        <div className="text-3xl flex justify-center gap-2">
          <Link className="hover:scale-110 transition-all hover:text-teal-200" target="_blank" href={"https://github.com/odiador"}><FaGithub /></Link>
          <Link className="hover:scale-110 transition-all hover:text-teal-200" target="_blank" href={"https://linkedin.com/in/jamadorr/"}><FaLinkedin /></Link>
          <Link className="hover:scale-110 transition-all hover:text-teal-200" target="_blank" href={"https://www.instagram.com/amadour.r/"}><FaInstagram /></Link>
        </div>
        <Link href={"mailto:info@odiador.dev"} >
          <button className="flex text-xl font-semibold gap-2 items-center px-4 py-2 bg-foreground text-black rounded-lg transition-all hover:scale-110 font-questrial">
            <CgMail />info@odiador.dev</button>
        </Link>
      </div>
      <div className="h-full flex-1 flex flex-col justify-between w-full pt-2">
        <Lover />
        <p className="font-questrial text-balance w-full text-xs"><span className="text-teal-200">Note:</span> this page is work in progress</p>
      </div>
      <Arrow href={"#about"} />
    </section>);
}
const About = () => {
  return (
    <section id="about" className="flex flex-col items-center p-8 min-h-screen lg:max-w-5xl w-full justify-between">
      <div className="w-full">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            li: ({ children }) => <p className="font-questrial text-xl">{children}</p>, // Customize bold text
            p: ({ children }) => <p className="list-inside list-item font-questrial text-xl">{children}</p>, // Customize bold text
            strong: ({ children }) => <span className="text-teal-200 font-bold">{children}</span>, // Customize bold text
            h1: ({ children }) => <h1 className="font-teko text-7xl text-teal-200">{children}</h1>, // Customize H1
            a: ({ href, children }) => <Link className="text-teal-400 underline" href={href || "#"} target={href?.startsWith("#") ? undefined : "_blank"}>{children}</Link>, // Customize H1
            link: ({ children }) => <span className="text-teal-400 underline">{children}</span>, // Customize H1
          }}
        >
          {aboutme}
        </ReactMarkdown>
        <div className="flex flex-wrap gap-2 pt-8">
          <Link className="hover:scale-105 transition-all text-black bg-white size-10 rounded-xl flex items-center justify-center p-2" target="_blank" href={"https://leetcode.com/u/odiador/"}>
            <SiLeetcode className="size-10" />
          </Link>
          <Link className="hover:scale-105 transition-all bg-white size-10 rounded-xl flex items-center justify-center p-2" target="_blank" href={"https://uhunt.onlinejudge.org/id/1620561"}>
            <Image src={"https://uhunt.onlinejudge.org/images/uva.png"} alt={"uva"} width={256} height={256} className="h-fit" />
          </Link>
        </div>
      </div>
      <Arrow href={"#projects"} />
    </section>)
}

const projects: { name: string; href: string, description: string; image?: string }[] = [
  {
    name: "AmaTickets",
    href: "https://amaevents.vercel.app",
    description: "Web app fullstack relacionada con la compra de tickets y boletería para eventos.",
    image: "/amatickets.png"
  },
  {
    name: "Four Colors theorem",
    href: "https://4colors.odiador.dev",
    description: "Visual demonstration of the four color theorem using the Welsh-Powell algorithm.",
    image: "/4colors.png"
  },
  {
    name: "Cafesports",
    href: "https://cafesports.club",
    description: "Team dedicated to promoting esports in the department of Quindío, Colombia.",
    image: "/cafesports.png"
  },
  {
    name: "Solventium",
    href: "https://solventium.net",
    description: "Colombian company specializing in technological and legal solutions (WIP).",
    image: "/solventium.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col p-8 gap-4 min-h-screen lg:max-w-5xl w-full">
      <h2 className="font-teko text-7xl text-teal-200">My Projects</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.href}
            target="_blank"
            className="w-[448px] px-4 py-8 rounded-xl group border-white/10 border-[1px] flex flex-col items-center justify-between gap-2 bg-white/5 hover:bg-white/10 transition-all"
          >
            <div className="flex flex-col w-full">
              <label className="w-full font-teko text-2xl text-teal-200">{project.name}</label>
              <p className="text-xl text-balance font-questrial w-full">{project.description}</p>
            </div>
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                width={512}
                height={300}
                className="w-full h-fit rounded-xl group-hover:scale-[1.025] transition-all"
              />
            ) : (
              <div className="w-full bg-white/5 animate-pulse h-64 rounded-xl group-hover:scale-[1.025] transition-all"></div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
import Image from "next/image"
import photo from "../assets/photo.jpg"
import projectMeorganizapp from "../assets/meorganizapp.png"
import projectCalculator from "../assets/matemaquina.png"
import businessCard from "../assets/businessCard.png"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import {
  IoDocumentTextOutline,
  IoLogoFigma,
  IoLogoWhatsapp,
} from "react-icons/io5"
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs } from "react-icons/fa"
import { TbBrandJavascript, TbBrandVite } from "react-icons/tb"
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi"
import { SiJira } from "react-icons/si"
import { TechnologieIcon } from "./components/technoligies-icon"
import QuickLinks from "./components/quick-links"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center p-6">
      <div className="min-h-screen min-w-screen max-w-5xl py-24">
        <p className="font-bold sm:text-3xl md:text-4xl xl:text-5xl">
          Olá, sou <span className="">Cris Ayres</span>
        </p>
        <div className="flex flex-wrap items-baseline font-bold text-5xl sm:text-8xl md:text-9xl xl:text-[150px]">
          <h1 className="mr-6 xl:mr-10">REACT</h1>
          <div className="flex text-xl sm:text-5xl md:text-6xl xl:text-7xl gap-3">
            <QuickLinks
              link={"https://www.linkedin.com/in/cristine-ayres"}
              icon={<BsLinkedin />}
              title={"Linkedin"}
            />
            <QuickLinks
              link={"https://github.com/KikiAyres"}
              icon={<BsGithub />}
              title={"GitHub"}
            />
            <QuickLinks
              link={"/cvCrisAyres.pdf"}
              icon={<IoDocumentTextOutline />}
              title={"Currículo"}
            />
            <QuickLinks
              link={"https://wa.me/5583998440122"}
              icon={<IoLogoWhatsapp />}
              title={"WhatsApp"}
            />
          </div>
          <h1>DEVELOPER</h1>
        </div>
        <p className="flex text-xs w-80 sm:w-[624px] sm:text-sm md:w-[840px] md:text-lg xl:w-full xl:text-xl text-justify">
          Transformo ideias em soluções digitais que proporcionam experiências
          incríveis aos usuários
        </p>
      </div>

      <div className="min-w-screen max-w-5xl">
        <h1 className="sm:text-3xl md:text-4xl xl:text-5xl pb-2">Sobre mim</h1>
        <div className="flex flex-wrap justify-between w-5xl">
          <p className="text-xs w-full sm:text-sm md:w-4/6 md:text-lg xl:w-4/6 xl:text-lg text-pretty text-justify">
            Sou desenvolvedora front-end focada em React.js e estudante do
            último semestre de Análise e Desenvolvimento de Sistemas. Estagio na
            área, onde aplico e aprimoro minhas habilidades técnicas diariamente
            criando interfaces modernas e funcionais. Tenho experiência no
            desenvolvimento de aplicações interativas, utilizando React.js,
            Next.js, TypeScript e estilização com Tailwind CSS. Minha abordagem
            combina atenção aos detalhes e boas práticas de desenvolvimento,
            incluindo versionamento com Git, integração com APIs e aplicação de
            metodologias ágeis, como Scrum. A paixão por programação e o desejo
            de entregar soluções criativas e eficientes me motivam a crescer
            continuamente na área. Valorizo a experiência do usuário como
            prioridade no design e na funcionalidade das aplicações, buscando
            colaborar em projetos que impactem positivamente os usuários e o
            mercado.
          </p>
          <div className="w-full md:w-[255px] flex justify-center">
            <Image
              className="shadow-sm shadow-zinc-500 object-cover"
              width={240}
              height={390}
              src={photo}
              alt="Cris Ayres"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full min-w-screen max-w-5xl py-24">
        <h1 className="text-start sm:text-3xl md:text-4xl xl:text-5xl pb-2">
          Projetos
        </h1>

        <div className="flex flex-col items-center justify-center bg-faded rounded-md p-3 mb-4 sm:p-6 gap-4 text-sm sm:text-base">
          <Image
            className="rounded-md object-scale-down"
            width={1080}
            height={1080}
            src={projectMeorganizapp}
            alt="meorganizApp"
            priority
          />

          <div className="flex flex-wrap justify-center gap-3">
            <TechnologieIcon icon={<RiReactjsLine />} text={"React.js"} />
            <TechnologieIcon icon={<BiLogoTypescript />} text={"Typescript"} />
            <TechnologieIcon icon={<RiNextjsFill />} text={"Next.js"} />
            <TechnologieIcon icon={<FaGitAlt />} text={"Git"} />
            <TechnologieIcon icon={<TbBrandVite />} text={"Vite.js"} />
            <TechnologieIcon
              icon={<RiTailwindCssFill />}
              text={"TailwindCSS"}
            />
            <TechnologieIcon icon={<IoLogoFigma />} text={"Figma"} />
            <TechnologieIcon icon={<FaNodeJs />} text={"Node.js"} />
            <TechnologieIcon icon={<SiJira />} text={"Jira"} />
          </div>

          <h1 className="text-justify py-5">
            O meorganizApp é um projeto que estou desenvolvendo durante meu
            estágio na Nullink Desenvolvimento de Tecnologias, focado em
            simplificar a gestão de serviços em estabelecimentos como salões de
            beleza e barbearias. O aplicativo conecta administradores,
            profissionais e clientes de forma prática e organizada, com uma
            interface moderna, responsiva e otimizada para todos os
            dispositivos. Minhas atividades incluem criar e manter
            funcionalidades, implementar integrações com APIs e documentar o
            código com as melhores práticas, refletindo meu compromisso em
            entregar soluções tecnológicas de qualidade.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center bg-faded rounded-md p-3 mb-4 sm:p-6 gap-4 text-sm sm:text-base">
          <a
            href="https://kikiayres.github.io/BusinessCard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-md object-scale-down"
              width={640}
              height={762}
              src={businessCard}
              alt="Business Card"
              priority
            />
          </a>

          <div className="flex flex-wrap justify-center gap-3">
            <TechnologieIcon icon={<FaHtml5 />} text={"HTML"} />
            <TechnologieIcon icon={<FaCss3Alt />} text={"CSS"} />
            <TechnologieIcon icon={<TbBrandJavascript />} text={"JavaScript"} />
          </div>

          <h1 className="text-justify py-5">
            Business Card é um cartão de apresentação desenvolvido utilizando
            JavaScript, HTML e CSS foi meu primeiro projeto certificado
            realizado com a Rocketseat. Para abrir clique na imagem.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center bg-faded rounded-md p-3 mb-4 sm:p-6 gap-4 text-sm sm:text-base">
          <a
            href="https://kikiayres.github.io/Calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="rounded-md object-scale-down"
              width={445}
              height={584}
              src={projectCalculator}
              alt="matemáquina"
              priority
            />
          </a>

          <div className="flex flex-wrap justify-center gap-3">
            <TechnologieIcon icon={<FaHtml5 />} text={"HTML"} />
            <TechnologieIcon icon={<FaCss3Alt />} text={"CSS"} />
            <TechnologieIcon icon={<TbBrandJavascript />} text={"JavaScript"} />
          </div>

          <h1 className="text-justify py-5">
            Matemáquina é uma calculadora simples desenvolvida utilizando
            JavaScript, HTML e CSS. É uma aplicação web que permite realizar
            operações matemáticas básicas de adição, subtração, multiplicação e
            divisão. Este foi meu primeiro projeto de programação. Para abrir
            clique na imagem.
          </h1>
        </div>
      </div>
    </div>
  )
}

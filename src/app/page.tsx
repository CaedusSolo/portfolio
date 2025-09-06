import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col w-full items-center justify-center mx-auto">
        <Intro />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
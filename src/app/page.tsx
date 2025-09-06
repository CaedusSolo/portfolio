import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Projects from "../components/Projects.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col w-full items-center justify-center mx-auto">
        <Intro />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

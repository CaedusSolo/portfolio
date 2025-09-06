import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex flex-col w-full items-center justify-center mx-auto">
        <Intro />
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col w-full items-center justify-center mx-auto">
        <h1 className="text-4xl">Hello, I'm Ying Tong</h1>
        <h3 className="text-lg">A developer passionate in web dev</h3>
        <Image src="/next.svg" width={180} height={200} alt="NextJS logo" />
      </main>
      <Footer />
    </>
  );
}

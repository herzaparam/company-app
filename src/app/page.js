import Footer from "@/component/Footer";
import Service from "@/component/Landing/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main style={{ minHeight: "200vh" }}>
        <Service />
      </main>
      <Footer />
    </>
  );
}

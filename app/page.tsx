import Image from "next/image";
import Cards from "./ui/components/Cards";

export default function Home() {
  return (
    <>
      <main>
        <div className="main-container ">
          <Image width={3500} height={3500} className="w-full rounded-lg" src='/images/heroIcon.jpg' alt="hero" />
          <Cards type="blue"></Cards>
        </div>
      </main>
    </>
  );
}

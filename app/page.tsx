import InfinitySlider from "./ui/components/InfinitySlider";
import Hero from "./ui/home/Hero";

export default function Home() {

  const partners = [
    "images/partners/b1.png",
    "images/partners/b2.png",
    "images/partners/b3.png",
    "images/partners/b4.png",
    "images/partners/b5.png",
    "images/partners/b6.png",
    "images/partners/b7.png",
  ];

  return (
    <>
      <main>
        <Hero />
        <section className="main-container mt-11 ">
          <p className="text-2xl lg:text-4xl tracking-wider font-normal uppercase">500+ клиентов уже с нами</p>
          <article>
            <InfinitySlider partners={partners} />
          </article>
        </section>
      </main>
    </>
  );
}

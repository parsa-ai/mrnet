import Image from "next/image";

import Cards from "../components/Cards";
import BoxIcon from "../icons/BoxIcon";
import HandlerIcon from "../icons/HandlerIcon";
import WifiIcon from "../icons/WifiIcon";
import Button from "../components/Button";
import SliderProvider from "../components/SliderProvider";

function Hero() {
    const items = [
        <Cards type="blue" className="flex flex-col h-56 justify-between">
            <WifiIcon />
            <p className=" uppercase  text-xl tracking-wider">надежный и быстрый интернет, который не падает</p>
        </Cards>,
        <Cards type="blue" className="flex flex-col h-56 justify-between">
            <HandlerIcon />
            <p className=" uppercase  text-xl tracking-wider">КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ ГИБКУЮ НАСТРОЙКУ</p>
        </Cards>,
        <Cards type="blue" className="flex flex-col h-56 justify-between">
            <BoxIcon />
            <p className=" uppercase  text-xl tracking-wider">Единый инструмент для масштабирования по всей стране</p>
        </Cards>
    ];
    return (
        <section className="main-container flex flex-col gap-3 ">
            <article className=" flex flex-col lg:flex-row-reverse gap-3 ">
                <Image width={3500} height={3500} className="w-full lg:w-5/12 rounded-lg" src='/images/heroIcon.jpg' alt="hero" />
                <Cards type="orange">
                    <p className="uppercase text-3xl lg:text-[50px]">Беспроводной интернет для бизнеса</p>
                    <p className="uppercase text-lg text-[26px] mt-6">от <span className="font-black">2 990</span> рублей* в месяц!
                        Установка по любому адресу в РФ!</p>
                    <Button className="my-10">попробовать</Button>
                    <ul className="list-disc pl-4 text-lg">
                        <li>Мультироутер с технологией суммирования нескольких каналов связи в один</li>
                        <li>Высокая скорость и отказоустойчивость интернет-соединения  </li>
                        <li>Единый договор на ПО, оборудование и связь</li>
                        <li>Простое подключение за 7 минут</li>
                        <li>Моментальная техподдержка 24/7 в Telegram</li>
                    </ul>
                    <p className="text-xs text-gray mt-7">* Без учета стоимости оборудования, возможен выкуп оборудования или аренда, стоимость будет зависеть от модели мультироутера
                    </p>
                </Cards>
            </article>
            <article className="hidden gap-3 lg:flex-row lg:flex">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="w-full">
                            {item}
                        </div>
                    )
                })}
            </article>
            <article className="lg:hidden block flex-col gap-3">
                <SliderProvider items={items}></SliderProvider>
            </article>

        </section>
    )
}

export default Hero
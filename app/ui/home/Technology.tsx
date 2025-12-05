import Image from "next/image";

import Title from '../components/Title'
import Cards from '../components/Cards'
import Button from '../components/Button';

function Technology() {
    return (
        <section className="main-container mt-11">
            <Title className="mb-11">технология</Title>
            <article className=" flex flex-col lg:flex-row gap-3  ">
                <Image width={3500} height={3500} className="w-full lg:w-7/12  object-fill rounded-lg" src='/images/технология.jpg' alt="hero" />
                <Cards type="orange" className="flex min-h-[370px] md:min-h-[300px] lg:min-h-[460px] flex-col justify-between" >
                    <p className="uppercase text-lg/[22px] lg:text-2xl/[30px] mt-6">
                        Прокачайте свой интернет с высокоскоростными технологиями mrnet. Наш мультироутер суммирует несколько каналов связи в один (технология бондинг), значительно повышая устойчивость и скорость соединения!
                    </p>
                    <Button className="">узнать больше</Button>
                </Cards>
            </article>
        </section>
    )
}

export default Technology
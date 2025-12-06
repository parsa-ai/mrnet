import Image from "next/image";

import Title from '../components/Title'
import Cards from '../components/Cards'
import Button from '../components/Button';

function Technology() {
    return (
        <>
            <section className="main-container mt-11">
                <Title className="mb-11">технология</Title>
                <article className=" flex flex-col lg:flex-row gap-3  ">
                    <Image width={3500} height={3500} className="w-full lg:w-7/12  object-fill rounded-lg" src='/images/технология.jpg' alt="hero" />
                    <Cards type="orange" className="flex min-h-[370px] md:min-h-[300px] lg:min-h-[460px] flex-col justify-between" >
                        <p className="uppercase text-lg/[22px] lg:text-2xl/[30px] mt-6">
                            Прокачайте свой интернет с высокоскоростными технологиями mrnet. Наш мультироутер суммирует несколько каналов связи в один (технология бондинг), значительно повышая устойчивость и скорость соединения!
                        </p>
                        <Button>узнать больше</Button>
                    </Cards>
                </article>
            </section>
            <section className="flex flex-col lg:flex-row main-container gap-18 lg:gap-3 my-18">
                <article className="lg:w-6/12">
                    <Title className="mb-9">не балансируем</Title>
                    <Image width={3500} height={3500} className="w-full h-[400px]  object-cover rounded-lg" src='/images/train.jpg' alt="балансируем" />
                </article>
                <article className="lg:w-6/12">
                    <Title className="mb-9">а суммируем</Title>
                    <Image width={3500} height={3500} className="w-full  h-[400px] object-cover rounded-lg" src='/images/train2.jpg' alt="а суммируем" />
                </article>
            </section>
            <Title className="mb-9 main-container text-2xl">Настраивайте сеть и управляйте всеми устройствами через единый личный кабинет</Title>
            <section className="flex flex-col lg:flex-row gap-3 main-container">
                <article className="w-full lg:w-5/12 flex flex-col gap-3">
                    <Cards type="blue" className="flex min-h-[220px]  flex-col justify-between" >
                        <p className="text-[19px] lg:text-[26px] uppercase">мониторинг</p>
                        <p className="text-lg/[170%] lg:text-lg/[250%]">
                            Графики потребления трафика

                            Просмотр подключенных к мультироутеру сетевых устройств
                        </p>
                    </Cards>
                    <Cards type="blue" className="flex min-h-[220px]  flex-col justify-between" >
                        <p className="text-[19px] lg:text-[26px] uppercase">мониторинг</p>
                        <p className="text-lg/[170%] lg:text-lg/[250%]">
                            Графики потребления трафика

                            Просмотр подключенных к мультироутеру сетевых устройств
                        </p>
                    </Cards>
                </article>
                <article className="w-full lg:w-7/12">
                    <Image width={3500} height={3500} className="w-full  h-[310px] lg:h-[452px] object-cover rounded-lg" src='/images/mackbock.jpg' alt="личный кабинет" />
                </article>
            </section>
            <section className="main-container mt-9 flex justify-center ">
                <Button>Испытать все возможности</Button>
            </section>
            
        </>
    )
}

export default Technology
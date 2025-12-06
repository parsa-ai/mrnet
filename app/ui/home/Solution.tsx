import Image from "next/image";

import Cards from "../components/Cards"
import SliderProvider from "../components/SliderProvider"
import Title from "../components/Title"
import ButtonGr from "../components/ButtonGr";

function Solution() {
    const data = [
        <Cards type="orange" className="flex flex-col gap-3 min-h-[325px] justify-between lg:justify-start h-full lg:min-h-[308px]" >
            <h6 className="text-[19px] lg:text-[26px]/[32px] mb-10">Ценим ваше время</h6>
            <p className="text-lg">Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся). </p>
            <p className="text-lg">Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами</p>
        </Cards>,
        <Cards type="orange" className="flex flex-col gap-3 min-h-[325px] justify-between lg:justify-start h-full lg:min-h-[308px]" >
            <h6 className="text-[19px] lg:text-[26px]/[32px] mb-10">Безграничные Возможности</h6>
            <p className="text-lg">Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.</p>
            <p className="text-lg">Всё это — без необходимости заключения дополнительных контрактов</p>
        </Cards>,
        <Cards type="orange" className="flex flex-col gap-3 min-h-[325px] justify-between lg:justify-start h-full lg:min-h-[308px]" >
            <h6 className="text-[19px] lg:text-[26px]/[32px] mb-10">Индивидуальный подход</h6>
            <p className="text-lg">Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.</p>
            <p className="text-lg">Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт</p>
        </Cards>

    ]

    return (
        <>
            <section className="main-container mt-13">
                <Title className="mb-9 max-w-[1141px]">Решение, созданное айтишниками для айтишников</Title>
                <article className="hidden w-full lg:flex justify-center gap-3">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="w-full">
                                {item}
                            </div>
                        )
                    })}
                </article>
                <article className="w-full lg:hidden justify-center items-stretch gap-3">
                    <SliderProvider items={data}></SliderProvider>
                </article>

            </section>
            <section className="mt-3 inline-flex flex-col-reverse lg:flex-row items-stretch main-container gap-3 ">
                <article className="w-full h-[310px] lg:w-1/2 lg:min-h-[400px] flex flex-col  justify-between px-7 py-4  bg-linear-to-tr from-orange via-pink to-blue rounded-lg text-black ">
                    <h5 className="text-2xl/[32px] max-w-[335px] lg:max-w-max font-medium lg:text-[54px]/normal uppercase">Попробуйте 14 дней бесплатно</h5>
                    <p className="text-lg/[22px] lg:text-2xl">Развивайте свою инфру с mrnet. Без лишних затрат и костылей. Высокоскоростной интернет — удобно, эффективно!</p>
                </article>
                <article className="w-full  lg:w-1/2 lg:min-h-[400px] h-full mt-10 lg:mt-0">
                    <Image width={3500} height={3500} className="w-full max-h-[400px] min-h-[inherit] h-full object-cover rounded-lg" src='/images/Wifi.jpg' alt="hero" />
                </article>
            </section>
            <section className="main-container py-3 lg:py-6 flex justify-center items-center">
                <ButtonGr>Начать!</ButtonGr>
            </section>
        </>
    )
}

export default Solution
import Cards from "../components/Cards"
import SliderProvider from "../components/SliderProvider"
import Title from "../components/Title"

function Solution() {
    const data = [
        <Cards type="orange" className="flex flex-col gap-3 min-h-[325px] justify-between lg:justify-start lg:min-h-[308px]" >
            <h6 className="text-[19px] lg:text-[26px]/[32px] mb-10">Ценим ваше время</h6>
            <p className="text-lg">Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся). </p>
            <p className="text-lg">Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами</p>
        </Cards>,
        <Cards type="orange" className="flex flex-col gap-3 min-h-[325px] justify-between lg:justify-start lg:min-h-[308px]" >
            <h6 className="text-[19px] lg:text-[26px]/[32px] mb-10">Безграничные Возможности</h6>
            <p className="text-lg">Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.</p>
            <p className="text-lg">Всё это — без необходимости заключения дополнительных контрактов</p>
        </Cards>,
        <Cards type="orange" className="flex flex-col gap-3 min-h-[325px] justify-between lg:justify-start lg:min-h-[308px]" >
            <h6 className="text-[19px] lg:text-[26px]/[32px] mb-10">Индивидуальный подход</h6>
            <p className="text-lg">Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.</p>
            <p className="text-lg">Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт</p>
        </Cards>

    ]

    return (
        <section className="main-container my-13">
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
    )
}

export default Solution
import Title from '../components/Title'
import InfinitySlider from '../components/InfinitySlider'

function Partners() {
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
        <section className="main-container my-11 ">
            <Title className="mb-11">500+ клиентов уже с нами</Title>
            <article>
                <InfinitySlider partners={partners} />
            </article>
        </section>
    )
}

export default Partners
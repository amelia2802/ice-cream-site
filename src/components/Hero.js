import brandImg from "../img/brand-ice-cream.png"
export default function Hero(){
    return(
        <section className="hero-section">
            <section className="about-brand">
                <section className="brand">
                    <h1 className="brand-name">Luvelicious</h1>
                    <p className="brand-tag">Dive into a world of creamy perfection, where every bite tells a story of quality and delight.</p>
                </section>
                <section className="brand-img">
                    <img src={brandImg} alt="raspberry icecream"/>
                </section>
            </section>
            <button className="jump-menu"><a href="#product">Menu</a></button>
        </section>
    )
}
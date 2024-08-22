export default function About(){
    return(
        <section id="about-section" className="about">
            <img className="top-art" src={require("../img/art1.png")} alt="icecream"/>
            <div className="article">
                <h2>about us</h2>
                <article>At Luvelicious, we believe that great ice cream starts with great ingredients. That’s why we source the finest local dairy, fruits, and flavorings to create our irresistible blends. From classic flavors like Vanilla Bean Dream to our adventurous Salted Caramel Pretzel Crunch, every scoop is made with love, creativity, and a sprinkle of magic.

                But we’re not just about amazing ice cream—we’re about building a community. Our ice cream shops are designed to be cozy, welcoming spaces where you can relax, connect, and share the joy of a great treat. Whether you’re grabbing a cone on a sunny day or enjoying a sundae with friends, Luvelicious is here to make every moment a bit sweeter.

                Join us on our journey to spread happiness, one scoop at a time. Because at Luvelicious, we’re more than just an ice cream brand; we’re a celebration of all the little things that make life delightful. Thank you for being a part of our story!
                </article>
            </div>
            <img className="bottom-art" src={require("../img/art2.png")} alt="icecream"/>
        </section>
    )
}
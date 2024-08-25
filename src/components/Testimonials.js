import React from 'react';
import testImg from "../img/test.png";
import filledStar from "../img/star-filled.png";
import blankStar from "../img/star-blank.png";  // Import the blank star

export default function Testimonials() {
    const testimonials = [
        {
            name: "Emma Wilson",
            rating: 5,
            text: "I recently discovered Luvelicious, and I’m hooked! The Raspberry Ripple is hands down my favorite flavor—it's the perfect combination of sweet and tangy. The raspberry sauce tastes so fresh and pairs beautifully with the creamy ice cream. It’s the perfect treat after a long day, and I love knowing I’m enjoying quality ingredients. Can’t wait to try more flavors!"
        },
        {
            name: "John Smith",
            rating: 4,
            text: "Luvelicious is hands down the best ice cream I've ever had! The Vanilla Bean flavor is an absolute classic—smooth, rich, and bursting with real vanilla flavor. I love how they use natural ingredients, and you can really taste the difference. My kids are obsessed with the Strawberry Swirl, and it’s become a family favorite."
        }
    ];

    return (
        <section id='review-card'>
            <h2>Whats our customer's are saying?</h2>
            <section className="testimonials">
            {testimonials.map((testimonial, index) => (
                <div key={index} className={`test-card ${index % 2 === 0 ? 'up-card' : 'down-card'}`}>
                    <h4>{testimonial.name}</h4>
                    <div className="ratings">
                        {[...Array(5)].map((_, i) => (
                            <img 
                                key={i} 
                                src={i < testimonial.rating ? filledStar : blankStar} 
                                alt='star' 
                            />
                        ))}
                    </div>
                    <p>{testimonial.text}</p>
                </div>
            ))}
            <img className="test-im" src={testImg} alt='strawberry ice cream' />
        </section>
        </section>
    );
}

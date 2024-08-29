import React from "react";
export default function Footer(){

    const [formData, setFormData] = React.useState({
        fullName:"",
        email: "",
        joinedNewsletter: true
    })
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if(formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return(
        <footer id="footer">
            <div className="footer">
            <section className="address">
                <h4>Luvelicious Ice Cream Parlor</h4>
                
                <p>123 Sweet Treats Avenue</p>
                    <p>Frostville, FL 56789</p>
                    <p>United States</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@luvelicious.com</p>
            </section>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Full Name"
                    className="form--input"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    required
                    />
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <textarea 
                    type="text" 
                    placeholder="Feedback (optional)"
                    className="form--input message"
                    name="feedback"
                    onChange={handleChange}
                    value={formData.feedback}
                />
                
                <div className="form--marketing">
                    <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinedNewsletter"
                    onChange={handleChange}
                    checked={formData.joinedNewsletter}
                    />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Submit
                </button>
            </form>
            </div>
        </footer>
    )
}
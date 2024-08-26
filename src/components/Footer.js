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
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Full Name"
                    className="form--input"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    />
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="text" 
                    placeholder="Message"
                    className="form--input"
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
                    Sign up
                </button>
            </form>
        </footer>
    )
}
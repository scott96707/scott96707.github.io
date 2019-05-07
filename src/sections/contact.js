import React from "react";
import LinkedInImage from "./linkedinimage"

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        
    }

    render() {
        return (
            <div className="section" id="contact">
                <div className="section__left">
                    <h1>Contact Me</h1>
                    <p>If you'd like to get in touch, please message me through LinkedIn.</p>
                </div>
                <div className="section__right" id="contact__right">
                    <a href="https://linkedin.com/in/scott96707">
                        <LinkedInImage />
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;
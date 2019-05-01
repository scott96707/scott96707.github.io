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
            
            /* Not using this form until I host my page on a website outside of github 

            <div className="section" id="contact">
                <div className="section__left">
                    <h2>Contact Me</h2>
                </div>
                <div className="section__right">
                    <div >
                        <form style={{ display: `flex`, flexDirection: `column` }} onSubmit={this.handleSubmit}>
                            <label>
                                name
                            </label>
                                <input type="text" id="input__name" tabIndex="1" />
                            <label>
                                email
                            </label>
                                <input type="email" id="input__email" tabIndex="2" />
                            <label>
                                message
                            </label>
                                <input type="text" id="input__message" tabIndex="3" />
                            <input value="Submit" type="submit" tabIndex="4" />
                        </form>
                    </div>
                </div>
            </div> */
        )
    }
}

export default Contact;
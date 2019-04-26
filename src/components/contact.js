import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John',
            email: 'wick@gmail.com',
            message: 'hello',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        alert(this.state.name + ' ' + this.state.email + ' ' + this.state.message);
    }

    render() {
        return (
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
                                <input />
                            <label>
                                email
                            </label>
                                <input />
                            <label>
                                message
                            </label>
                                <input />
                            <input value="submit" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;
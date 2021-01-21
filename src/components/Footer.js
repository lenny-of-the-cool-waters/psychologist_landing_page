import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_div">
            <div className="contacts">
                <h6 className="contact_location">NAIROBI</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem, ipsum dolor.</p>

                <h6 className="contact_location"><hr/>MOMBASA</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>

            <div className="subscription">
                <h3>NEWSLETTER <br/>SUBSCRIPTION</h3>
                <form className="form">
                    <div className="form-group">
                        <label for="user_email">WRITE YOUR EMAIL HERE</label>
                        <input type="email" className="form-control" id="user_email" placeholder="jdoe@mail.com"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer

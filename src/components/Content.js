import React from 'react'
import './Content.css'
import image_1 from '../img/pexels-taryn-elliott-3889926.jpg'
import image_2 from '../img/pexels-eriks-abzinovs-3160398.jpg'

const Content = () => {
    return (
        <div className="content_container">
            <div className="img_container">
                <img src={image_1} className="image_1" alt=""/>
                <div className="img_text">LET'S <br/>HEAL</div>
            </div>

            <div className="inner_cont row">
                <div className="col-sm-12 col-md-6" id="cont"><p className="cont_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore velit dicta quisquam autem. Doloremque culpa expedita soluta. Voluptatibus ea cumque impedit maiores omnis minima fuga optio recusandae blanditiis repudiandae. Pariatur sunt adipisci commodi illo quas consectetur alias cupiditate quo quia impedit eligendi, corrupti qui repudiandae inventore eum, eveniet mollitia molestias repellat possimus odit ipsam unde obcaecati exercitationem et? Porro.</p></div>
                <div className="col-sm-12 col-md-6 img_2_container">
                    <img src={image_2} className="img_2" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Content

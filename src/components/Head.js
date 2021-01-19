import React from 'react'
import './Head.css'

const Head = () => {
    return (
        <div className="container d-flex flex-row">
            <div className="head_cont text-center ">
                <div>
                    <p className="mini_title">PSYCHIATRIC AIDES</p>
                    <h2>LEO GIT</h2>
                </div>
                <div className="row" id="head_content">
                    <div className="col-sm-10 col-md-5 offset-sm-1 offset-md-1 mr-1 text-left cont_left">
                        <p className="content_p_left"><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium distinctio odio numquam, amet saepe nisi voluptas explicabo similique officiis.</strong></p>
                        <p className="content_p_left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum neque consectetur sint mollitia beatae ad repellat provident! Possimus fugiat eaque itaque explicabo harum qui quo dolor culpa omnis, error iusto. Iste sunt vitae saepe omnis, doloribus aliquam doloremque atque sapiente!</p>
                    </div>
                    <div className="col-sm-10 col-md-5 offset-sm-1 offset-md-0 text-left">
                        <p className="content_p_right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi placeat possimus ipsa libero eligendi aperiam dolorem illo earum explicabo ab asperiores necessitatibus hic minima soluta tempora debitis, nobis deserunt magnam. Cum mollitia, omnis architecto dolore neque eligendi?</p>
                    </div>
                </div>
                <div className="head_label">ABOUT US</div>
            </div>
        </div>
    )
}

export default Head

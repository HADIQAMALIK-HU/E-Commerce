import React from "react";
import './DescriptionBox.css'

function DescriptionBox(){
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet server as a virtual marketplace where businesses and individual showcase their products, internet with customers, and transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their convention accessibility, and the global reach they offer.</p>
                <p>E-commerce website typically display products or services a detailed descriptions, images, prices, and any avai;lable value(e.g., sizes, colors). Each product usually has its own with relevant information.</p>
            </div>
        </div>
    );
}

export default DescriptionBox;
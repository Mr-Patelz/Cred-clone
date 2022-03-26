import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="flex-container">
         <div className="flex-item-left">
           <div className="content">copyright © 2020-21 Dreamplug Technologies Pvt Ltd.</div>   
         </div> 
         <div className="flex-item-right">
         <div className="biGYe">
           <a target="_blank" className="irffNS">privacy policy</a>
           <a target="_blank" className="irffNS">terms and conditions</a>
           <a target="_blank" className="irffNS">returns and refund</a>
          </div>
         </div>
    </div>
  );
};

export default Footer;

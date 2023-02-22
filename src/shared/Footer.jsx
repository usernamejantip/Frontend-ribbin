import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <p className="copy">
          &copy; {new Date().getFullYear()} 
           𝗹 𝗥𝗜𝗕𝗕𝗜𝗡 𝗔𝗣𝗔𝗥𝗧𝗠𝗘𝗡𝗧 𝗦𝗔𝗟𝗔𝗬𝗔 𝗹
        </p>
      </footer>
    </div>
  );
};

export default Footer;
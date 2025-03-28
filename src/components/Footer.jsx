import React from "react";
import { footerlist } from "../constants"; 

const Footer = () => {
  return (
    <footer className="py-20 items-center justify-center flex flex-wrap">
      <div className="container items-center justify-around flex flex-wrap gap-4">
        {footerlist.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-2">{section.header}</h3>
            <ul className="list-none space-y-1">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

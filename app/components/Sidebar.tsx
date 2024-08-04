import React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="mt-5 sticky-top">
      <h5>Follow our social</h5>
      <hr />
      <p>
        <a href="#" className="app-link">
          <FaFacebook color="blue" size="30px" className="mx-2" />
          Blogwiz
        </a>
      </p>
      <a href="#" className="app-link">
        <p>
          <FaLinkedin color="darkblue" size="30px" className="mx-2" />
          Blogwiz
        </p>
      </a>
      <a href="#" className="app-link">
        <p>
          <FaGithub size="30px" color="gray" className="mx-2" />
          @blogwiz
        </p>
      </a>
      <a href="#" className="app-link">
        <p>
          <FaXTwitter color="black" size="30px" className="mx-2" />
          @_blogwiz
        </p>
      </a>
      <a href="#" className="app-link">
        <p>
          <FaWhatsapp color="green" size="30px" className="mx-2" />
          +12345678901
        </p>
      </a>
    </div>
  );
};

export default Sidebar;

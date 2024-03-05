import React from 'react';
// import { BsTwitter, BsInstagram } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/sum-it-up-9" target='_blank'>
        <FaGithub />
      </a>
     
    </div>
    <div>
      <a href="https://www.linkedin.com/in/sumit-adsul-956261194/" target='_blank'>
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://leetcode.com/1Taps/" target='_blank'>
        <SiLeetcode />
      </a>
    </div>
  </div>
);

export default SocialMedia;

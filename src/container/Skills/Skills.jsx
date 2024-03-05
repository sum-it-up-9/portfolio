import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';
import { SiMongodb } from 'react-icons/si';

const Skills = () => {

    const experiences=[];

    const skills = [
        {
          name: "HTML/CSS",
          icon: images.css,
          bgColor: "#edf2f8"
        },
        {
          name: "JavaScript",
          icon:images.javascript,
          bgColor: "#edf2f8"
        },
        {
          name: "React.js",
          icon: images.react,
          bgColor: "#edf2f8"
        },
        {
          name: "Node.js",
          icon: images.node,
          bgColor: "#edf2f8"
        },
        {
          name: "MongoDB",
          icon: images.mongo,
          bgColor: "#edf2f8"
        },
        {
          name: "C++",
          icon: images.cpp,
          bgColor: "#edf2f8"
        },
        {
          name: "Python",
          icon: images.python,
          bgColor: "#edf2f8"
        }
        // You can add more skills here
      ];
      




  return (
    <div style={{backgroundColor:'white'}}>
    <h2 className="head-text">Skills </h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      {/* <div className="app__skills-exp">
        {experiences && experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience.year}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {   experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div> */}
    </div>
  </div>
  )
}
export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
  );
  

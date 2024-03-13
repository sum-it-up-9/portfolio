import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from '../../wrapper';
import  {images} from '../../constants'
import './About.scss';
const About = () => {

    const abouts=[
        {
            title:'Easybite', description:'A ReactJS web app enabling users to search, filter, and order from restaurants, add items to cart, and mark favorites.', imgUrl:images.about04, link:'https://easybite.vercel.app/'
        },
        {
            title:'Commercecraft', description:'A MERN based ecommerce platform empowering users to browse, filter, and purchase products seamlessly',imgUrl:images.about01, link:'https://commercecraftt.vercel.app/'
        },
        {
            title:'Freelancegigs', description:'A freelance marketplace built with ReactJS, facilitating users to discover, filter, and engage with gigs effortlessly.', imgUrl:images.about03, link:'https://freelancegigs.vercel.app/'
        },
        {
          title:'SocialConnecti',
          description:'Social Media Webapp where a User can post different articles, add friends, like and comment on their posts ',
          imgUrl:images.about02,
          link:'https://github.com/sum-it-up-9/Mern_social_App',
        }
    ]

  return (
    <>
   
      <h2 className="head-text"> <span>Projects</span></h2>

        <div className="app__profiles">
        {abouts.map((about, index) => (
          <a style={{textDecoration:'none'}}  href={about.link} key={about.title} target="_blank" rel="noopener noreferrer">
            <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
            >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 ,textAlign:'justify'}}>{about.description}</p>
            </motion.div>
            </a>
        ))}
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'projects',
  'app__whitebg',
);

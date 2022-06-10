import React from 'react'
import { Link} from 'react-router-dom';
import bkg1 from '../img/space7.jpeg'
import styled from '../css/Index.module.scss'
// import styled from '../css/Index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Index = (proprs) =>{
    const emailHandler = () => {
        // create the email link
        // for(var e=0;e<allEls.length;e++){
        //     var el1 = allEls[e].getAttribute('data-el1');
        //     var el2 = allEls[e].getAttribute('data-el2');
        //     var elFull = el1+"@"+el2+".com";
        //     allEls[e].setAttribute('href', "mailto:"+elFull);
        // }
        console.log("hello")
    }

    return(
        <div className={styled.wrp}  style={{backgroundImage: `url(${bkg1})`}}>
            <div className={styled.txtWrp}>
                <h1 className="title">Lisa Broadhead</h1>
                <h4>Into the Great Unkown!</h4>
            </div>
            <main className="about">
                <ul className={styled.nav}>
                    <li className="about"><Link to="/about">About</Link></li>
                    <li className="skills"><Link to="/skills">Skills</Link></li>
                    <li className="projects"><Link to="/projects">Projects</Link></li>
                    <li className="blog"><Link to="/blog">Blog</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>

                <ul className={styled.socialLinks}>
                    <li><a href="https://github.com/lisabroadhead" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/lisa-broadhead/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a onClick={emailHandler} data-el1="lb.bradohead" data-el2="gmail"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>
                
            </main>
        </div>
    )
} 

export default Index;


// email
// mixin trainsistion
// animations for home pagew
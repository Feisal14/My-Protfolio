import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import {PDF} from "../assets/Final Edit Resume.pdf"
import "../styles/Home.css";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, My name is Faisal</h2>
        <div className="prompt">
          <p>
            A Front-End developer with a passion for learning and creating cool
            stuff.
          </p>
          <a href="https://www.linkedin.com/in/faisal-yanbaawi" target="_blank">
            <LinkedInIcon />
          </a>

          <a href="mailto:FaisalYanbaawi@outlook.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/Feisal14" target="_blank">
            <GithubIcon />
          </a>
          <a href={PDF} className="resume" target="_target">
              <Button variant="contained" disableElevation>
                RESUME
              </Button>
            </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs, HTML, CSS, NPM, Yarn, BOOTSTRAP, StyledComponenst
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;

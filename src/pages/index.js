import React from "react";
import { Helmet } from "react-helmet";

import "./bootstrap-grid.css";
import "./bootstrap-reboot.css";
import "./bootstrap.css";
import "./index.css";

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React Engineer & Startup Founder | Alex Jack Hughes</title>
      <link rel="canonical" href="http://alexjackhughes.com" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:900|Roboto:100"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous"
      />
    </Helmet>
    <div className="container-fluid">
      <nav className="navbar fixed-top-social-icons">
        <div className="social-icons">
          <a href="https://twitter.com/alexjackhughes" target="_blank">
            <i class="fab fa-twitter social-icon" />
          </a>
          <a href="https://github.com/alexjackhughes" target="_blank">
            <i class="fab fa-github social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/alexjackhughes" target="_blank">
            <i class="fab fa-linkedin social-icon" />
          </a>
        </div>
      </nav>
      <nav className="navbar navbar-light bg-light fixed-top">
        <a className="navbar-brand">
          <img
            src="https://prismic-io.s3.amazonaws.com/alexjackhughes%2F10b49dd7-7552-4d65-9898-22a774501a22_logo.png"
            alt="alex hughes logo"
            class="logo-icon"
          />
        </a>
      </nav>
      <div className="background-section">
        <div className="jumbotron">
          <h1 className="display-4" id="jumbo-title">
            Hi, I'm Alex!
          </h1>
          <p className="lead" id="jumbo-text">
            I build things with <b>Node.js</b> + <b>React.js</b>
          </p>
          <a href="#about-section" className="btn btn-primary btn-hidden">
            Who the heck am I?
          </a>
        </div>
      </div>
      <section id="about-section">
        <div className="text-section">
          <h2>Who am I?</h2>
          <p>
            My name is Alexander Jack Hughes. But you can call me Alex. I am a
            startup founder and Software Engineer.
          </p>
          <p>
            To give you a quick history lesson: I've been building startups for
            the last five (and a bit) years, and in between managed to get an
            MSc in Computer Science.
          </p>
          <p>But enough about me, how have you been?</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card blurb" style={{ width: "18rem" }}>
                <i className="fas fa-chart-line card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">Top 1%</h5>
                  <p className="card-text">
                    Rose to the top 1% of freelancers on{" "}
                    <a href="http://pph.me/alexjackhughes" target="_blank">
                      PeoplePerHour.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card blurb" style={{ width: "18rem" }}>
                <i className="far fa-heart card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">Scale Matters</h5>
                  <p className="card-text">
                    Designed the UI/UX for one of the{" "}
                    <a
                      href="https://en-gb.wordpress.org/plugins/updraftplus/"
                      target="_blank"
                    >
                      most downloaded plugins{" "}
                    </a>
                    on WordPress
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card blurb" style={{ width: "18rem" }}>
                <i className="fas fa-laptop card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">React + Node</h5>
                  <p className="card-text">
                    One half of the duo who built{" "}
                    <a href="https://www.huckletree.com/" target="_blank">
                      Huckletree
                    </a>{" "}
                    (in React of course)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="alternate">
        <div>
          <h2>What am I doing now?</h2>
          <p>
            Right now I'm building Huckletree; A Workspace Accelerator focused
            on interesting startups in Europe. This keeps me pretty busy, with a
            full boatload of Node microservices and React web apps to build.
            Plus, a bit of Laravel to maintain our monolith.
          </p>
          <p>
            I still also build the occasional freelance web app{" "}
            <a href="#contact">if you're interested?</a>
          </p>
          <img
            className="pph-image"
            src="https://prismic-io.s3.amazonaws.com/alexjackhughes%2F43de2fa8-96a5-47de-82bd-a11291b3b2d6_rank-pph.png"
          />
        </div>
      </section>
      <section>
        <div className="text-section">
          <h2>Portfolio</h2>
          <p>Really, I'm a maker. I make things.</p>
          <p>
            Here are a couple of the things I've made that I'm most proud of.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://prismic-io.s3.amazonaws.com/alexjackhughes%2F173f9303-74ee-41b9-8137-fe0a25d13281_bedroombands-portfolio.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">BedroomBands</h5>
                  <p className="card-text">
                    I built the whole shabang myself in Node + React.
                  </p>
                  <a
                    href="https://www.bedroombands.com/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go see
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://prismic-io.s3.amazonaws.com/alexjackhughes%2F5676b677-d5d1-41cb-b34f-2211f962eabc_huckletree-portfolio.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Huckletree</h5>
                  <p className="card-text">
                    Huckletree was built with a bit of everything, but mainly -
                    React + Node + Laravel.
                  </p>
                  <a
                    href="https://www.huckletree.com/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go see
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://prismic-io.s3.amazonaws.com/alexjackhughes%2Fde8941b7-6b25-410a-b27a-e13403e1f99b_blockcc-portfolio.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">BlockCC</h5>
                  <p className="card-text">
                    Ever accidentally CC someone in an email? I have. That's why
                    I built a Chrome plugin to stop it happening.
                  </p>
                  <p className="card-text">You're welcome!</p>
                  <a
                    href="https://chrome.google.com/webstore/detail/blockcc/elhlhlfjfadacmkldgjckaogkpflcepf/reviews"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Go see
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="other-stuff-section">
            <h1>Other Stuff</h1>
            <img
              className="web-image"
              src="https://prismic-io.s3.amazonaws.com/alexjackhughes%2F4e926178-78f2-47e4-8953-b4260e48dca6_jacquie-gee-rounded-portfolio.png"
            />
            <p className="other-stuff-text">
              I'm a big fan of using the right tool for the right job. Nowadays
              I mainly build React apps and Node APIs, but occassionaly I build
              the odd WordPress website like this. What do you think?
            </p>
            <a
              href="http://jacquiegeebridalhair.co.uk/"
              target="_blank"
              className="btn btn-primary"
            >
              Go have a look
            </a>
          </div>
        </div>
      </section>
      <section className="flip contact-section" id="contact">
        <div className="flip">
          <h2>Contact me</h2>
          <p>
            The internet is a beautiful place to share things - Especially
            ideas. That's why I write for{" "}
            <a
              href="https://hackernoon.com/the-secret-sauce-of-coding-34e0e2348e1d"
              target="_blank"
            >
              Hackernoon
            </a>,{" "}
            <a href="https://medium.com/@alexjackhughes" target="_blank">
              Medium
            </a>, and{" "}
            <a href="https://blog.huckletree.com/ai-robots" target="_blank">
              Huckletree
            </a>.
          </p>
          <p>
            I also spend too much time on{" "}
            <a href="https://twitter.com/alexjackhughes" target="_blank">
              Twitter
            </a>. And{" "}
            <a
              href="https://www.linkedin.com/in/alexjackhughes"
              target="_blank"
            >
              LinkedIn
            </a>. On the internet basically.
          </p>
        </div>
      </section>
      <footer>
        <p>Made by me, Alexander Jack Hughes © 2019</p>
      </footer>
    </div>
  </div>
);

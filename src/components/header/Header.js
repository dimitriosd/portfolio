import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            {/*eslint-disable-next-line*/}
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>{' '}
            {/* end #nav */}
          </nav>{' '}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hello, I'm Dimitrios Douras.
              </h1>
              <h3>
                I'm a full-stack software engineer, focused on creating
                API-driven apps with cutting-edge front-ends. Let's{' '}
                <a className="smoothscroll" href="#about">
                  {' '}
                  start scrolling
                </a>{' '}
                and learn more{' '}
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/dimitris.douras"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/DimitriosDrs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dimitrios-douras-66b98530/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/dimitriosd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackoverflow.com/users/824002/dimitrios-douras"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-stack-overflow" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://join.skype.com/invite/dNVWc2s4OV5h"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}

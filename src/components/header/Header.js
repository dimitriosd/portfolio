import React from 'react';
import PortfolioData from '../../portfolioData'

export default class Header extends React.Component {

  renderNav() {
    return (
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
              Projects
            </a>
          </li>
        </ul>{' '}
      </nav>
    );
  }

  renderSocial() {
    return (
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
            href="skype:dimitriosd1983?chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-skype" />
          </a>
        </li>
        <li>
          <a
            href="mailTo:dimitrios.n.douras@gmail.com"
          >
            <i className="fa fa-envelope" />
          </a>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <header id="home">
          {this.renderNav()}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                {PortfolioData.introMessage}
              </h1>
              <h3>
                {PortfolioData.shortDescription} Let's{' '}
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
              {this.renderSocial()}
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

import React from 'react';
import PortfolioData from '../../portfolioData';

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
        </ul>
      </nav>
    );
  }

  renderSocial() {
    const socialLinks = PortfolioData.socialLinks.map(social => {
      return (
        <li>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <i className={social.className} />
          </a>
        </li>
      );
    });

    return (
      <ul className="social">
        {socialLinks}
        <li>
          <a href={PortfolioData.email}>
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

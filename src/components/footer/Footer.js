import React from 'react';
import PortfolioData from '../../portfolioData';

export default class Footer extends React.Component {
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
      <ul className="social-links">
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
        <footer id="footer">
          <div className="row">
            <div className="twelve columns">
              {this.renderSocial()}
              <ul className="copyright">
                <li>©2009 Dimitrios Douras</li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

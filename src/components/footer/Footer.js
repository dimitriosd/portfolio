import React from 'react';

export default class Footer extends React.Component {
  renderSocial() {
    return (
      <ul className="social-links">
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

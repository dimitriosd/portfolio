import React from 'react';
import PortfolioData from '../../portfolioData';
import pdfFile from '../../files/DimitriosDouras.pdf'

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/me.jpg" alt="images/profilepic.jpg" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                {PortfolioData.aboutMeDescription}
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{PortfolioData.name}</span>
                    <br />
                    <span>{PortfolioData.tel}</span>
                    <br />
                    <span>{PortfolioData.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={pdfFile} className="button" download>
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{' '}
              {/* end row */}
            </div>{' '}
            {/* end .main-col */}
          </div>
        </section>{' '}
        {/* About Section End*/}
      </React.Fragment>
    );
  }
}

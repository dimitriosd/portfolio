import React from 'react';
import PortfolioData from '../../portfolioData';

export default class Portfolio extends React.Component {

  renderProjects() {
    return PortfolioData.portfolio.map((project, index) => {
      return (
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href={`#modal-${index+1}`} title>
              <img src={project.imgurl} alt=""/>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>
      );
    });
  }

  renderModals() {
    return PortfolioData.portfolio.map((project, index) => {
      return (
        <div id={`modal-${index+1}`} className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={project.modalimgurl} alt="" />
          <div className="description-box">
            <h4>{project.name}</h4>
            <p>{project.fulldescription}</p>
            <span className="categories"><i className="fa fa-tag" />{project.tech}</span>
          </div>
          <div className="link-box">
            <a href={project.link} target="_blank" rel="noopener noreferrer">Details</a>
            {/*eslint-disable-next-line*/}
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {this.renderProjects()}
              </div>
            </div>
            {this.renderModals()}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
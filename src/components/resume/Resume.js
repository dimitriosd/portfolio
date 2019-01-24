import React from 'react';
import PortfolioData from '../../portfolioData';

export default class Resume extends React.Component {
  renderEducation() {
    const uniHeaderStyle = {
      color: '#313131'
    };

    const educations = PortfolioData.education.map(education => {
      return (
        <div className="row item">
          <div className="twelve columns">
            <h3>
              <a
                style={uniHeaderStyle}
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {education.university}
              </a>
            </h3>
            <p className="info">
              {education.degree} <span>•</span>{' '}
              <em className="date">{education.year}</em>
            </p>
            <p>{education.description}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">{educations}</div>{' '}
      </div>
    );
  }

  renderWork() {
    const works = PortfolioData.work.map(work => {
      return (
        <div className="row item">
          <div className="twelve columns">
            <h3>{work.company}</h3>
            <p className="info">
              {work.role} <span>•</span> <em className="date">{work.date}</em>
            </p>
            <p>{work.description}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{works}</div>
      </div>
    );
  }

  renderSkills() {
    const skills = PortfolioData.skills.map(skill => {
      const skillStyle = {
        width: skill.knowledge
      };

      return (
        <li>
          <span className="bar-expand" style={skillStyle} />
          <em>{skill.skillname}</em>
        </li>
      );
    });

    return (
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>My main skill set includes but is not limited to:</p>
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {this.renderWork()}
          {this.renderEducation()}
          {this.renderSkills()}
        </section>
      </React.Fragment>
    );
  }
}

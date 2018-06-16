import React, { Component } from 'react';
import { EducationEntry, WorkEntry, SkillList, Project } from '../Components/';

class CompiledCV extends Component {
  render() {
    document.body.style = 'background: white;';
    return (
      <div className="columns">
        
        <div className="column"></div>
        <div className="column is-two-thirds">        
          <div className="darkMode">
            <a><span className="icon black"  onClick={this.props.viewSource}><i className="fa fa-2x fa-code"></i></span>&nbsp;</a>
          </div>

          {/* Name */}
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">
                  Alexander Wilson
              </h1>
              <h2 className="subtitle">
                <span className="icon"><i className="fa fa-terminal"></i></span>Software Developer
                <br />
                <a style={{fontSize: 14}} href="https://acwilson96.github.io/acwilson96.pdf">Download</a>
              </h2>
            </div>
          </div>
          
          <h3 id="education" className="title is-3">
            <span className="icon is-large"><i className="fa  fa-graduation-cap"></i></span> &nbsp;
            <u>Education</u>
          </h3>
          <EducationEntry school="University of Edinburgh - First Class with Honours" degree="BSc Computer Science" date="Sept 2014 - July 2018">
              Classes Include:
              <ul>
                <li>Compiling Techniques</li>                
                <li>Computer Architecture</li>
                <li>Parallel Architecture</li>
                <li>Operating Systems</li>
                <li>Extreme Computing</li>
                <li>Computer Security</li>
                <li>Computer Networking</li>
              </ul>
          </EducationEntry>

          <hr />


          <h3 id="work_experience" className="title is-3">
            <span className="icon is-large"><i className="fa   fa-briefcase"></i></span> &nbsp;
            <u>Work Experience</u>
          </h3>
          <WorkEntry title="Software Engineering Intern" company="KAL" location="Edinburgh" date="June 2017 - Sept 2017" endyear="2017">
            Worked With:
            <ul>
              <li>C#</li>
              <li>C++</li>
              <li>.NET</li>
            </ul>
          </WorkEntry>
          <br />
          <WorkEntry title="Kitchen Porter" company="ROYAL BLIND: Braeside House" location="Edinburgh" date="July 2015 - Sept 2016">
            Responsibilities include making sure that the kitchen and food preparation areas are kept clean to a very high standard. I also aided my colleagues in food preparation.
          </WorkEntry>
          <br />
          <WorkEntry title="Freelance Work" company="ACCA" location="Glasgow" date="Nov 2014">
            My task was to dismantle company machines such as laptops and desktops so that hardware such as Hard Drives containing company data could be disposed of responsibly.
          </WorkEntry>
          <br />
          <WorkEntry title="Desktop Support Intern" company="ACCA" location="London" date="Oct 2013">
            Experience included auditing PC numbers for asset reconciliation, checking network ports for patch panel maintenance, and setting up conference rooms with microphones and webcam equipment for use with Microsoft Lync.
          </WorkEntry>
          <br />
          <WorkEntry title="Short Intern Work" company="NAPIER University" location="Edinburgh" date="June 2013">
            Spent a week working with an arduino board to create circuits as part of a robotics bootcamp.
          </WorkEntry>
          
          <hr />


          <h3 id="skills" className="title is-3">
              <span className="icon is-large"><i className="fa fa-code"></i></span> &nbsp;
              <u>Skills</u>
          </h3>
          <SkillList title="Programming Languages">
            <table>
              <tbody>
                <tr>
                    <td>Java</td>
                    <td>Python</td> 
                    <td>HTML</td>
                    <td>PHP</td>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>JavaScript</td> 
                    <td>CSS</td>
                    <td>MIPS</td>
                </tr>
                <tr>
                    <td>C#</td>
                    <td>C</td> 
                </tr>
              </tbody>              
            </table>
          </SkillList>
          <br />
          <SkillList title="Dev Concepts/Technologies">
            <blockquote>
              <ul>
                <li>Object-Oriented Design</li>
                <li>LLVM</li>
                <li>.NET</li>
                <li>MVC</li>
                <li>nodejs</li>
                <li>React/React-Native</li>
                <li>SailsJS</li>
              </ul>
            </blockquote>
          </SkillList>
          
          <hr />


          <h3 id="projects" className="title is-3">
              <span className="black icon is-large"><a href="https://github.com/acwilson96" className="fa fa-github black"></a></span>&nbsp;
              <u>Projects</u>
          </h3>
          <Project title="Microbenchmarking Intel Xeon Phi" github="https://github.com/acwilson96/MicroBenchmarking-KNL">
            University Dissertation - Involved writing c++ with inline x86 to evaluate the latencies and bandwidths of the different memory components of the multichip processor.
          </Project>
          <br />
          <Project title="My Website" github="https://github.com/acwilson96/acwilson96.github.io">
            A website that acts as an index in to who I am and what I have been working on, hosting my most up-to-date CV.
          </Project>
          <br />
          <Project title="unet" github="https://github.com/acwilson96/unet">
            Multi-platform application that provides a 'universal account' for services such as instant messaging, cloud storage(WIP). More features to be determined. Project started as POC to learn web technologies/concepts. Split into 3 projects: unet-core (the api and backend), unet-webapp (the browser application), and unet-mobapp (the mobile application).
            <br />
            <br />
            Live Beta on <a href="https://acwilson96-unet.herokuapp.com/">Heroku</a> 
          </Project>
          <br />
          <Project title="FlatRota" github="https://github.com/acwilson96/flatrota">
            OS Application and backend server using ExpressJS and websockets to manage who's turn it is to buy communal resources in my flat (for example hand soap or bin bags). Plans to extend to chores as well (for example cleaning bathroom/taking bins out). 
          </Project>
          <br />
          <Project title="sup_script" github="https://github.com/acwilson96/sup_script">
            A FireFox extension that will automate actions on supremenewyork.com/shop in order to check out items quickly. Includes some minor work on spoofing Google Recaptcha.
          </Project>
          <br />
          <Project title="rent_reminder" github="https://github.com/acwilson96/rent_reminder">
            Small nodejs application to run on my raspberry-pi that will check the date/time every hour, and send emails(to opt-ins) to remind people to pay rent.
          </Project>



        </div>
        <div className="column"></div>        
      </div>
    );
  }
}

export default CompiledCV;

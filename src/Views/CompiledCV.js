import React, { Component } from "react";
import { EducationEntry, WorkEntry, SkillList, Project } from "../Components/";

class CompiledCV extends Component {
  render() {
    document.body.style = "background: white;";
    return (
      <div className="columns">

        <div className="column" />
        <div className="column is-two-thirds">
          <div className="darkMode">
            <a><span className="icon black" onClick={this.props.viewSource}><i className="fa fa-2x fa-code"></i></span>&nbsp;</a>
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
                <a style={{ fontSize: 14 }} href="https://rdtscp.github.io/acwilson96.pdf">Download</a>
              </h2>
            </div>
          </div>


          <h3 id="work_experience" className="title is-3">
            <span className="icon is-large"><i className="fa   fa-briefcase"></i></span> &nbsp;
            <u>Work Experience</u>
          </h3>
          <WorkEntry title="Software Engineer" company="Meta" location="London" date="June 2022 - Present" endyear={(new Date()).getFullYear()}>
            Systems Infrastructure
            <br />
          </WorkEntry>
          <br />
          <WorkEntry title="Software Engineer" company="Squarepoint Capital" location="London" date="August 2020 - June 2022" endyear="2022">
            Risk Technology:
            <br />
            <li> Worked on stateless C++ microservices to perform real time processing of trades to track position. Services were highly multithreaded in order to handle millions of trades per day. Made use a pub/sub messaging queues, and KDB databases for real-time and historical data. Services were highly robust. </li>
            <li> Designed, implemented, and tested C++ microservices to accompany position keeping service mentioned above for various bespoke business needs.</li>
            <li> Set up metrics, monitoring and alerting on production services using Prometheus/Grafana/VictorOps. </li>
            <li> Implemented recon/reporting jobs for data parity between old and new systems in order to safely migrate/deprecate legacy systems. </li>
          </WorkEntry>
          <br />
          <WorkEntry title="Software Engineer II" company="FactSet" location="London" date="August 2018 - August 2020" endyear="2020">
            Systems Infrastructure - Database Technologies:
            <br />
            <li> C++: Profiling and analysing in-house database technology to improve read performance. </li>
            <li> Migrated untested python infrastructure to GitHub adding CI/CD and unit tests. </li>
            <li> Designed and implemented (using TDD) cloud deployed services, monitoring, alerting, and tooling for on-prem systems. </li>
            <li> Evaluation of systems scalability to on-board new clients/features. </li>
          </WorkEntry>
          <br />
          <WorkEntry title="Software Engineer Intern" company="KAL" location="Edinburgh" date="June 2017 - Sept 2017" endyear="2017">
            C++/C#/.NET:
            <br />
            C++/C\#/.NET: Integrated a legacy C++ app with a newer C# apps using .NET. Learnt in-house tooling and application architecture. Presented my work to the entire company to kick off the products next-gen development.
          </WorkEntry>

          <hr />

          <h3 id="education" className="title is-3">
            <span className="icon is-large"><i className="fa  fa-graduation-cap"></i></span> &nbsp;
            <u>Education</u>
          </h3>
          <EducationEntry school="University of Edinburgh" classification="First Class with Honours" degree="BSc Computer Science" date="Sept 2014 - July 2018">
            Classes Include:
            <ul>
              <li>Compiling Techniques</li>
              <li>Computer Architecture</li>
              <li>Parallel Architecture</li>
              <li>Operating Systems</li>
              <li>Extreme Computing</li>
              <li>Elements of Programming Languages</li>
            </ul>
          </EducationEntry>

          <hr />


          <h3 id="skills" className="title is-3">
            <span className="icon is-large"><i className="fa fa-code"></i></span> &nbsp;
            <u>Skills/Interests</u>
          </h3>
          <SkillList title="Languages/Technologies">
            <table>
              <tbody>
                <tr>
                  <td>C++ 11/14/17</td>
                  <td>Python 2/3</td>
                  <td>BASH</td>
                  <td>C</td>
                  <td>x86</td>
                </tr>
                <tr>
                  <td>Linux</td>
                  <td>macOS</td>
                  <td>git</td>
                  <td>perforce</td>
                  <td>valgrind</td>
                </tr>
                <tr>
                  <td>perf</td>
                  <td>cmake</td>
                  <td>clang</td>
                  <td>LLVM</td>
                  <td>Docker</td>
                </tr>
              </tbody>
            </table>
          </SkillList>
          <br />
          <SkillList title="Misc/Hobbies">
            <blockquote>
              <ul>
                <li> Reported a <a href="https://bugs.llvm.org/show_bug.cgi?id=44068">bug</a> in LLDB related to runtime-thunks.</li>
                <li> Attend C++ London Meetups Regularly. </li>
                <li> Keep up to date with C++ releases. </li>
                <li> Self Learning Piano</li>
              </ul>
            </blockquote>
          </SkillList>

          <hr />

          <h3 id="projects" className="title is-3">
            <span className="black icon is-large"><a href="https://github.com/rdtscp" className="fa fa-github black"></a></span>&nbsp;
            <u>Projects</u>
          </h3>
          <Project title="Microbenchmarking Intel Xeon Phi" github="https://github.com/rdtscp/MicroBenchmarking-KNL">
            University Dissertation - Involved writing c++ with inline x86 to evaluate the latencies and bandwidths of the different memory components of the multichip processor. Required extensive research into computer architecture and how code is translated into machine instructions/opcodes.
          </Project>
          <br />
          <br />
          <Project title="[WIP] C/C++ Bootstrap" github="https://github.com/rdtscp/c-bootstrap">
            Attempting to bootstrap a C/C++ compiler (Lexing, Parsing, Semantic Analysis, Code Gen) from scratch in order to learn more about C++.  Implemented some of my own <a href="https://github.com/rdtscp/atl/">standard libary</a> classes crudely to aid the project.
          </Project>
          <br />
          <Project title="llvm-dxr" github="https://github.com/rdtscp/llvm-dxr">
            Created a docker image that uses Debian with DXR installed to index the LLVM codebase and serve the frontend using docker-compose. Created this to learn and navigate the LLVM codebase, with future plans to deploy on the public cloud and regularly index the LLVM monorepo.
          </Project>
          <br />
          <Project title="flat-rota" github="https://github.com/rdtscp/flat-rota-web">
            WebApp for managing communal Todo"s in a flat. The backend manages Users/Flats/Todos and their respective relationship to create rotas.
            <br />
            <br />
            Live Beta on <a href="https://flat-rota.herokuapp.com/">Heroku</a>
          </Project>
          <br />
          <Project title="My Website" github="https://github.com/rdtscp/rdtscp.github.io">
            A website that acts as an index in to who I am and what I have been working on, hosting my most up-to-date CV.
          </Project>



        </div>
        <div className="column" />
      </div >
    );
  }
}

export default CompiledCV;

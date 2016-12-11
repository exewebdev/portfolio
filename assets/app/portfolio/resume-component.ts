/**
 * This creates a resume component.
 */
import {Component, Input} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component ({
    selector: 'app-resume',
    template: ` 
    <div class="row resume">
        <div class="col-sm-12">
            <h1>Resume</h1>
            <div class="line"> </div>
        </div>
    </div>
    
    <div class="row resume">
        <div class="col-md-10 col-md-offset-1">
            <h2>Education</h2>
            <p>
                <strong>Bachelor of Science in Computer Science</strong> 
                <span class="u-pull-right">May, 2016</span>
                Texas State University<br />
                <span class="u-pull-right">San Marcos, TX</span>
                GPA: 3.5
            </p>
            <p>
                <strong>Associates of Computer Science</strong> 
                <span class="u-pull-right">Jan 2013 - December 2014</span>
                Austin Community College<br />
                <span class="u-pull-right">Austin, TX</span>
                <br/>
            </p>
            <p>
                <strong>Bachelor of Science in Electrical Engineering</strong>
                <span class="u-pull-right">College Station, TX</span>
                Texas A & M University<br />
                GPA 3.1<br />
            </p>
            <h2>Honors</h2>
            <p>
                Dean's List
                <span class="u-pull-right">Fall 2015, Spring 2016</span>
                <br/>
                Phi Theta Kappa Honor Society
                <span class="u-pull-right">Spring 2015</span>
            </p>
        </div>
    </div>
    <div class="row resume">
        <div class="col-md-10 col-md-offset-1">
            <h2>Technical Skills</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Proficiency in approximate descending order from left to right</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programming Languages</td>
                        <td>Java, JavaScript, Python, C++, C</td>
                    </tr>
                    <tr>
                        <td>Web Technologies</td>
                        <td>HTML, CSS, Bootstrap, JQuery, Node.js, Express, Flask, Jinja, AJAX, RESTFul API</td>
                    </tr>
                    <tr>
                        <td>Database</td>
                        <td>SQL, PL/SQL, Oracle 11g, MySQL, Hibernate</td>
                    </tr>
                    <tr>
                        <td>Productivity Tools</td>
                        <td>Git, Github, Eclipse, JetBrains IDEs, Selenium Webdriver, Jenkings CI Server</td>
                    </tr>
                    <tr>
                        <td>Software Engineering</td>
                        <td>Design, Algorithms, Data Structures, Design Patterns, SDLC, Code review, Agile, </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

     <div class="row resume">
        <div class="col-md-10 col-md-offset-1">
            <h2>Work Accomplishments</h2>
            <ul>
                <li><span>Grew customer base</span> as key team member of Carbide IDE team to 10K+ mobile software 
                developers.</li>
                <li><span>Goto person</span> person for testing complex technologies such as mobile device debugging testing, 
                middleware/kernel, and ARM simulator which allowed users to debug any software within the Symbian OS..</li>
                <li><span>Developed Texas State club website </span> as key team member of Carbide IDE team to 10K+ 
                mobile software developers.</li>
            </ul>
        </div>
    </div>

    <div class="row resume">
        <div class="col-md-10 col-md-offset-1">
            <h2>Work Experience</h2>
            <p>
                <strong>Software Developer</strong>
                <span class="u-pull-right"> 2011 - 2012</span><br/>
                <i>Accenture</i>
                <span class="u-pull-right"><i>Austin, Texas</i></span><br />
            </p>
            <ul>
                <li>Developed a IOS mobile field sales reporting tool for sales team at a large pharmaceutical company.</li>
                <li>Developed a IOS mobile dashboard application for iPad with IOS deveopment team. It presented 
                    billable hours attributed to various departments for senior executives.</li>
            </ul>

            <p>
                <strong>Software Test Engineer</strong>
                <span class="u-pull-right">Mar 1999 – Oct 2011</span>
                <br/>
                <i>Freescale -> Nokia</i> 
                <span class="u-pull-right"><i>Austin, Texas</i></span>
                <br />
             </p>
            <ul>    
                <li>Test engineer for Symbian OS mobile development environment, Carbide for Symbian OS. </li>
                <li>Improved user experience by developing sophisticated test procedures for user and performance 
                issues, etc</li>
                <li>Tested complex Symbian OS middleware/kernel using an ARM Simulator.</li>
                <li>Designed test plans and specifications for many features of the Carbide platform.</li>
                <li>Verified application development of Nokia’s mobile phone debug agent with Carbide IDE.</li>
                <li>Tested the ability to debug middleware and kernel software on Symbian OS platform simulator.</li>
                <li>Reduced manual test time from days to hours by working on in-house automation framework written in 
                    Java/Junit as part of Hudson CI environment.
                </li>
            </ul>
            
            <p>
                <strong>Motorola</strong>
                <span class="u-pull-right">Austin, Texas, Jan 1992 – Dec 1998</span>
                <br/>
                <strong>Verification Engineer</strong> 
                <br />
            </p>
            <ul>    
                <li>Generated test plans/patterns for two modules for a 68HC12 16-bit micro-controller: 
                    a multiplexed external bus interface and memory management control unit.  </li>
                <li>Lead weekly design strategy and code review meetings with design, test and product engineering</li>
            </ul>    
            
            <p>
                <strong>Product Manager</strong>
                <br />
            </p>
            <ul>    
                <li>Managed 8-bit microcontroller product lines including probe and final test for all business units.</li>
                <li>Trained and oversaw 4 product engineers.</li>
            </ul>  
              
            <p>
                <strong>Product Engineer</strong> 
                <br />
            </p>
            <ul>    
                <li>Supported 68HC11 8-bit microcontroller which generated millions of dollars for the business unit.</li>
                <li>Created and managed test program releases and maintenance for the US and China.</li>
                <li>Decreased final test time by 8X by developing a parallel test program.</li>
                <li>Interfaced with customer and design engineers to produce product specifications.</li>
                <li>Managed product from first silicon through final qualification.</li>
            </ul> 
                 
        </div>
    </div>
            <div class="row">
            <div class="col-md-12">
                <div style="text-align: center">
                    <a href="https://drive.google.com/open?id=0B3SmK14FMGUOWFhGWmQ1WjU2UU0" class=" btn btn-default btn-lgreen" target="_blank">Download</a>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .resume {
            color: #333;
            font-family: Lato,Helvetica,sans-serif;
            background-color: #f1ffd8
        }
        .line {
            background-color: #333;
            height: 1px;
            margin: 5px 0 20px;
            width: 100%;
        }
        h1 {
            text-align: center;
        }
        .u-pull-right {
            float: right;
        }
        .btn-lgreen {
          margin-top: 20px;
        }
    `]
})

export class ResumeComponent { }
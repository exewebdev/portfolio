/**
 * This creates a resume component.
 */
import {Component, Input} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component ({
    selector: 'app-project',
    template: ` 
        <div class="row">
            <div class="col-md-12">
                <h1 class="section-title">Projects</h1>
                <div class="line"> </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                  <video autoplay width="100%" controls>
                    <source src="https://drive.google.com/uc?export=download&id=0B3SmK14FMGUOdm1LcFY5R2F0S1U" type="video/webm">
                  </video>  
            </div>
            <div class="col-sm-6">
                <h4>Impact.js game</h4>
                <p>My Senior Capstone project was a first-person shooter game for web and mobile.  I developed the realtime 
                communication between the game server and the clients. As the project leader, I decided to use ImpactJS for the game
                engine and tile editor for the front end. My team used NodeJS for the back end which has a real time 
                connection API called socket.io.</p>
                <div style="text-align: center">
                    <a href="https://impact-game.herokuapp.com/" class=" btn btn-default btn-lgreen" target="_blank">Play Online</a>
                    <a href="https://github.com/rzuniga64/impact-game" class=" btn btn-default btn-lgreen" target="_blank">Github</a>
                </div>
                <ul class="skillList">
                    <li class="btn btn-xs btn-green">javascript</li>
                    <li class="btn btn-xs btn-green">canvas</li>
                    <li class="btn btn-xs btn-green">node</li>
                    <li class="btn btn-xs btn-green">express</li>
                    <li class="btn btn-xs btn-green">impact.js</li>
                    <li class="btn btn-xs btn-green">socket.io</li>
                    <li class="btn btn-xs btn-green">git</li>
                    <li class="btn btn-xs btn-green">heroku</li>
                 </ul>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-4">
                <div id="panel1" class="panel"></div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-sm-6">
                 <h4>Club Website</h4>
                 <p>As a member of the Texas State Computer Science club I became the web development project lead. Our
                 first project was a total redesign of the club's website. I first gathered requirements from the president
                 of the club. From that I designed the database for the site which was developed in MySQL.  I designed 
                 and wrote most of the front-end using HTML, CSS, Bootstrap, and a template engine named Swig.</p>
                <div style="text-align: center">
                    <a href="http://exetxstate.com" class=" btn btn-default btn-lgreen" target="_blank">Website</a>
                    <a href="https://github.com/exewebdev/exe" class=" btn btn-default btn-lgreen" target="_blank">Github</a>
                </div>
                <ul class="skillList">
                    <li class="btn btn-xs btn-green">html</li>
                    <li class="btn btn-xs btn-green">css</li>
                    <li class="btn btn-xs btn-green">javascript</li>
                    <li class="btn btn-xs btn-green">bootstrap</li>
                    <li class="btn btn-xs btn-green">node</li>
                    <li class="btn btn-xs btn-green">express</li>
                    <li class="btn btn-xs btn-green">swig</li>
                    <li class="btn btn-xs btn-green">mysql</li>
                    <li class="btn btn-xs btn-green">git</li>
                 </ul>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-4">
                <div id="panel2" class="panel"></div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-sm-6">
                 <h4>MEAN Seed Project</h4>
                 <p>I developed a MEAN seed project after learning the MEAN stack(MongoDB, Express, Angular 2, Node.js).
                 This project uses the latest version of Angular 2. It is a simple Todos application that allows the user
                 to create a simple Todos list. It uses a RESTful API to do the basic CRUD database operations. This 
                 project is meant to be a learning tool so I could teach the web development group of the Texas State 
                 Computer Science club.</p>
                <div style="text-align: center">
                    <a href="https://github.com/rzuniga64/mean-seed" class=" btn btn-default btn-lgreen" target="_blank">Github</a>
                </div>
                <ul class="skillList">
                    <li class="btn btn-xs btn-green">html</li>
                    <li class="btn btn-xs btn-green">css</li>
                    <li class="btn btn-xs btn-green">bootstrap</li>
                    <li class="btn btn-xs btn-green">mongodb</li>
                    <li class="btn btn-xs btn-green">express</li>
                    <li class="btn btn-xs btn-green">angular 2</li>
                    <li class="btn btn-xs btn-green">node</li>
                    <li class="btn btn-xs btn-green">RESTful API</li>                  
                    <li class="btn btn-xs btn-green">git</li>
                 </ul>
            </div>
        </div>
        
         <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-4">
                <div id="panel3" class="panel"></div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-sm-6">
                 <h4>Portfolio Website</h4>
                 <p>Full stack development project, back-end to front-end with a little UX design thrown in. </p>
                <div style="text-align: center">
                    <a href="https://github.com/rzuniga64/portfolio" class=" btn btn-default btn-lgreen" target="_blank">Github</a>
                </div>
                <ul class="skillList">
                    <li class="btn btn-xs btn-green">html5</li>
                    <li class="btn btn-xs btn-green">css</li>
                    <li class="btn btn-xs btn-green">bootstrap</li>
                    <li class="btn btn-xs btn-green">mongodb</li>
                    <li class="btn btn-xs btn-green">express</li>
                    <li class="btn btn-xs btn-green">angular 2</li>
                    <li class="btn btn-xs btn-green">node</li>
                    <li class="btn btn-xs btn-green">RESTful API</li>                  
                    <li class="btn btn-xs btn-green">git</li>
                 </ul>
            </div>
        </div>
    `,
    styles: [`
        #panel1 {
            background: rgba(0, 0, 0, 0) url("/images/homepage.png") no-repeat scroll center top;
        }
        #panel2 {
            background: rgba(0, 0, 0, 0) url("/images/todos.png") no-repeat scroll center top;
        }
        #panel3{
            background: rgba(0, 0, 0, 0) url("/images/circle-green.png") no-repeat scroll center top;
        }
        .panel {
            background-color: #fff;
            border-radius: 4px;
            margin-bottom: 20px;
            height: 300px;
            width: 100%;
        }
        .row {
            margin-top: 20px;
        }
        p {
            font-family: Lato,Helvetica,sans-serif;
            font-size: 1.25em;
            font-weight: 200;
            line-height: 1.6;
            
        } 
        ul {
            display: table;   /* Allow the centering to work */
            margin: 0 auto;
            padding-top: 20px;
        }
        ul li {
            display: inline;
        }
        h4 {
            text-align: center;
            margin-top: 0;
            color: #4bae4f;
        }
        .section-title {
            color: #333;
            margin-top: 20px;
            text-align: center;
        }
        .line {
            background-color: #333;
            height: 1px;
            margin: 5px 0 20px;
            width: 100%;
        }
    `]
})

export class ProjectComponent { }
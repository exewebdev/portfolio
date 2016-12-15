/**
 * This creates a navbar component and allows the user to navigate the page.
 */
import {Component} from "@angular/core";

@Component ({
    selector: 'app-navbar',
    template: ` 
        <nav class="navbar navbar-default navbar-fixed-top white">
            <div class="container">
                <button class="navbar-toggle collapsed" type="button" title="mobile navbar toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li> <a href="#content-home">Home</a> </li>
                    <li><a href="#content-projects">Projects</a></li>
                    <li><a href="#content-resume">Resume</a></li>
                    <li> <a href="#content-contact">Contact</a></li>
                </ul>
            </div>
        </nav> 
    `,
    styles: [`
        nav {
            background-color: #94a384;
            border: none;
        }
        
        #navbar a {
            background-color: #94a384;
            color: #ffe329;
            font-family: Lato,Helvetica,sans-serif;
            font-size: 1.2em;
            margin: 0 0 0 20px;
            text-transform: uppercase;
        }
        #navbar a:hover {
            background-color: #85d362;
            text-decoration: none;
        }
        #navbar nav a:visited {
            color: cornflowerblue;
        }
        #navbar > ul > li > ul {
            background-color: #4d1717;
            color: #dfd4c3;
            text-decoration: none;
        }
        @media (min-width: 768px) {
          .navbar-nav {
            display: table;
            float: none;
            margin: 0 auto;
            table-layout: fixed;
          }
        }
        @media screen and (max-width: 992px) {
            header p {
                font-size: 95%;
            }
            header h1 {
                font-size: 5em;
            }
        }
        @media screen and (max-width: 768px) {
            header p {
                font-size: 90%;
            }
            header h1 {
                font-size: 3em;
            }
        }        
    `]
})

export class NavbarComponent { }
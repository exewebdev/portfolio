/**
 * This creates a footer component with contact information.
 */
import {Component, Input} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component ({
    selector: 'app-footer',
    template: ` 
<div id="footer">
    <div class="inner">
        © 2016 Raul Zuniga.               
        <span>
        <a target="_blank" href="mailto:raulzuniga78741@gmail.com"><img src ="/images/mail.png"  alt="MailIcon"></a>
        <a target="_blank" href="https://www.linkedin.com/in/razuniga"><img src ="/images/linkedin.png"  alt="LinkedinIcon"></a>
        <a target="_blank" href="https://github.com/rzuniga64"><img src ="/images/github.png"  alt="GithubIcon"></a>
        </span>
    </div>
</div>
    `,
    styles: [`
    span {
        float: right;
    }
    a {
        color: #ffe329
    }
    .inner {
        margin: 0 auto;
        max-width: 1024px;
    }
    #footer {
        background-color: #94a384;
        color: #ffe329;
        font-size: 1.2em;
        text-align: left;
        margin-top: 20px;
        padding: 10px 0 10px 0;
    }
    `]
})

export class FooterComponent {}
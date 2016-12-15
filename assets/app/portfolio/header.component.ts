/**
 * This creates a header component with full name and title.
 */
import {Component} from "@angular/core";

@Component ({
    selector: 'app-header',
    template: ` 
        <header>
            <h1>Raul Zuniga</h1>
            <h3>Software Developer</h3>
        </header>
    `,
    styles: [`
    header {
        background-color: #94a384;
        color: #ffe329;
        line-height: 122px;
        text-align: center;
    }
    header h1 {
        font-family: Engagement,cursive;
        font-size: 7em;
        margin: 0px;
        padding: 20px 0 20px 0;
    }
    header h3 {
        color: #ffe329;
        font-family: Lato,Helvetica,sans-serif;
        text-transform: uppercase;
        padding-bottom: 40px
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

export class HeaderComponent {}
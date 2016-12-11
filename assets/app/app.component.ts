/**
 * The Angular 2 root component file.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `

        <app-navbar></app-navbar>
        <section id="content-home">
            <app-header></app-header>
        </section>
        <div class="container">
            <section id="content-projects">
                <app-project></app-project>
            </section>
            <section id="content-resume">
                <app-resume></app-resume>
            </section>
            <div class="row" id="content-contact">
                <app-todo-input></app-todo-input>
            </div><!-- row-->
        </div>
        <div class="row">
            <app-footer></app-footer>
        </div>
    `,
    styles: [`
        h2 {
            text-align: center;
        }
    `]
})
export class AppComponent { }

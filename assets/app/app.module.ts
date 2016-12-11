/**
 * File which specfies all application dependencies and application.
 */
import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {FormsModule}                from '@angular/forms';
import {ReactiveFormsModule}        from '@angular/forms';
import {RouterModule}               from "@angular/router";
import {HttpModule}                 from "@angular/http";

import {AppComponent}               from "./app.component";
import {NavbarComponent}            from "./portfolio/navbar-component";
import {HeaderComponent}            from "./portfolio/header.component";
import {ProjectComponent}           from "./portfolio/project-component";
import {ResumeComponent}            from "./portfolio/resume-component";
import {TodoComponent}              from "./portfolio/todo.component";
import {TodoInputComponent}         from "./portfolio/todos-input.component";
import {FooterComponent}            from "./portfolio/footer.component";
import {HashLocationStrategy}       from "@angular/common";
import {LocationStrategy}           from "@angular/common";

import {TodoService}                from "./portfolio/todo.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        ProjectComponent,
        ResumeComponent,
        TodoComponent,
        TodoInputComponent,
        FooterComponent
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        TodoService,
        [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
    ]
})
export class AppModule { }

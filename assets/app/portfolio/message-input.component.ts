/**
 * This creates an Angular 2 form for the user to enter in a message and save it in the database.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators, NgForm} from "@angular/forms";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message-input',
    template: `
        <div class="row">
            <div class="col-md-12">
                <h1 class="section-title">Contact</h1>
                <div class="line"> </div>
            </div>
        </div>
        <div class="row">
            <section class="col-md-6 col-md-offset-3">
                <fieldset>
                    <form #messageForm="ngForm" (ngSubmit)="onSubmit(messageForm)">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required [ngModel]="message?.name">          
                        </div>
                        <div class="form-group">
                            <label for="content">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required [ngModel]="message?.email">            
                        </div>
                        <div class="form-group">
                            <label for="content">Company</label>
                            <input type="text" class="form-control" id="company" name="company" required [ngModel]="message?.company">            
                        </div>
                        <div class="form-group">
                            <label for="content">Message</label>
                            <textarea rows="4" cols="50" class="form-control" id="content" name="content" required [ngModel]="message?.content"> 
                            </textarea>
                        </div>
                        <button type="submit" class="btn btn-success">Send</button>
                     </form>
                </fieldset>
            </section>
        </div>
    `,
    styles: [`
        .row {
            margin-top: 20px;
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

export class MessageInputComponent implements OnInit {

    messageForm: FormGroup;
    message: Message = null;

    constructor(private _messageService: MessageService) {}

    ngOnInit() {
        this.messageForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required),
            company: new FormControl('')
        });
    }

    onSubmit(messageForm: NgForm) {

        // Create todo
        const message:Message = new Message(messageForm.value.name, messageForm.value.email,
                                            messageForm.value.company, messageForm.value.content);
        this._messageService.addMessage(message)
            .subscribe(
                (data:Message) => {
                    console.log(data);
                }
            );

        messageForm.resetForm();
    }
}
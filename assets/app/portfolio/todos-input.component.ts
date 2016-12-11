/**
 * This creates an Angular 2 form for the user to enter in a username and todo list and save it in the database.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators, NgForm} from "@angular/forms";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component({
    selector: 'app-todo-input',
    template: `
        <div class="row">
            <div class="col-md-12">
                <h1 class="section-title">Contact</h1>
                <div class="line"> </div>
            </div>
        </div>
        <div class="row">
            <section class="col-md-10 col-md-offset-1">
                <fieldset>
                    <form #todoForm="ngForm" (ngSubmit)="onSubmit(todoForm)">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" name="username" required [ngModel]="todo?.username">          
                        </div>
                        <div class="form-group">
                            <label for="content">Todo</label>
                            <input type="text" class="form-control" id="content" name="content" required [ngModel]="todo?.content">            
                        </div>
                        <button type="submit" class="btn btn-success">{{ !todo ? 'Add' : 'Save' }}</button>
                        <button type="button" class="btn btn-danger" (click)="onCancel()" *ngIf="todo"> Cancel </button>
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

export class TodoInputComponent implements OnInit {

    todoForm: FormGroup;
    todo: Todo = null;

    constructor(private _todoService: TodoService) {}

    ngOnInit() {
        this.todoForm = new FormGroup({
            username: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required)
        });

        this._todoService.todoIsEdit.subscribe(
            (todo: Todo) => {
                this.todo = todo;
            }
        );
    }

    onCancel(todoForm: NgForm) {
        this.todo=null;
        todoForm.resetForm();
    }

    onSubmit(todoForm: NgForm) {
        if (this.todo) {
            // Edit todo
            this.todo.content = todoForm.value.content;
            this._todoService.updateTodo(this.todo)
                .subscribe(
                    result => console.log(result)
                );
            this.todo = null;
        } else {
            // Create todo
            const todo:Todo = new Todo(todoForm.value.username, todoForm.value.content, false, false);
            this._todoService.addTodo(todo)
                .subscribe(
                    (data:Todo) => {
                        console.log(data);
                    }
                );
        }
        todoForm.resetForm();
    }
}
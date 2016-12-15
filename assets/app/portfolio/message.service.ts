/**
 * Angular 2 service which connects to the backend Node.js routes.
 */
import {Message} from "./message.model";
import {Http, Headers, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService {
    messages: Message[] = [];

    constructor(private _http: Http) {}

    // get back an array of messages and we want to extract it in a way that it fits the message object we are using on
    // the frontend. We get an array of custom type messages that match the model that we can directly
    // handle with a ngFor loop.
    getMessages() {
        return this._http.get('http://localhost:8081/api/message')
            .map((response:Response) => {
                const data = response.json().obj;
                let objs: Message[] = [];
                for (let i=0; i < data.length; i++) {
                    let message = new Message(data[i].name, data[i].email, data[i].content, data[i].company, data[i]._id );
                    objs.push(message);
                }
                return objs;
            })
    }

    addMessage(message:Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:8081/api/message', body, {headers: headers})
            .map((response:Response) => {
                const data = response.json().obj;
                const message = new Message(data.name, data.email, data.content, data.company, data._id );
                this.messages.push(message);
                return message;
            })
    }
}
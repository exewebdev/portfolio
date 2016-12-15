/**
 * JavaScript class which mirrors the database layout.
 */
export class Message {
    name: string;
    email: string;
    content: string;
    company: string;
    messageId: string;

    constructor (name: string, email: string, content: string, company?: string,  messageId?: string) {
        this.name = name;
        this.email = email;
        this.content = content;
        this.company = company;
        this.messageId = messageId;
    }
}
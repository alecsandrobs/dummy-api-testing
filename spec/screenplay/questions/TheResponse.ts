import { AnswersQuestions, Question, UsesAbilities } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";

export class TheResponse extends Question<any> {

    constructor(private field: string) {
        super(`the response body field "${field}"`);
    }

    static bodyField(field: string): any {
        return new TheResponse(field)
    }

    static bodyFieldData(field: string): any {
        return new TheResponseData(field)
    }

    answeredBy(actor: AnswersQuestions & UsesAbilities) {
        return actor.answer(LastResponse.body()).then((body: any) => body[this.field])
    }
}

class TheResponseData extends Question<any>{

    constructor(private field: string) {
        super(`the response body field data.${field}`);
    }

    answeredBy(actor: AnswersQuestions & UsesAbilities) {
        return actor.answer(new TheResponse('data')).then((data: any) => data[this.field])
    }

}
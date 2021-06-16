import { Ensure, equals } from "@serenity-js/assertions";
import { PerformsActivities, Task } from "@serenity-js/core";
import { TheResponse } from "../../questions/TheResponse";


export class VerifyResponse implements Task {

    constructor(private message: string) { }

    static message(message: string) {
        return new VerifyResponse(message)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Ensure.that(TheResponse.bodyField('status'), equals('success')),
            Ensure.that(TheResponse.bodyField('message'), equals(this.message))
        )
    }

    toString = () => `#actor verifies the employee response message`
}
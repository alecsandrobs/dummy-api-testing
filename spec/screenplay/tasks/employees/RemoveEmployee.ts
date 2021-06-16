import { PerformsActivities, Task } from "@serenity-js/core";
import { DeleteRequest, PutRequest, Send } from "@serenity-js/rest";

export class RemoveEmployee implements Task {

    constructor(private id: string) { }

    static withId(id: string) {
        return new RemoveEmployee(id)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(DeleteRequest.to(`/delete/${this.id}`)
            )
        )
    }

    toString = () => `#actor attempts to remove the employee with id ${this.id}`
}
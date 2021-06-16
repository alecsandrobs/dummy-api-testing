import { PerformsActivities, Task } from "@serenity-js/core";
import { PutRequest, Send } from "@serenity-js/rest";

export class UpdateEmployee implements Task {

    constructor(private id: string, private body: any) { }

    static withId(id: string) {
        return new UpdateEmployeeToData(id)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(PutRequest.to(`/update/${this.id}`)
                .with(this.body)
            )
        )
    }

    toString = () => `#actor attempts to update the employee with id ${this.id}`
}

class UpdateEmployeeToData {

    constructor(private id: string) { }

    toData(body: any) {
        return new UpdateEmployee(this.id, body)
    }

}
import { PerformsActivities, Task } from "@serenity-js/core";
import { PostRequest, Send } from "@serenity-js/rest";

export class CreateEmployee implements Task {

    constructor(private body: any) { }

    static withData(body: any) {
        return new CreateEmployee(body)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(PostRequest.to('/create')
                .with(this.body)
            )
        )
    }

    toString = () => '#actor attempts to create a new employee'
}
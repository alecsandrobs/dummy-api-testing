import { PerformsActivities, Task } from '@serenity-js/core';
import { GetRequest, Send } from '@serenity-js/rest';

export class GetEmployees {

    static all() {
        return new GetEmployeesAll()
    }

    static withId(id: string) {
        return new GetEmployeesById(id)
    }

}

class GetEmployeesAll implements Task {

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(GetRequest.to('/employees'))
        )
    }

    toString = () => `#actor attempts to get all employees`
}

class GetEmployeesById implements Task {

    constructor(private id: string) { }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Send.a(GetRequest.to(`/employee/${this.id}`))
        )
    }

    toString = () => `#actor attempts to get the employee with id ${this.id}`
}
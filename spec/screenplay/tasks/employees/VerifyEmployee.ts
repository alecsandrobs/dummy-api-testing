import { Ensure, equals } from "@serenity-js/assertions";
import { PerformsActivities, Task } from "@serenity-js/core";
import { TheResponse } from "../../questions/TheResponse";

export class VerifyEmployee implements Task {
    
    constructor(private employee: any) {}

    static data(employee: any){
        return new VerifyEmployee(employee)
    }
    
    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Ensure.that(TheResponse.bodyFieldData('name'), equals(this.employee.name)),
            Ensure.that(TheResponse.bodyFieldData('salary'), equals(this.employee.salary)),
            Ensure.that(TheResponse.bodyFieldData('age'), equals(this.employee.age)),
        )
    }

    toString = () => `#actor verifies the employee response data`
}
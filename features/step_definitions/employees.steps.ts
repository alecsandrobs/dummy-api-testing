import { DataTable, Then, When } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { actorInTheSpotlight, Log, Note, TakeNote } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { StatusCode } from '../../spec/matchers/httpStatusMatchers';
import { hasTheSameSchema } from '../../spec/matchers/schemaMatchers';
import { CreateEmployee } from '../../spec/screenplay/tasks/employees/CreateEmployee';
import { GetEmployees } from '../../spec/screenplay/tasks/employees/GetEmployees';
import { RemoveEmployee } from '../../spec/screenplay/tasks/employees/RemoveEmployee';
import { UpdateEmployee } from '../../spec/screenplay/tasks/employees/UpdateEmployee';
import { VerifyEmployee } from '../../spec/screenplay/tasks/employees/VerifyEmployee';
import { VerifyResponse } from '../../spec/screenplay/tasks/employees/VerifyResponse';
import { employeeDeleteResponseSchema, employeeGetOneResponseSchema, employeePostResponseSchema, employeePutResponseSchema, employeesGetAllResponseSchema } from '../schema/employeesSchema';

When('(s)he get(s) all employees', () =>
    actorInTheSpotlight().attemptsTo(
        GetEmployees.all()
    )
)

When('(s)he get(s) the employee with id {string}', (id: string) =>
    actorInTheSpotlight().attemptsTo(
        GetEmployees.withId(id)
    )
)

When('(s)he register(s) the employee with data', (table: DataTable) =>
    actorInTheSpotlight().attemptsTo(
        CreateEmployee.withData(table.rowsHash()),
        TakeNote.of(table.rowsHash()).as('employee-table')
    )
)

When('(s)he update(s) the employee with id {string} to data', (id: string, table: DataTable) =>
    actorInTheSpotlight().attemptsTo(
        UpdateEmployee.withId(id).toData(table.rowsHash()),
        TakeNote.of(table.rowsHash()).as('employee-table')
    )
)

When('(s)he remove(s) the employee with id {string}', (id: string) =>
    actorInTheSpotlight().attemptsTo(
        RemoveEmployee.withId(id)
    )
)


Then('(s)he should see that the employee is successfuly created', () =>
    actorInTheSpotlight().answer(Note.of('employee-table')).then((employee: any) =>
        actorInTheSpotlight().attemptsTo(
            Log.the(LastResponse.status(), LastResponse.body()),
            Ensure.that(LastResponse.status(), equals(StatusCode.success)),
            Ensure.that(LastResponse.body(), hasTheSameSchema(employeePostResponseSchema)),
            VerifyEmployee.data(employee),
            VerifyResponse.message('Successfully! Record has been added.')
        )
    )
)

Then('(s)he should see that the employee is successfuly updated', () =>
    actorInTheSpotlight().answer(Note.of('employee-table')).then((employee: any) =>
        actorInTheSpotlight().attemptsTo(
            Log.the(LastResponse.status(), LastResponse.body()),
            Ensure.that(LastResponse.status(), equals(StatusCode.success)),
            Ensure.that(LastResponse.body(), hasTheSameSchema(employeePutResponseSchema)),
            VerifyEmployee.data(employee),
            VerifyResponse.message('Successfully! Record has been updated.')
        )
    )
)

Then('(s)he should see that the employee is successfuly retrieved', () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(LastResponse.status(), equals(StatusCode.success)),
        Ensure.that(LastResponse.body(), hasTheSameSchema(employeeGetOneResponseSchema)),
        VerifyResponse.message('Successfully! Record has been fetched.')
    )
)

Then('(s)he should see that the employees are successfuly retrieved', () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(LastResponse.status(), equals(StatusCode.success)),
        Ensure.that(LastResponse.body(), hasTheSameSchema(employeesGetAllResponseSchema)),
        VerifyResponse.message('Successfully! All records has been fetched.')
    )
)

Then('(s)he should see that the employee is successfuly removed', () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(LastResponse.status(), equals(StatusCode.success)),
        Ensure.that(LastResponse.body(), hasTheSameSchema(employeeDeleteResponseSchema)),
        VerifyResponse.message('Successfully! Record has been deleted')
    )
)
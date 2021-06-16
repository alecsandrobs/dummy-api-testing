@employees
Feature: Employees
    As an user of the dummy application
    Ed wants to register the employees
    So that he can manage the staff from his company

    Background:
        Given that Ed is a system user

    @post
    Scenario: Create a new employee
        When he registers the employee with data
            | name   | Employee Created |
            | salary | 12345            |
            | age    | 31               |
        Then he should see that the employee is successfuly created

    @put
    Scenario: Update the employee
        When he updates the employee with id "21" to data
            | name   | Employee Updated |
            | salary | 15000            |
            | age    | 35               |
        Then he should see that the employee is successfuly updated

    @delete
    Scenario: Remove the employee
        When he removes the employee with id "21"
        Then he should see that the employee is successfuly removed

    @get @getAll
    Scenario: Get all employees
        When he gets all employees
        Then he should see that the employees are successfuly retrieved

    @get @getOne
    Scenario: Get one employee
        When he gets the employee with id "1"
        Then he should see that the employee is successfuly retrieved
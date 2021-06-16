const Joi = require('joi')
const { object, string, date, number, array } = Joi.types()

const employeeData = object.keys({
    id: number.required(),
    employee_name: string.required(),
    employee_salary: number.required(),
    employee_age: number.required(),
    profile_image: string.allow('', null).required(),
}).required()

export const employeePostResponseSchema = object.keys({
    status: string.required(),
    message: string.required(),
    data: object.keys({
        name: string.required(),
        salary: string.required(),
        age: string.required(),
        id: number.required(),
    }).required()
}).required()

export const employeePutResponseSchema = object.keys({
    status: string.required(),
    message: string.required(),
    data: object.keys({
        name: string.required(),
        salary: string.required(),
        age: string.required()
    }).required()
}).required()

export const employeeGetOneResponseSchema = object.keys({
    status: string.required(),
    data: employeeData,
    message: string.required(),
})

export const employeesGetAllResponseSchema = object.keys({
    status: string.required(),
    data: array.items(
        employeeData
    ).required(),
    message: string.required()
}).required()

export const employeeDeleteResponseSchema = object.keys({
    status: string.required(),
    data: string.required(),
    message: string.required()
}).required()
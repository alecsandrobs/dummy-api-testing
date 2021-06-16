const statusCode = require('http-status-codes').StatusCodes

export class StatusCode {

    static created = statusCode.CREATED

    static success = statusCode.OK

    static noContent = statusCode.NO_CONTENT

    static notAuthorized = statusCode.UNAUTHORIZED

    static badRequest = statusCode.BAD_REQUEST

    static forbidden = statusCode.FORBIDDEN

    static notfound = statusCode.NOT_FOUND

    static serverError = statusCode.INTERNAL_SERVER_ERROR

}

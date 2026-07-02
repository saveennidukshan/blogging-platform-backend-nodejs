class ApiResponse {
    constructor(success, statusCode, message, data = null, errors = null) {
        this.success = success;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
    }

    send(res) {
        return res.status(this.statusCode).json({
            success: this.success,
            message: this.message,
            data: this.data,
            errors: this.errors,
        });
    }
}


class SuccessResponse extends ApiResponse {
    constructor(message = "Success", data = null) {
        super(true, 200, message, data);
    }
}

class CreatedResponse extends ApiResponse {
    constructor(message = "Resource created successfully", data = null) {
        super(true, 201, message, data);
    }
}

class AcceptedResponse extends ApiResponse {
    constructor(message = "Request accepted", data = null) {
        super(true, 202, message, data);
    }
}

class NoContentResponse extends ApiResponse {
    constructor() {
        super(true, 204, "No Content");
    }

    send(res) {
        return res.status(204).send();
    }
}

class ErrorResponse extends ApiResponse {
    constructor(statusCode, message, errors = null) {
        super(false, statusCode, message, null, errors);
    }
}

class BadRequestResponse extends ErrorResponse {
    constructor(message = "Bad Request", errors = null) {
        super(400, message, errors);
    }
}

class UnauthorizedResponse extends ErrorResponse {
    constructor(message = "Unauthorized") {
        super(401, message);
    }
}

class ForbiddenResponse extends ErrorResponse {
    constructor(message = "Forbidden") {
        super(403, message);
    }
}

class NotFoundResponse extends ErrorResponse {
    constructor(message = "Resource Not Found") {
        super(404, message);
    }
}

class ConflictResponse extends ErrorResponse {
    constructor(message = "Conflict") {
        super(409, message);
    }
}

class UnprocessableEntityResponse extends ErrorResponse {
    constructor(message = "Validation Failed", errors = null) {
        super(422, message, errors);
    }
}

class TooManyRequestsResponse extends ErrorResponse {
    constructor(message = "Too Many Requests") {
        super(429, message);
    }
}

class InternalServerErrorResponse extends ErrorResponse {
    constructor(message = "Internal Server Error", errors = null) {
        super(500, message, errors);
    }
}

export {
    ApiResponse,

    SuccessResponse,
    CreatedResponse,
    AcceptedResponse,
    NoContentResponse,

    ErrorResponse,
    BadRequestResponse,
    UnauthorizedResponse,
    ForbiddenResponse,
    NotFoundResponse,
    ConflictResponse,
    UnprocessableEntityResponse,
    TooManyRequestsResponse,
    InternalServerErrorResponse,
};
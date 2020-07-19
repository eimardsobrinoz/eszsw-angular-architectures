export enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

export enum AuthEndPoints {
    LOGIN = "/auth/token/login/",
    CURRENT_USER = "/auth/users/me/",
    LOGOUT_USER = "/auth/token/logout",
    REGISTER = "/auth/users/",
    CHECK_SERVER = "/checkserver/"
}
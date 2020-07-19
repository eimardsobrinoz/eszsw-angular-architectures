import {EmailValidator} from '@angular/forms';

export interface RegisterPayload {
    name:string;
    username:string;
    email:string;
    password:string;
    re_password:string;
}
export interface LoginPayload {
    email:string;
    password:string;
}
export interface UserResponse {
    username:string;
    email:string;
    first_name:string;
    last_name:string;
    id:number;
}
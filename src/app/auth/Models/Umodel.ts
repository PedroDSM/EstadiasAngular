export interface Respuesta {
    message?:      string;
    Fail?: string,
    usuario?:      User;
    access_token?: AccessToken;
}

export interface Users {
    usuarios?: User[];
}

export interface AccessToken {
    type?:         string;
    refreshToken?: string;
    token?:        string;
}

export interface Login{
    email?:    string;
    password?: string;
}

export interface User {
    nombre?:   string;
    roles_id? : number;
    email?:    string;
    password?: string;
    status?: string;
    id?:       number;
}

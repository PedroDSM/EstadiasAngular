export interface Respuesta {
    usuario?:      User;
    message?:      string;
    access_token?: AccessToken;
}

export interface Users {
    usuario?: User[];
}

export interface AccessToken {
    type?:         string;
    token?:        string;
}

export interface User {
    nombre?:   string;
    roles_id? : number;
    email?:    string;
    password?: string;
    id?:       number;
}

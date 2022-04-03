export interface Respuesta {
    message?:      string;
    Fail?: string,
    usuario?:      User;
    access_token?: AccessToken;
}

export interface Users {
    usuario?: User[];
}

export interface Roles {
    id?:     number;
    nombre?: string;
    descripcion?:string;
  }
  

export interface AccessToken {
    type?:         string;
    token?:        string;
}

export interface User {
    nombre?:   string;
    roles_id? : string;
    email?:    string;
    password?: string;
    id?:       number;
}

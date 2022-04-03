export interface Respuesta {
    Roles?:   Roles;
    message?: string;
}

export interface Roles {
    nombre?:      string;
    descripcion?: string;
    status?:      string;
}

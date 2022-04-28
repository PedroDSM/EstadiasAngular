export interface Respuesta {
    rol?:   Rol;
    message?: string;
    Fail?: string,
}

export interface Rol {
    nombre?:      string;
    descripcion?: string;
    status?:      string;
}

export interface Roles { 
    roles?: Rol[];
}



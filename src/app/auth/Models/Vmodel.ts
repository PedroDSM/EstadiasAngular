export interface Respuesta {
    Vista?:   Vista;
    message?: string;
}

export interface Vista {
    nombre?: string;
    icono?:  string;
    nivel?:  number;
    categorias?: number;
    ruta?:   string;
    status?: number;
}

export interface Vistas { 
    vistas?: Vista[];
}
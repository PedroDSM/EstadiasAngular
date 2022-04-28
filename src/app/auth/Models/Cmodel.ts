export interface Categorias {
    Categorias?: Categoria[];
}

export interface Respuesta {
    Categoria?: Categoria;
    message?:   string;
    Fail?: string,
}

export interface Categoria {
    nombre?: string;
    icono?:  string;
    nivel?:  number;
    status?: number;
}

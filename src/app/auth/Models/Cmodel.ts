import { Vista } from "./Vmodel";

export interface Categorias {
    categorias?: Categoria[];
}

export interface Respuesta {
    Categoria?: Categoria;
    categorias?:Categorias[],
    message?:   string;
    Fail?: string,
}

export interface Categoria {
    nombre?: string;
    icono?:  string;
    nivel?:  number;
    status?: number;
    vistas?:     Vista[];
    Nombre?:string;
    array?:     Vista[];

}



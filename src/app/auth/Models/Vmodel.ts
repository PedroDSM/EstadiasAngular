import { Rol } from "./Rmodel";

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
    roles?:        Rol[];
    name?:       string;

}

export interface Vistas { 
    vistas?: Vista[];
}
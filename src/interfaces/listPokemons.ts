// Generated by https://quicktype.io

// Interfaz para mantener un tipado fuerte en el code y detectar cualquier error de datos.

export interface ListPokemosResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
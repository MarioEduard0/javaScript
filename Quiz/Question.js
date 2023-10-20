export class Pregunta {
    constructor(id, pregunta, opciones) {
        this.id = id;
        this.pregunta = pregunta;
        this.opciones = opciones;
    }

    getId() {
        return this.id;
    }

    getPregunta() {
        return this.pregunta;
    }

    getOpciones() {
        return this.opciones;
    }

    setId(id) {
        this.id = id;
    }

    setPregunta(pregunta) {
        this.pregunta = pregunta;
    }

    setOpciones(opciones) {
        this.opciones = opciones;
    }

    getRespuestaCorrecta() {
        return this.opciones.find(opcion => opcion.getEsCorrecta());
    }
}
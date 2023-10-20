export class Opcion {
  constructor(texto, esCorrecta) {
    this.texto = texto;
    this.esCorrecta = esCorrecta;
  }

  getTexto() {
    return this.texto;
  }

  getEsCorrecta() {
    return this.esCorrecta;
  }

  setTexto(texto) {
    this.texto = texto;
  }

  setEsCorrecta(esCorrecta) {
    this.esCorrecta = esCorrecta;
  }
}
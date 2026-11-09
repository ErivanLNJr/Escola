class Aluno {
  nome;
  #notas = [0.0,0.0,0.0];
  materia = [];
  estado = 'cursando';
  media = 0;
  constructor(nome) {
    this.nome = nome;
  }
  setNotas(n1,n2,n3){
    this.#notas = [n1,n2,n3];
  }
  getNotas(){
    return [...this.#notas];
  }
  gerarMedia() {
    let [nota1,nota2,nota3] = this.#notas;
    let m = (nota1 + nota2 + nota3) / 3;
    this.media = m;
    return m;
  }
  gerarEstado() {
    let est;
    let media=this.media;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }
}

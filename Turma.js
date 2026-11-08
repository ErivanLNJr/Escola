class Turma{
  professor;
  curso;
  alunos = [];
  constructor(prof,curso){
    this.professor = prof;
    this.curso = curso;
  }
  addAluno(aluno){
    this.alunos.push(aluno);
  }
}
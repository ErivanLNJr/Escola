class Turma{
  professor;
  curso;
  alunos = [];
  construct(prof,curso){
    this.professor = prof;
    this.curso = curso;
  }
  addAluno(aluno){
    this.alunos.push(aluno);
  }
}
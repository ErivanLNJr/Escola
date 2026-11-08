class Interface {
  static indice_de_turma = null;
  static selectTurma(indice){
    this.indice_de_turma = indice;
    alert('Turma de '+turmas[indice].curso+' ('+turmas[indice].professor+') selecionada')
  }
  static btnSalvar() {
    const tabTurma = document.getElementById('tab-cadastrar-turma');
    const tabCadastrar = document.getElementById('tab-cadastrar');

    if(tabTurma.classList.contains('active')) {
      let professor = document.getElementById('nomeProfessor').value;
      let curso = document.getElementById('curso').value;
      var turma = new Turma(professor, curso);
      turmas.push(turma);
      alert(turma.curso);
      document.getElementById('nomeProfessor').value = '';
      document.getElementById('curso').value = '';
    }else if(tabCadastrar.classList.contains('active')){
      if(turmas.length <= 0){
        alert('Precisa cadastrar uma turma primeiro.');
        return;
      }
      if(this.indice_de_turma === null){
        alert("Selecione uma turma antes.");
        return;
      }
      let nome = document.getElementById('nome').value;
      let n1 = Number(document.getElementById('n1').value);
      let n2 = Number(document.getElementById('n2').value);
      let n3 = Number(document.getElementById('n3').value);
      let a1 = new Aluno(nome);
      a1.setNotas(n1, n2, n3);
      let m = a1.gerarMedia();
      let est = a1.gerarEstado(m);
      turmas[this.indice_de_turma].addAluno(a1);
      alert('aluno cadastrado');
      document.getElementById('nome').value = '';
      document.getElementById('n1').value = '';
      document.getElementById('n2').value = '';
      document.getElementById('n3').value = '';
    }
  }
  static listarAluno() {
    // Ajusta o conteúdo visível
    Utils.switchTab(3);
    if(turmas.length <=0){
      return;
    }
    let lista = '<table>';
    
    let turma = turmas[this.indice_de_turma]
    lista += '<b>'+ turma.curso +' ('+ turma.professor +')</b>'
    lista += '<tr><th>Nome</th> <th>U1</th> <th>U2</th> <th>U3</th> <th>Media</th> <th>Situação</th></tr>';
    for (let i = 0; i < turma.alunos.length; i++) {
      lista = lista
        + '<tr>' 
        + '<td>' + turma.alunos[i].nome + '</td>'
        + '<td>' + turma.alunos[i].getNotas()[0].toFixed(2) + '</td>'
        + '<td>' + turma.alunos[i].getNotas()[1].toFixed(2) + '</td>'
        + '<td>' + turma.alunos[i].getNotas()[2].toFixed(2) + '</td>'
        + '<td>' + turma.alunos[i].media.toFixed(2) +'</td>'
        + '<td>' + turma.alunos[i].estado + '</td>'
        + '</tr>';
    }
    
    lista += '</table>';
    document.getElementById('alunos').innerHTML = lista;
  }
  static cadastrar() {
    Utils.switchTab(2);
    if(turmas.length <=0){
      return;
    }
    let lista = '<table>';
    //lista += '<tr><th>Professor</th> <th>Curso</th></tr>';
    turmas.forEach((turma,indice) => {
      lista += '<tr>'
        +'<td>'+ turma.curso +'</td>'
        +'<td>'+ turma.professor +'</td>'
        +'<td>'+ '<button onclick="Interface.selectTurma('+indice+')" class="btn-salvar"> Selecionar </button>'+'</td>'
        +'</tr>';
    })
    lista += '</table>';
    document.getElementById('turmas').innerHTML = lista
  }
  static cadastrarTurma() {
    Utils.switchTab(1);
  }
}
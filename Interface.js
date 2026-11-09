class Interface {
  static indice_de_turma = null;
  static selectTurma(indice){
    this.indice_de_turma = indice;
    alert('Turma de '+turmas[indice].curso+' ('+turmas[indice].professor+') selecionada')
  }
  static atualizarNota(indiceAluno, indiceNota, novaNota){
    let aluno = turmas[this.indice_de_turma].alunos[indiceAluno];
    let notas = aluno.getNotas();
    notas[indiceNota] = Number(novaNota);

    aluno.setNotas(notas[0], notas[1], notas[2]);
    aluno.gerarMedia();
    aluno.gerarEstado();

    this.listarAluno();
    alert(...notas);
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
      let aluno = new Aluno(nome);
      turmas[this.indice_de_turma].addAluno(aluno);
      alert('aluno cadastrado');
      document.getElementById('nome').value = '';
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
    lista += '<tr><th>Nome</th> <th>Unidade 1</th> <th>Unidade 2</th> <th>Unidade 3</th> <th>Media</th> <th>Situação</th></tr>';
    for (let i = 0; i < turma.alunos.length; i++) {
      let nota = turma.alunos[i].getNotas();
      let nNotas = nota;
      lista = lista
        + '<tr>' 
        + '<td>' + turma.alunos[i].nome + '</td>'
        + '<td><input type="number" min="0" max="10" step="0.1" value="'+ nota[0].toFixed(2) + '" onchange="Interface.atualizarNota('+i+',0,this.value)"></td>'
        + '<td><input type="number" min="0" max="10" step="0.1" value="'+ nota[1].toFixed(2) + '" onchange="Interface.atualizarNota('+i+',1,this.value)"></td>'
        + '<td><input type="number" min="0" max="10" step="0.1" value="'+ nota[2].toFixed(2) + '" onchange="Interface.atualizarNota('+i+',2,this.value)"></td>'
        + '<td>' + turma.alunos[i].gerarMedia().toFixed(2) +'</td>'
        + '<td>' + turma.alunos[i].gerarEstado() + '</td>'
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
class Interface {
  static btnSalvar() {
    let nome = document.getElementById('nome').value;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let a1 = new Aluno(nome);
    a1.setNotas(n1, n2, n3);
    let m = a1.gerarMedia();
    let est = a1.gerarEstado(m);
    turma[turma.length] = a1;
    alert('aluno cadastrado');
  }
  static listarAluno() {
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');

    btnListar.classList.add('active');
    btnCadastrar.classList.remove('active');

    // Ajusta o conteúdo visível
    tabListar.classList.add('active');
    tabCadastrar.classList.remove('active');
    let lista = '<table>';
    lista += '<tr><th>Nome</th> <th>U1</th> <th>U2</th> <th>U3</th> <th>Media</th> <th>Situação</th></tr>';
    for (let i = 0; i < turma.length; i++) {
      lista = lista
        + '<tr>' 
        + '<td>' + turmas[i].nome + '</td>'
        + '<td>' + turmas[i].getNotas()[0].toFixed(2) + '</td>'
        + '<td>' + turmas[i].getNotas()[1].toFixed(2) + '</td>'
        + '<td>' + turmas[i].getNotas()[2].toFixed(2) + '</td>'
        + '<td>' + turmas[i].media.toFixed(2) +'</td>'
        + '<td>' + turmas[i].estado + '</td>' 
        + '</tr>';
    }
    lista += '</table>';
    document.getElementById('alunos').innerHTML = lista;
  }

  static cadastrar() {
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');

    btnListar.classList.remove('active');
    btnCadastrar.classList.add('active');

    tabListar.classList.remove('active');
    tabCadastrar.classList.add('active');
    //document.getElementById("media").innerHTML = m;
  }
}

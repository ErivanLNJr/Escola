class Utils{
    static switchTab(aba){
        const btnCadastrar = document.getElementById('btn-cadastrar');
        const btnListar = document.getElementById('btn-listar');
        const btnTurma = document.getElementById('btn-cadastrar-turma');
        const tabTurma = document.getElementById('tab-cadastrar-turma');
        const tabCadastrar = document.getElementById('tab-cadastrar');
        const tabListar = document.getElementById('tab-listar');

        //--- desativa todos os botões ---
        btnTurma.classList.remove('active');
        btnCadastrar.classList.remove('active');
        btnListar.classList.remove('active');

        //--- desativa todas as tabs ---
        tabTurma.classList.remove('active');
        tabCadastrar.classList.remove('active');
        tabListar.classList.remove('active');

        //--- seleciona a Aba ---
        switch (aba) {
            case 1:
                btnTurma.classList.add('active');
                tabTurma.classList.add('active');
                break;
        
            case 2:
                btnCadastrar.classList.add('active');
                tabCadastrar.classList.add('active');
                break;

            case 3:
                btnListar.classList.add('active');
                tabListar.classList.add('active');
                break;
        }
    }
}
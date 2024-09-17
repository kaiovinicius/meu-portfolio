class Funcionario {
    constructor(nome, idade, cargo) {
      if (!nome || !idade || !cargo) {
        throw new Error('Nome, idade e cargo são obrigatórios!');
      }
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      if (!departamento) {
        throw new Error('Departamento é obrigatório para o Gerente!');
      }
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      if (!linguagem) {
        throw new Error('Linguagem é obrigatória para o Desenvolvedor!');
      }
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  function exibirErro(mensagem) {
    document.getElementById('erro').textContent = mensagem;
  }
  
  function criarFuncionario() {
    try {
      const nome = document.getElementById('nome').value;
      const idade = parseInt(document.getElementById('idade').value);
      const cargo = document.getElementById('cargo').value;
      const departamento = document.getElementById('departamento').value;
      const linguagem = document.getElementById('linguagem').value;
  
      if (!nome || isNaN(idade) || !cargo) {
        throw new Error('Todos os campos obrigatórios devem ser preenchidos.');
      }
  
      let funcionario;
      if (cargo.toLowerCase() === 'gerente') {
        funcionario = new Gerente(nome, idade, cargo, departamento);
      } else if (cargo.toLowerCase() === 'desenvolvedor') {
        funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
      } else {
        funcionario = new Funcionario(nome, idade, cargo);
      }
  
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = `
        <p>${funcionario.seApresentar()}</p>
        <p>${funcionario.trabalhar()}</p>
      `;
  
      if (funcionario instanceof Gerente) {
        resultadoDiv.innerHTML += `<p>${funcionario.gerenciar()}</p>`;
      } else if (funcionario instanceof Desenvolvedor) {
        resultadoDiv.innerHTML += `<p>${funcionario.programar()}</p>`;
      }
  
      exibirErro('');
    } catch (error) {
      exibirErro(error.message);
    }
  }
  
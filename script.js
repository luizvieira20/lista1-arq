// Implementação das Classes

class Contato{
    constructor(nome, telefone, email){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }
  
    adicionarContato(contato) {
        this.contatos.push(contato);
    }
  
    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }
  
    listarContatos() {
        return this.contatos;
    }
  
    buscarContatoPorNome(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }
}
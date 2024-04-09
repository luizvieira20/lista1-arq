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
        const index = this.contatos.findIndex(contato => contato.nome === nome);

        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log(`Contato ${nome} removido com sucesso.`);
        }else{
            console.log(`Erro: O contato ${nome} não existe.`);
        }
    }
  
    listarContatos() {
        return this.contatos;
    }
  
    buscarContatoPorNome(nome) {
        const contato = this.contatos.filter(contato => contato.nome === nome);
        return contato ? contato : `Contato ${nome} não encontrado.`;
    }
}

// Implementação da Linha de Comando (CLI)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Instância do GerenciadorContatos
const gerenciador = new GerenciadorContatos();

// Função para interagir com o usuário
function iniciar() {
    rl.question('Escolha uma opção: 1. Adicionar contato, 2. Remover contato, 3. Listar contatos, 4. Buscar contato, 5. Sair\n', (resposta) => {
        switch(resposta) {
            case '1':
                rl.question('Digite o nome, telefone e email do contato (separados por vírgula):\n', (dados) => {
                    const [nome, telefone, email] = dados.split(',');
                    gerenciador.adicionarContato(new Contato(nome, telefone, email));
                    console.log('Contato adicionado com sucesso!');
                    iniciar();
                });
                break;
            case '2':
                rl.question('Digite o nome do contato que deseja remover:\n', (nome) => {
                    gerenciador.removerContato(nome);
                    iniciar();
                });
                break;
            case '3':
                console.log('Lista de contatos:', gerenciador.listarContatos());
                iniciar();
                break;
            case '4':
                rl.question('Digite o nome do contato que deseja buscar:\n', (nome) => {
                    console.log('Resultado da busca:', gerenciador.buscarContatoPorNome(nome));
                    iniciar();
                });
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                iniciar();
        }
    });
}

// Inicia o CLI
iniciar();
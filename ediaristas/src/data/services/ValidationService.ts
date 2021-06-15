import { nodeModuleNameResolver } from "typescript";

export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8;
  },
};

// Aqui é a validação do CEP, vendo se ele digitou todos os numeros.
// Foi feito o seguinte, ele pegou o valor do CEP tirou os caracteres especiais como traço e ponto
// O g esta aí para pegar a expressão inteira, ou seja ele esta comparando todo o meu input
// o vazio, ele esta dizendo que é para substituir tudo aquilo que não for número para uma string vazia, ou seja, remove tudo que
// não número o "ponto lenght" vai comparar o tamanho do input se ele for igual a 8 é que esta certo.

// Nessa pagina é ts porque nao vai usar os elementos do React será JavaScript puro
import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";
import { getEffectiveTypeParameterDeclarations } from "typescript";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [Carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);
  // Função para buscar contato
  //   Parametros não esta feita porque não esta terminada, ou seja, ela ainda esta sendo feita
  //set carregando, porque ele ainda esta buscand0o valor na API
  //set erro vazio, porque a busca ainda não esta cpncluida portanto não deve apresentar mensagem de erro

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      await ApiService.get(
        "/api/diaristas-cidade?cep=" + cep.replace(/\D/g, "")
      );
      // esse await vai permitir que as proximas linhas de códigos só vão
      // ser executadas após receber as informações do processamento de requisição
    } catch (error) {
      setErro("CEP não encontrado");
      setCarregando(false);
    }

    setBuscaFeita(true);
  }

  return {
    cep,
    setCep,
    cepValido,
  };
}

// Eu quis dizer que esse array é um array de [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
// ou seja todas essas informações que tera dentro desse Arrayesta contida nessa função

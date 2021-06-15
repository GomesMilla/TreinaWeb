import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com/";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fazendo a conexão com a API é por meio daqui que vamos fazer a ligação com a API
// receber todos os dados por meio dela

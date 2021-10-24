import axios from "axios";
/*
--> Receber code(string)
--> Recuperar access_token no github
--> Verificar se o usuario existe no DB
--> IF EXISTIR - GERA UM TOKEN
--> ELSE - CRIA NO BANCO DE DADOS, GERA UM TOKEN P USER
--> Retornar o token com as infos do user logado

*/

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  }
}

export { AuthenticateUserService };

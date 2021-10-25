import axios from "axios";

/*
--> Receber code(string) [X]
--> Recuperar access_token no github [X]
--> Recuperar infos do user no Github [X]
--> Verificar se o usuario existe no DB []
--> IF EXISTIR - GERA UM TOKEN []
--> ELSE - CRIA NO BANCO DE DADOS, GERA UM TOKEN P USER []
--> Retornar o token com as infos do user logado  []
*/

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const { data: accessTokenResponse } =
      await axios.post<IAccessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        },
      });

    const response = await axios.get<IUserResponse>(
      "https://api.github.com/user",
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    return response.data;
  }
}

export { AuthenticateUserService };

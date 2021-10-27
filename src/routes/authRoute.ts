import { Router } from "express";

const authRouter = Router();

authRouter.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

authRouter.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

export { authRouter };

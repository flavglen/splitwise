declare function require(name: string);

import { Request, Response, Router } from "express";

const OAuth = require("OAuth");
const cors = require("cors");

const userRouter: Router = Router();
// cors options
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

// oauth config
const auth2 = new OAuth.OAuth2(
  "nuB8amtMzpnltAB0Py0oFDM4Q8kaLYUnjJGBGG49",
  "dLHH1fW0kia2bueofjQYkJZhamuVXJxsNiDNeXQg",
  "https://www.splitwise.com",
  "/oauth/authorize",
  "/oauth/token",
  null,
);

// cors allow all
userRouter.options("*", cors()); // include before other routes

// get callback url to client
userRouter.get("/url", cors(corsOptions), (request: Request, response: Response) => {
  const authURL = auth2.getAuthorizeUrl({
    redirect_uri: "http://localhost:4200/callback",
    response_type: "code",
  });
  response.json({ url: authURL });
});

// get auth token to client
userRouter.post("/auth", cors(corsOptions), (request: Request, response: Response) => {

  auth2.getOAuthAccessToken(
    request.body.token,
    {
      redirect_uri: "http://localhost:4200/callback",
      grant_type: "authorization_code",
    },
    function(e, access_token, refresh_token, results) {
      if (e) {
       
        response.json(JSON.stringify(e));
      } else if (results.error) {
       
        response.json(JSON.stringify(results));
      } else {
        response.json({accessToken: access_token});
      }
    });

});

userRouter.get("/group", cors(corsOptions), (request: Request, response: Response) => {
  let autoToken = "";

  if (request.headers.authorization) {
    autoToken = request.headers.authorization.toString().split(" ")[1];
  }

  auth2.get("https://secure.splitwise.com/api/v3.0/get_groups", autoToken, function(e, data) {
     if (e) { console.error(e); }
     response.json( data);
  });

});

userRouter.post("/expenses", cors(corsOptions), (request: Request, response: Response) => {
  let autoToken = "";

  if (request.headers.authorization) {
    autoToken = request.headers.authorization.toString().split(" ")[1];
  }

  // tslint:disable-next-line:max-line-length
  auth2.get("https://secure.splitwise.com/api/v3.0/get_expenses?group_id=" + request.body.groupId, autoToken, function(e, data) {
     if (e) { console.error(e); }
     response.json( data);
  });

});

export { userRouter };

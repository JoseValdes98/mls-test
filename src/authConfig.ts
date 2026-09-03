import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "6b80c611-fe02-4f8d-b9f3-b5e98d276a22",
    authority:
      "https://login.microsoftonline.com/8a91e271-d2b1-4665-9ca3-cf16ab3493bb",
    redirectUri: "http://localhost:5173",
    postLogoutRedirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile"],
};

export const msalInstance = new PublicClientApplication(msalConfig);
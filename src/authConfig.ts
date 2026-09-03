import type { Configuration } from "@azure/msal-browser";
const TU_CLIENT_ID = "6b80c611-fe02-4f8d-b9f3-b5e98d276a22";
const TU_TENANT_ID = "8a91e271-d2b1-4665-9ca3-cf16ab3493bb";
export const msalConfig: Configuration = {
 auth: {
 clientId: TU_CLIENT_ID,
 authority: `https://login.microsoftonline.com/organizations`,
 redirectUri: "http://localhost:5173",
 },
 cache: {
 cacheLocation: "sessionStorage",
 },
};

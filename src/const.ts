// Constants for the CRM demo
export const COOKIE_NAME = "session";
export const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;

export const APP_TITLE = "RealEstate CRM - Demo";

export const APP_LOGO = "https://placehold.co/128x128/3B82F6/FFFFFF?text=CRM";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`/app-auth`, window.location.origin);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

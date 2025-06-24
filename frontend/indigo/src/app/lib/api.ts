export async function getApiBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:1337/api";
  }
  if (!process.env.API_URL) {
    throw new Error("Missing API_URL in production");
  }
  return process.env.API_URL;
}

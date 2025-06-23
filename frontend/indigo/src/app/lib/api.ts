export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://localhost:1337/api"
    : (() => {
        throw new Error("Missing NEXT_PUBLIC_API_URL in production");
      })());

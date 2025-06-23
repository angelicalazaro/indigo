module.exports = [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://somosindigo.vercel.app/", "http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: "*",
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

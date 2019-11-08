const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://ec-api-server.herokuapp.com"
    : "http://localhost:8080";

module.exports = {
  BASE_URL
};

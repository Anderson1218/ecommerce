const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://35.187.155.47:80"
    : "http://192.168.64.2";
const AUTH_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://35.187.155.47:80"
    : "http://192.168.64.2";

module.exports = {
  BASE_URL,
  AUTH_SERVER_URL
};

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://map-platform-1571383966028.appspot.com"
    : "http://localhost:8080";
const AUTH_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://desolate-wildwood-58442.herokuapp.com"
    : "http://localhost:8000";

module.exports = {
  BASE_URL,
  AUTH_SERVER_URL
};

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://map-platform-1571383966028.appspot.com"
    : "http://localhost:8080";

module.exports = {
  BASE_URL
};

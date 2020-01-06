import cookie from "cookie_js";

const adminToken = "admin_token";
const userNameKey = "userName";

export function getToken() {
  return cookie.get(adminToken);
}

export function setToken(token) {
  return cookie.set(adminToken, token);
}

export function removeToken(token) {
  return cookie.remove(adminToken);
}

export function setUserName(value) {
  return cookie.set(userNameKey, value);
}

export function getUserName() {
  return cookie.get(userNameKey);
}

export function removeUserName() {
  return cookie.remove(userNameKey);
}

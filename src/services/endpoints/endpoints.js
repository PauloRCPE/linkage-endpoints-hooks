import api from "../api/api";

//user
export async function CreateUser(body) {
  const { data } = api.post(`/user`, body);
  return data;
}
export async function GetUser() {
  const { data } = api.get(`/user`);
  return data;
}
export async function UpdateUser(id, body) {
  const { data } = api.put(`/user/:${id}`, body);
  return data;
}
export async function DeleteUser(id) {
  const { data } = api.delete(`/user/:${id}`);
  return data;
}
export async function LoginUser(dados) {
  const { data } = await api.post(`/login`, dados);
  return data;
}

//session
export async function CreateSession(body) {
  const { data } = api.post(`/session`, body);
  return data;
}
export async function GetSession() {
  const { data } = api.get(`/session`);
  return data;
}
export async function DeleteSession(id) {
  const { data } = api.delete(`/session/:${id}`);
  return data;
}

import axios from "axios";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

//example of an api call with axios

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    console.error;
  }
}

export async function activities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    return data;
  } catch (error) {
    console.error;
  }
}

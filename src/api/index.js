import axios from "axios";
import { getUser, getToken } from "../auth";

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

export async function getAllActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    return data;
  } catch (error) {
    console.error;
  }
}

export async function createRoutine(name, goal, isPublic) {
  console.log(name, goal, isPublic);
  const token = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/routines`,
      {
        name,
        goal,
        isPublic,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createActivity(name, description) {
  try {
    const { data } = await axios.post(`${BASE}/activities`, {
      name,
      description,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUsersRoutine() {
  const user = getUser();
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    data.map((e) => {
      if (e === user) {
        return data;
      }
    });
  } catch (error) {
    console.error;
  }
}

// export async function deleteActivity(name, description){
//   const myToken = getToken()
//   try{
//     const {data} = await axios.delete(`${BASE}/activities/${name, description}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": 'application/json',
//           'Authorization': `Bearer ${myToken}`
//       },
//     }
//     )
//     return data;
// } catch(error){
//   throw error
// } finally{
//   location.reload()
// }}

// export async function deleteRoutines(name, goal, isPublic){
//   const myToken = getToken()
//   try{
//     const {data} = await axios.delete(`${BASE}/routines/${name, goal, isPublic}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": 'application/json',
//           'Authorization': `Bearer ${myToken}`
//       },
//     }
//     )
//     return data;
// } catch(error){
//   throw error
// } finally{
//   location.reload()
// }}

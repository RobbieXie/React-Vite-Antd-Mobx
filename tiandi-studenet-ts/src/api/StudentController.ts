import axios from "axios";

const SERVER_ADDRESS = 'http://localhost:8080';

export function getALlScores() {
  return axios.get(SERVER_ADDRESS + "/studentScores")
       .then((response) => response);
}

export function getPageScores(page: number, size: number) {
  return getPageScoresWithName(page, size, null);
}

export function getPageScoresWithName(page: number, size: number, name: string | null) {
  return axios.get(SERVER_ADDRESS + "/page/studentScores", {
    params: {
      page: page,
      size: size,
      name: name
    }
  }).then((response) => response);
}

export function insert(studentScore: any) {
  return axios.post(SERVER_ADDRESS + "/studentScores", studentScore)
       .then((response) => response);
}

export function update(id: string, studentScore: any) {
  return axios.put(SERVER_ADDRESS + `/studentScores/${id}`, studentScore)
       .then((response) => response);
}

export async function deleteById(id: string) {
  return axios.delete(SERVER_ADDRESS + `/studentScores/${id}`)
       .then((response) => response);
}


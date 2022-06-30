import { Octokit } from "octokit";

const token = process.env.REACT_APP_TOKEN;

export async function getRepository(user){
  const octokit = new Octokit({
    auth: token
  })
  return await octokit.request(`GET /users/${user}/repos`, {
    username: user
  })
}

export async function getUser(user){
  const octokit = new Octokit({
    auth: token
  })
  return await octokit.request(`GET /users/${user}`, {
    username: user
  })
}

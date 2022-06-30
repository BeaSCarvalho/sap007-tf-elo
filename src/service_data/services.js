import { Octokit } from "octokit";

const token = "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";

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

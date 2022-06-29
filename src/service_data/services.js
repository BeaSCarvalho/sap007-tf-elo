import { Octokit } from "octokit";

export async function getRepository(user){
  const octokit = new Octokit({
    auth: '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'
  })

  return await octokit.request(`GET /users/${user}/repos`, {
    username: user
  })
}

export async function getUser(user){
  const octokit = new Octokit({
    auth: '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'
  })

  return await octokit.request(`GET /users/${user}`, {
    username: user
  })
}

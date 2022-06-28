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

import { Octokit } from "octokit";

export async function getRepository(user){
  const octokit = new Octokit({
    auth: "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"

  })

  return await octokit.request(`GET /users/${user}/repos`, {
    username: user
  })
}

export async function getUser(user){
  const octokit = new Octokit({
    auth: "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"
  })

  return await octokit.request(`GET /users/${user}`, {
    username: user
  })
}

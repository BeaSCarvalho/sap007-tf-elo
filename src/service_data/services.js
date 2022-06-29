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

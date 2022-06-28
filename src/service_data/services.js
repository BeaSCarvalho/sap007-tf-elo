import { Octokit } from "octokit";

export async function getUser(user){
  const octokit = new Octokit({
    auth: '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'
  })

  try {
    const response = await octokit.request(`GET /users/${user}`, {
    username: 'BeaSCarvalho'
   })
   return response
  } catch (error) {
    return error
  }
}

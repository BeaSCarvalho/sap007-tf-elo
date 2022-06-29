const url = "https://api.github.com/users";
// const client_id = " ";
// const client_secret = " ";

export function getUser(user){
//     const profileContent = await fetch(
//         `${url}/${user}`
//     )
//     return profileContent
//     // ?client_id=${client_id}&client_secret=${client_secret}
// }

    const options = {
        method: 'GET',
        headers: {
            Authorization: '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'
        },
    }


    return fetch(`${url}/${user}`, options)
    .then((response) => response)
}


const headersAuth = {
  "Accept" : "application/vnd.github.v3+json",
  "Authorization" : "Token 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"
}

const user = "BeaSCarvalho";

//para acessar os repositórios: /repos

export const test = async() => {
  try {
    const response = await fetch(`${url}/${user}`, {
      method: 'GET',
      headers: headersAuth
    })  
    return response.json();
  } 
  catch (error) {
    console.error(error)
  }
}



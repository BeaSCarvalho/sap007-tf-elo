import { getUser } from './services.js';

const userTestKeysThatHaveStringValue = {
  "login": "login",
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "html_url": "https://github.com/octocat",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "name": "The Octocat",
  "company": "@github",
  "blog": "https://github.blog",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
}

const userTestKeysThatHaveNumberValue = {
  "public_repos": 8,
  "followers": 6229,
  "following": 9,
}

const responseOK = {
  "ok": true, 
  "status": 200, 
  "statusText": "OK", 
}

const responseOKFalse = {
  "ok": false, 
  "status": 404, 
  "statusText": "Not Found",
}


describe("API link users", () => {

  test("return response with key ok = true", async () => {
    const data = await getUser("octocat")
    expect(data.status).toBe(responseOK.status)
  });
  
  test("the fetch fails with a Not found code: 404", async () => {
    const data = await getUser()
    expect(data.status).toBe(responseOKFalse.status)
  });

});

describe("Testing the type of data keys and data", () => {
  const keysArrStr = Object.keys(userTestKeysThatHaveStringValue)
  const keyArrNumber = Object.keys(userTestKeysThatHaveNumberValue)

  test('the type of data have to be an object and not an Array', async() => {
    const data = await getUser();
    expect(typeof data).toBe('object');
    expect(Array.isArray(data)).toBe(false)
  })

  keysArrStr.forEach(eachKey => {
    test(`the type of ${eachKey} have to be a string`, async () => {
      const data = await getUser('octocat');
      const user = await data.data;
      const type = typeof user[eachKey];
      let isStrOrObjct = type === "string" || type === "object";
      expect(isStrOrObjct).toBe(true) ;
    });
  });
 
  keyArrNumber.forEach(eachKey => {
    test(`the type of ${eachKey} have to be a number`, async () => {
      const data = await getUser('octocat');
      const user = await data.data;
      console.log(user)
      const type = typeof await user[eachKey]
      console.log(user[eachKey])
      const isNumber = type === "number"
      expect(isNumber).toBe(true);
    });
  });

});


// describe("API link repos", () => {

// test('the type of data have to be an object and an Array', async() => {
//   const data = await getRepo();
//   expect(typeof data).toBe('object');
//   expect(Array.isArray(data)).toBe(true);
// })

//   test("return response with key ok = true", async () => {
//     const data = await getRepo("https://api.github.com/users/octocat/repos")
//     expect(data.status).toBe(responseOK.status)
//   });
  
//   test("the fetch fails with a Not found code: 404", async () => {
//     const data = await getRepo()
//     expect(data.status).toBe(responseOKFalse.status)
//   });

// });
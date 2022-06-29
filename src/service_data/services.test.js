import { getUser } from './service_data/services.js'

user = {
  "login": "octocat",
  "id": 583231,
  "node_id": "MDQ6VXNlcjU4MzIzMQ==",
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "The Octocat",
  "company": "@github",
  "blog": "https://github.blog",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 8,
  "followers": 6229,
  "following": 9,
  "created_at": "2011-01-25T18:44:36Z",
  "updated_at": "2022-03-22T14:07:15Z"
}


describe('API link users', () => {
  test('the data is equal to the object user', async () => {
    await expect(getUser('octocat')).resolves.toBe(user);
  });
  
  test('the fetch fails with an "Resource not found" code: 404', async () => {
    await expect(getUser()).rejects.toMatch('Resource not found');
  });
  

  test('the type of data have to be an object and not an Array', () => {
    test('the data is peanut butter', async () => {
      const data = await fetchData();
      expect(typeof data).toBe('object');
      expect(Array.isArray(data)).toBe(false)
    });
  })

})



// test('the fetch fails with an "" code: 404', async () => {
//   await expect(getUser()).rejects.toMatch('Resource not found');
// });
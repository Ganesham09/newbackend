require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "Ganesham09",
  id: 104836088,
  node_id: "U_kgDOBj-r-A",
  avatar_url: "https://avatars.githubusercontent.com/u/104836088?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Ganesham09",
  html_url: "https://github.com/Ganesham09",
  followers_url: "https://api.github.com/users/Ganesham09/followers",
  following_url:
    "https://api.github.com/users/Ganesham09/following{/other_user}",
  gists_url: "https://api.github.com/users/Ganesham09/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Ganesham09/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Ganesham09/subscriptions",
  organizations_url: "https://api.github.com/users/Ganesham09/orgs",
  repos_url: "https://api.github.com/users/Ganesham09/repos",
  events_url: "https://api.github.com/users/Ganesham09/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Ganesham09/received_events",
  type: "User",
  site_admin: false,
  name: "Ganesham Pareek",
  company: null,
  blog: "",
  location: "cave",
  email: null,
  hireable: null,
  bio: "keyboard fighter \r\n",
  twitter_username: "GaneshamPx",
  public_repos: 37,
  public_gists: 0,
  followers: 2,
  following: 18,
  created_at: "2022-05-03T11:55:09Z",
  updated_at: "2024-05-23T18:28:39Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("GaneshamPx");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login first before entering the space</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai or code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

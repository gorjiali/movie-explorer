# Movie Explorer App With Vue 3 + TypeScript + Vite


### 🚨 Important

- The api endpoint used in this project isn't normally available in our country, so to use the project, please turn on your vpn. (without vpn you get an error after `timeout: 10000`)
- In pagination section, because of api limitiation, we could not access pages above 500, so a manual limit was placed on the number of totalPages (If the number of pages specified by the server was higher than 500).

### 📀 online Demo
[Movie Explorer](https://movie-explorer-sigma.vercel.app)

### ⚙️ for serve or build by your own
after get project files:

```
yarn install
```

then create a `.env` file in the root directory and put the following in it:

```
VITE_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p
VITE_API_KEY=<your_api_key>
```

you can use your themoviedb `api_key` or use the one sent in the email.
then for serve project run:

```
yarn dev
```

or for build run:

```
yarn build
```

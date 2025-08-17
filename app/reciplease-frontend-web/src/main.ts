import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL // This could also be window.location.origin
    }
  })
);

// ChatGPTs Version (Need to verify and hold for future reference):
// app.use(
//   createAuth0({
//     domain: import.meta.env.VITE_AUTH0_DOMAIN,         // e.g. dev-xxx.us.auth0.com
//     clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,    // e.g. 2eElsSvEskb7IkgRZHY8UKNp6MTBQpKP
//     authorizationParams: {
//       redirect_uri: window.location.origin,
//       // optional if you have an API in Auth0:
//       ...(import.meta.env.VITE_AUTH0_AUDIENCE && {
//         audience: import.meta.env.VITE_AUTH0_AUDIENCE,
//         scope: 'openid profile email offline_access'
//       }),
//     },
//     cacheLocation: 'localstorage',
//     useRefreshTokens: true,
//   })
// )


app.mount('#app')




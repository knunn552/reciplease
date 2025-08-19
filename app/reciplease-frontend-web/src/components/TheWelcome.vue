<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')

import { useAuth0 } from '@auth0/auth0-vue'
import { useWeatherService, type WeatherForecast } from '@/services/external-api.service'
const { getWeather } = useWeatherService();
import LoginButton from './LoginButton.vue'
import SignupButton from './SignupButton.vue'
import LogoutButton from './LogoutButton.vue'
import { ref, computed } from "vue";

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";


const { isAuthenticated, isLoading } = useAuth0()

const forecasts = ref<WeatherForecast[]>([]);
const errorMsg = ref<string | null>(null);
const userJson = computed(() => (user.value ? JSON.stringify(user.value, null, 2) : ""));

async function onGetWeather() {
  errorMsg.value = null;
  try {
    forecasts.value = await getWeather();
  } catch (e: any) {
    errorMsg.value = e?.message ?? "Failed to fetch weather";
  }
}


</script>

<template>

<!-- Auth buttons -->
<div v-if="!isLoading" class="mb-4 flex gap-2">
  <template v-if="isAuthenticated">
    <LogoutButton />

    <button> Click 4 Weather Data </button>
    <p v-bind="user"></p>
  </template>
  <template v-else>
    <LoginButton />
    <SignupButton />
  </template>
</div>

 <div v-if="errorMsg" style="color:red">{{ errorMsg }}</div>

  <pre v-if="userJson">{{ userJson }}</pre>

  <div>
    <p>Here is where we'll test the request</p>
    <button @click="onGetWeather">Get Weather Data</button>

    <ul v-if="forecasts.length">
      <li v-for="(f, i) in forecasts" :key="i">
        {{ f.date }} — {{ f.temperatureC }}°C — {{ f.summary }}
      </li>
    </ul>
  </div>


  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vite.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a>
    +
    <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener"
      >Vue - Official</a
    >. If you need to test your components and web pages, check out
    <a href="https://vitest.dev/" target="_blank" rel="noopener">Vitest</a>
    and
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    /
    <a href="https://playwright.dev/" target="_blank" rel="noopener">Playwright</a>.

    <br />

    More instructions are available in
    <a href="javascript:void(0)" @click="openReadmeInEditor"><code>README.md</code></a
    >.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>
    (our official Discord server), or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also follow the official
    <a href="https://bsky.app/profile/vuejs.org" target="_blank" rel="noopener">@vuejs.org</a>
    Bluesky account or the
    <a href="https://x.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    X account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>

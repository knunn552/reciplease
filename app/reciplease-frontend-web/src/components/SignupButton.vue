<template>
  <button @click="handleSignup">Sign up</button>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()

const handleSignup = () => {
  loginWithRedirect({
    authorizationParams: { screen_hint: 'signup' },
    appState: { target: '/' } // where to land in your app after auth completes
  })
}
</script>

<style scoped>
button { padding: .5rem .75rem; border: 1px solid #ccc; border-radius: .5rem; }
</style>

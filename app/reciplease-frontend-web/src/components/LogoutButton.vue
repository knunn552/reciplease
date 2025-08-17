<template>
  <button @click="handleLogout">Log out</button>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const { logout } = useAuth0()

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<style scoped>
button { padding: .5rem .75rem; border: 1px solid #ccc; border-radius: .5rem; }
</style>
<template>
  <h2>User de lista</h2>

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.email }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { userUsersComposable } from '../composables/users.composable';

const { fetchUsers, users } = userUsersComposable();

onMounted(() => {
  fetchUsers(1, 10);
});
</script>

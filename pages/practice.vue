<script setup>
const {
  pending,
  data: posts,
  error,
} = useLazyFetch("https://jsonplaceholder.typicode.com/posts", {
  server: false,
});
</script>
<template>
  <!-- Handle the loading state -->
  <div v-if="error">Error ...</div>
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style>
/* Add any desired styling here */
</style>

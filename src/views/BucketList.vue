<template>
  <div>
    <h1>My bucket List</h1>
    <router-link :to="{ name: 'show-list', params: { id: '1' } }"
      >Show List</router-link
    >
  </div>
</template>

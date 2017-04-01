<template>
  <div v-if="resource">
  <accounts
    v-bind:products="resource.results.data"
    account="bought"
    v-bind:total="resource.results.total_price.sum"></accounts>
  </div>
</template>
<script src="./script.js"></script>

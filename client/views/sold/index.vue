<template>
  <div v-if="resource">
    <accounts
      :products="resource.results.data"
      account="sold"
      :total="resource.results.total_sold_units.sum"></accounts>
  </div>
</template>
<script src="./script.js"></script>

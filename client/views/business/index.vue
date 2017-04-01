<template>
  <div>
    <save-form v-if="edit || add"
      :business="businessInForm"
      v-on:submit="onFormSubmit"
      v-on:cancel="resetBusinessInForm">
    </save-form>
  <div v-if="business.length > 0">
    <div class="tile is-ancestor" v-for="business in business">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Name</p>
          <p class="subtitle">{{business.name}}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">County</p>
          <p class="subtitle">{{business.county}}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">City</p>
          <p class="subtitle">{{business.city}}</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Street</p>
          <p class="subtitle">{{business.street}}</p>
        </article>
      </div>
    </div>
  </div>
    <div class="column animated" v-if="business.length <= 0">
      <div class="is-ancestor tile">
        <div class="tile is-parent column is-half is-offset-one-quarter">
          <article class="tile is-child box">
            You don't have a business yet.Create one.
          </article>
        </div>
      </div>
    </div>
    <div class="column animated" v-if="!edit">
      <div class="is-ancestor tile">
        <div class="tile is-parent column is-half is-offset-one-quarter">
          <article class="tile is-child box">
            <button class="button is-primary" @click="editbusiness">Edit businesss</button>
          </article>
        </div>
      </div>
    </div>
    </div>
</template>
<script src="./index.js">
</script>

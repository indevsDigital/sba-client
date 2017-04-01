<template>
  <div class="column animated" v-if="business">
    <div class="is-ancestor tile">
      <div class="tile is-parent column is-half is-offset-one-quarter">
        <article class="tile is-child box">
          <h1 class="title">{{business.id ? 'Edit' : 'Add New'}} business Details </h1>
          <div class="block">
            <input type="hidden" v-model="business.id">
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" placeholder="name" v-model="business.name" v-bind:class="{'is-danger': FormErrors.name }">
              <span v-if="FormErrors.name" class="help is-danger">{{ FormErrors.name }}</span>
            </p>
            <label class="label">County</label>
            <p class="control">
              <input class="input" type="text" placeholder="County" v-model="business.county" v-bind:class="{'is-danger': FormErrors.county }">
              <span v-if="FormErrors.county" class="help is-danger">{{ FormErrors.county }}</span>
            </p>
            <label class="label">City</label>
            <p class="control">
              <input class="input" type="text" placeholder="City" v-model="business.city" v-bind:class="{'is-danger': FormErrors.city }">
              <span v-if="FormErrors.city" class="help is-danger">{{ FormErrors.city }}</span>
            </p>
            <label class="label">Street</label>
            <p class="control">
              <input class="input" type="text" placeholder="Street" v-model="business.street" v-bind:class="{'is-danger': FormErrors.street }">
              <span v-if="FormErrors.street" class="help is-danger">{{ FormErrors.street }}</span>
            </p>
            <p class="control">
              <button class="button is-success" @click="onSubmit()">
                {{business.id ? 'Update' : 'Add'}} business
              </button>
              <button class="button is-danger" @click="onCancel()">Cancel</button>
            </p>
          </div>
         </article>
      </div>
    </div>
  </div>
</template>
<script src="./save-form.js">
</script>

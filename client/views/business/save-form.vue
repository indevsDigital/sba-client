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
              <input class="input" type="text" placeholder="name" v-model="business.name">
            </p>
            <label class="label">County</label>
            <p class="control">
              <input class="input" type="text" placeholder="County" v-model="business.county">
            </p>
            <label class="label">City</label>
            <p class="control">
              <input class="input" type="text" placeholder="City" v-model="business.city">
            </p>
            <label class="label">Street</label>
            <p class="control">
              <input class="input" type="text" placeholder="Street" v-model="business.street">
            </p>
            <p class="control">
              <button class="button is-success" v-on:click="onUpdate(business)">
                {{business.id ? 'Update' : 'Add'}} business
              </button>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['business'],
    data () {
      return {
        FormErrors: {}
      }
    },
    methods: {
      onCancel () {
        this.Formerrors = {}
        this.$emit('cancel')
      },
      onSubmit () {
        if (this.validate_form()) {
          this.$emit('submit', this.business)
        }
      },
      validate_form () {
        const errors = {}
        if (!this.business.name) {
          errors.name = 'Name is required'
        }
        if (!this.business.county) {
          errors.county = 'County is required'
        }
        if (!this.business.city) {
          errors.city = 'City is required'
        }
        if (!this.business.street) {
          errors.street = 'Street is required'
        }
        this.Formerrors = errors
        return Object.keys(errors).length === 0
      }
    }
  }
</script>

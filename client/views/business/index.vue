<template>
  <div>
    <save-form
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
    <div class="title is-ancestor" v-if="business.length < 0">
      <p>You don't have a business yet.Please create one</p>
    </div>
    </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  import SaveForm from './save-form.vue'
  const initialData = () => {
    return {
      businessInForm: {
        id: null,
        owner: null,
        name: '',
        county: '',
        city: '',
        street: ''
      }
    }
  }
  /* global  localStorage:true */
  export default {
      components: {
          SaveForm
      },
    data: initialData,
    created () {
      const token = localStorage.getItem('token')
      this.$store.dispatch('fetchBusiness', token).then(() => {
      })
    },
    methods: {
      ...mapActions([
        'saveBusiness'
      ]),
      owner () {
        return `http://127.0.0.1:8000/api/users/${this.user.User.id}/`
      },
      onFormSubmit (business) {
        const token = localStorage.getItem('token')
        this.saveBusiness({
          'business': {
            'id': business[0].id,
            'name': business[0].name,
            'county': business[0].county,
            'owner': this.owner(),
            'city': business[0].city,
            'street': business[0].street
          }, 'token': token
        })
      },
      resetBusinessInForm () {
          this.businessInForm = initialData().businessInForm
      },
      onEditBusiness (business) {
          this.businessInForm = {...business}
      },
      onUpdate (Business) {
        const token = localStorage.getItem('token')
        this.updateBusiness({'business': Business, 'token': token})
          .then(() => {
            this.$store.dispatch('addToMessageBus', {
              title: 'Success',
              message: `Your Business details have been updated successfully`,
              type: 'success',
              duration: 5000
            })
          })
      }
    },
    computed: mapGetters({
      business: 'getBusiness',
      user: 'getUserDetails'
    })
  }

</script>


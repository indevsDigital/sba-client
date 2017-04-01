<template>
  <modal :visible="visible" @close="close">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Current Products in the Stock</h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow" v-if="products.length > 0">
              <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Available Units</th>
                <th colspan="3">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="product in products">
                <td>
                  <a href="#">{{product.product_code}}</a>
                </td>
                <td>
                  {{product.product_name}}
                </td>
                <td>Ksh. {{product.unit_price}}</td>
                <td>{{product.available_units}}</td>
                <td class="is-icon">
                  <a href="#" title="Add to Cart">
                    <i class="fa fa-cart-plus"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
            <p v-if="!products.length>0">There are no products in stock yet</p>
          </div>
        </article>
      </div>
    </div>
  </modal>
</template>

<script>
  import { Modal } from 'vue-bulma-modal'
  const initialData = () => {
    return {
      products: [
        {
          id: null,
          product_name: '',
          product_code: '',
          available_units: '',
          unit_price: ''
        }
      ],
      showModal: false
    }
  }
  export default {
    components: {
      Modal
    },
    data: initialData,
    props: {
      visible: Boolean
    },
    methods: {
      close () {
        this.$emit('close')
      }
    },
    created () {
      this.$store.dispatch('fetchProducts').then(() => {
        this.products = this.$store.getters.getProducts
      })
    }
  }
</script>

<template>
  <card-modal  :visible="visible" @close="close"  :okText="checkout" :title="title" transition="zoom">
    <div class="content has-text-centered">
      <div>
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
                      {{product.product_code}}
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
      </div>
    </div>
  </card-modal>
</template>
<script>
  import { CardModal } from 'vue-bulma-modal'
  export default {
    components: {
      CardModal
    },
    props: {
      title: String,
      products: Array
    },
    data () {
      return {
        src: require('assets/logo.svg'),
        checkout: 'checkout',
        visible: true

      }
    },
    methods: {
      close () {
        this.visible = false
      }
    }
  }
</script>

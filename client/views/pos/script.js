/**
 * Created by mugambi on 24/03/17.
 */
import ProductList from './product-list'
import Modal from './modals/Modal.vue'
/* global  localStorage:true */
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
  data: initialData,
  components: {
    ProductList,
    Modal
  },
  methods: {
    openModalBasic () {
      this.showModal = true
    },
    closeModalBasic () {
      this.showModal = false
    },
  },
  created () {
    this.$store.dispatch('fetchProducts', localStorage.getItem('token')).then(() => {
      this.products = this.$store.getters.getProducts
    })
  }
}


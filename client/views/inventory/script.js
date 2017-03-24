import {
  mapGetters, mapActions
} from 'vuex'
import SaveProduct from './save-product/index.vue'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      product_name: '',
      product_code: '',
      description: '',
      product_category: '',
      unit_price: null,
      purchase_date: '',
      total_inital_units: null,
      business: null,
      expires_on: '',
      available_units: '',
      sold_unit: null,
      damaged_units: ''
    }
  }
}
export default {
  /* global  localStorage:true */
  components: {
    SaveProduct
  },
  data: initialData,
  created () {
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchProducts', token)
  },
  methods: {
    ...mapActions([
      'saveProduct',
      'deleteProduct'
    ]),
    business_url () {
      return `http://127.0.0.1:8000/api/businesses/${this.business[0].id}/`
    },
    category_url () {
      return `http://127.0.0.1:8000/api/categories/${this.productInForm.product_category}/`
    },
    onFormSave (product) {
      const token = localStorage.getItem('token')
      this.saveProduct({
        'product': {
          'id': product.id,
          'product_name': product.product_name,
          'product_code': product.product_code,
          'description': product.description,
          'product_category': this.category_url(),
          'unit_price': product.unit_price,
          'purchase_date': product.purchase_date,
          'total_inital_units': product.total_inital_units,
          'business': this.business_url(),
          'expires_on': product.expires_on,
          'available_units': product.available_units
        },
        'token': token
      }).then(() => {
        this.resetProductInForm()
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `The product has been ${product.id ? 'edited' : 'added'}   sucessfully`,
          type: 'success',
          duration: 5000
        })
        const token = localStorage.getItem('token')
        this.$store.dispatch('fetchProducts', token)
      })
    },
    onRemoveClicked (id) {
      const token = localStorage.getItem('token')
      this.deleteProduct(id, token).then(() => {
        if (id === this.productInForm.id) {
          this.resetProductInForm()
        }
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `The Product has been deleted sucessfully`,
          type: 'success',
          duration: 5000
        })
      })
    },
    resetProductInForm () {
      this.productInForm = initialData().productInForm
    },
    onEditClicked (product) {
      const token = localStorage.getItem('token')
      this.$store.dispatch('fetchProduct', {
        'productId': product.id,
        'token': token
      }).then(() => {
        const products = this.$store.getters.getMainProducts
        const index = products.findIndex((p) => p.id === product.id)
        this.productInForm = {...products[index]}
      })
    }
  },
  computed: mapGetters({
    products: 'getProducts',
    categories: 'getCategories',
    business: 'getBusiness'
  })
}

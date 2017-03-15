import {
  mapGetters, mapActions
} from 'vuex'
import SaveCategoryForm from './save-category'

const initialData = () => {
  return {
    categoryInForm: {
      id: null,
      name: ''
    }
  }
}
export default {
  /* global  localStorage:true */
  components: {
    SaveCategoryForm
  },
  data: initialData,
  created () {
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchCategories', token)
  },
  methods: {
    ...mapActions([
      'saveCategory',
      'deleteCategory'
    ]),
    onFormSave (Category) {
      const token = localStorage.getItem('token')
      this.saveCategory({'category': Category, 'token': token}).then(() => this.resetCategoryInForm())
    },
    onRemoveClicked (categoryid) {
      const token = localStorage.getItem('token')
      this.deleteProduct(categoryid, token).then(() => {
        if (categoryid === this.categoryInForm.id) {
          this.resetProductInForm()
        }
      })
    },
    resetCategoryInForm () {
      this.categoryInForm = initialData().categoryInForm
    },
    onEditClicked (category) {
      this.categoryInForm = { ...category }
    }
  },
  computed: mapGetters({
    categories: 'getCategories'
  })
}

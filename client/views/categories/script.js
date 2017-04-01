import {
  mapGetters, mapActions
} from 'vuex'
import SaveCategoryForm from './save-category/index.vue'

const initialData = () => {
  return {
    categoryInForm: {
      id: null,
      business: '',
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
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchBusiness')
  },
  methods: {
    ...mapActions([
      'saveCategory',
      'deleteCategory'
    ]),
    business_url () {
      return `http://127.0.0.1:8000/api/businesses/${this.business[0].id}/`
    },
    onFormSave (Category) {
      this.saveCategory({'category': {'id': Category.id, 'name': Category.name, 'business': this.business_url()}}).then(() => {
        this.resetCategoryInForm()
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `The Category has been ${Category.id ? 'edited' : 'added'}   sucessfully`,
          type: 'success',
          duration: 5000
        })
      })
    },
    onRemoveClicked (categoryid) {
      this.deleteCategory(categoryid).then(() => {
        if (categoryid === this.categoryInForm.id) {
          this.resetProductInForm()
        }
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `The Category has been deleted sucessfully`,
          type: 'success',
          duration: 5000
        })
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
    categories: 'getCategories',
    business: 'getBusiness'
  })
}

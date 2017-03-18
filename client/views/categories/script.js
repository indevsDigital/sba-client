import {
  mapGetters, mapActions
} from 'vuex'
import SaveCategoryForm from './save-category'

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
    const token = localStorage.getItem('token')
    this.$store.dispatch('fetchCategories', token)
  },
  methods: {
    ...mapActions([
      'saveCategory',
      'deleteCategory'
    ]),
    business () {
      return `http://127.0.0.1:8000/api/businesses/${this.user.business.id}/`
    },
    onFormSave (Category) {
      const token = localStorage.getItem('token')
      this.saveCategory({'category': {'id': Category.id, 'name': Category.name, 'business': this.business()}, 'token': token}).then(() => {
        this.resetCategoryInForm()
        this.$store.dispatch('addToMessageBus', {
          title: 'Success',
          message: `The Category has been Added sucessfully`,
          type: 'success',
          duration: 5000
        })
      })
    },
    onRemoveClicked (categoryid) {
      const token = localStorage.getItem('token')
      this.deleteCategory(categoryid, token).then(() => {
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
    user: 'getUserDetails'
  })
}

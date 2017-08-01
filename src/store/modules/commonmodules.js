import {commonMutations} from '../mutations/commonmutations'
import {commonActions} from '../actions/commonactions'

const common = {
  state: {
    title: '最新干货',
    leftIcon: 'radio_button_checked',
    historyDates: [],
    currentSelectDate: {},
    selectedDate: '',
    SelectedDateGanHuo: {}
  },
  mutations: commonMutations,
  actions: commonActions,
  getters: {
  }
}

export default common

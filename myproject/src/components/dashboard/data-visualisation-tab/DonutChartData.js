import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['积极情感', '负面情感'],
  datasets: [{
    label: '百分比',
    backgroundColor: [palette.info, palette.warning],
    data: [3000, 6000]
  }]
}

import Vue from 'vue'
import SvgIcon from '@/components/svg-icon'

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg/index', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default new Vuex.Store({
	state: {
		biodata: {}
	},
	getters: {
		getBiodata: state => {
			return state.biodata
		}
	},
	mutations: {
		setData (state, data) {
			state.biodata = data
		}
	}	
})

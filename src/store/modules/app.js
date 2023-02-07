import { login as loginApi } from "@/api/login";
import router from '@/router'
import { setTokenTime } from '@/utils/auth'

export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || '',
        sideType: true,
        lang: localStorage.getItem('lang') || '',

    }),
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        changesideType(state) {
            state.sideType = !state.sideType
        },
        changLang(state, lang) {
            state.lang = lang
        }
    },
    actions: {
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo)
                    .then((res) => {
                        console.log(res)
                        commit('setToken', res.token)
                        setTokenTime()
                        router.replace('/')
                        resolve()
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        // 退出
        logout({ commit }) {
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
        }
    }
}
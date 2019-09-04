import { getMemberInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  userInfo:{},
  token:''
}

const mutations = {
  GET_MEMBER_INFO:(state,userInfo)=>{
    state.userInfo = userInfo
  },
  SET_TOKEN:(state,token)=>{
    state.token = token
  }
}

const actions = {
   Login({commit},data){
    
  },
  getUserInfo({commit}){
    getMemberInfo().then(res=>{
      console.log("用户信息",res)
      commit('GET_MEMBER_INFO',res.data)
    })
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

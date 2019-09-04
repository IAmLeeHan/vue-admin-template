import {getMyApp} from '@/api/mine'
const state = {
  enterpriseApp: [],
  hasApp:[],
  shortcutList:[],
  adminApp:[]
}

const mutations = {
  GET_MY_LIST:(state,hasApp)=>{
    state.hasApp = hasApp
  },
  GET_ENTERPRISE_LIST:(state,enterpriseApp)=>{
    state.enterpriseApp = enterpriseApp
  },
  GET_SHORTCUT_LIST:(state,shortcutList) => {
    state.shortcutList = shortcutList
  },
  GET_ADMIN_LIST:(state,adminApp) => {
    state.adminApp = adminApp
  } 
}

const actions = {
  //*获取应用列表
  getAppList({commit},data){
    data = {
      orgId:"614517912878841856",
      keyWord:'',
      appType:''
    }
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
      });
    getMyApp(formData).then((res)=>{
      console.log(res,"应用列表")
      commit('GET_MY_LIST',res.data.myAppList)
      commit('GET_ENTERPRISE_LIST',res.data.orgAppList)
      commit('GET_SHORTCUT_LIST',res.data.shortcutList)
      commit('GET_ADMIN_LIST',res.data.myAppList)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

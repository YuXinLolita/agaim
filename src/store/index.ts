import { createStore } from 'vuex'
export default createStore({
  state: {
    list : [
      {
          title: "吃饭",
          complete: false,
      } ,
      {
          title: "睡觉",
          complete: false,
      },
      {
          title: "敲代码",
          complete: true,
      }
   ]
  },
  mutations: {
    add (state, payload) {
      state.list.push(payload);
    },
    //过滤未完成
    clear (state,payload) {
      state.list=(payload);
    },
    //过滤已完成失败，目前无法通过此方法删除元素
      // clear (state,payload) {
      //   state.list.splice(payload,1);
      // },
    // del (state, payload) {
    //   state.list.splice (payload,1);
    // }
  },
  actions: {
  },
  modules: {
  }
})


<template>
  <div>
    我是father父组件
    <child :msg="msg" @sendFn="sendFn"></child>
    <div>
      我是子组件传过来的值：{{subTrans}}
    </div>
  </div>
</template>
<script>
import { defineComponent,reactive } from 'vue'
import child from './child'
export default defineComponent({
  name:'father',
  components:{
    child
  },
  setup() {
    let msg = '我是father向sub传的值'
    let subTrans = reactive({})
    let sendFn= (val)=>{
      console.log(val)
      subTrans.value = val
    }
    return{
      msg,
      sendFn,
      subTrans
    }
  },
})
</script>

// 版权声明：本文为CSDN博主「智慧2021」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_38687522/article/details/117695657


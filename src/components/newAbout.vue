<template>
  <div >
    <h1>我要将数据传给父组件</h1>
    <button @click="trans">传递数据</button>
    {{fathervalue}}
    <!-- {{newfathervalue}} -->
    <button @click="home">回到首页</button>
    
  </div>
</template>

<script>
import { defineComponent,  ref ,onMounted} from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
  name:"newChild",
  props:{
    fathervalue:{
      type:String,
      required:true,
      default:"",
    },
  },
  emits:["send"],
  setup(props, ctx) {

      let router = useRouter();

      let home = () => {
          router.push({
              name:"Home",
              query:{ 
                num: num.value,
                obj:JSON.stringify(obj.value),

              
              }
          })
      }
    
    let num = ref(500);
    let obj = ref({
      "student": "John",
      "age": 24,
    })
    //let newfathervalue = props.fathervalue;
   // 一直提示错误，不知道为什么

    let childvalue = ref("我是子组件的数据！");
        // let send = () => {
    //   ctx.emit("send",childvalue.value);
    // }
    let trans = () => {
        ctx.emit("send",childvalue.value);
    }
    onMounted(() => {
      ctx.emit("send",childvalue.value);
    })
    console.log(props.fathervalue);
    return {
      childvalue,
      trans,
      home,
      num,
      obj
     // newfathervalue
      
    }
  },
})
</script>
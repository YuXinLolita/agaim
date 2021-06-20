<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <newAbout :fathervalue="fathervalue" @send="send"></newAbout>
    我是子组件数据：{{newdata}}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import newAbout from "@/components/newAbout.vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'newMain',
  components: {
    // HelloWorld,
    newAbout
  },
  setup() {
    let fathervalue = ref("我是父组件数据！");
    let newdata = ref("");

    // let send = (val) => {
    //     newdata.value = val;  
    // }

    // let add = () => {
    //   newdata.value = val;
    // }
    let send = (val) => {
      newdata.value = val;
    }
    return {
      fathervalue,
      newdata,
      send
      
    }
  }
});
</script>
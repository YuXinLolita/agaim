<template>
    <div>
        <div v-for="(item3,index5) in list" :key="index5">
            <input type="checkbox" v-model="item3.complete">
            {{item3.title}}
            <button @click="del(item3,index5)">删除</button>
            
            
            
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
//import { useStore } from "vuex";

export default defineComponent({
    name:"Halloworld",
    props:{
        list:{
            type:Array,
            required:true,
        }
    },
    emits:["del"],
    setup(props,ctx) {
        
        let del = (item3,index5) => {
            
            ctx.emit("del",item3,index5)
        }
        

        return {
            del
        }
    }
    
})
</script>

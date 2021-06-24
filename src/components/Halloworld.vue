<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
            <button @click="del(item,index)">删除</button>
            
            
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
        
        let del = (item,index) => {
            ctx.emit("del",index)
        }
        

        return {
            del
        }
    }
    
})
</script>

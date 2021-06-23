<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <input type="checkbox" v-model="item.complete">
            {{item.title}}
            
            
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:"Halloworld",
    props:{
        list:{
            type:Array,
            required:true,
        }
    },
    setup() {
        

        return {
            
        }
    }
    
})
</script>

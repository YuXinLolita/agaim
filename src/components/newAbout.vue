<template>
    <div>
        <div v-if="list.length >0">
            已完成{{complete}},总共{{list.length}}
            <button v-if="complete > 0" @click="clear">清除已完成</button>
        </div>
        <div v-else>
            暂无任务
        </div>
    </div>
</template>
<script>
import { defineComponent ,computed } from "vue"

export default defineComponent({
    name:"newAbout",
    props:{
        list:{
            type:Array,
            required:true,
        }
    },
    emits:["clear"],
    setup(props , ctx) {
        // let complete = computed( () => {
        //     return
        // })
        let complete = computed( () => {
            let arr = props.list.filter((item) => {
                return item.complete
            })
            return arr.length
        })
        // let clear =  () => { 
        //     let arr = props.list.filter(
        //     (item) => {return item.complete === false});
        //     ctx.emit("clear",arr);
        // }
        let clear = () => {
            let arr = props.list.filter( item => {
                return item.complete === false
            })
            ctx.emit("clear",arr);
           // console.log("clear");
        }
        return {
            clear,
            complete
        }
    }
})
</script>
    
<template>
    <div class="main">
        <div><input type="text" placeholder="请输入任务名称" v-model="newdata" @keydown.enter="enter"></div>
        <div>
            <halloworld :list="list" @del="del" ></halloworld>
            <newAbout :list="list" @clear="clear"></newAbout>

        </div>
    </div>
</template>

<script>
import { defineComponent , ref, computed, onMounted} from 'vue'
import { useStore } from "vuex";
import Halloworld from "../components/Halloworld.vue";
import newAbout from "../components/newAbout.vue";

export default defineComponent({
    name:"Main",
    components: {
        Halloworld,
        newAbout
    },
    // onMounted:{
    //     test = () => {
    //         let flag = true;
    //              list.value.map((item)=> {
    //         if (item.title === newdata.value){
    //              flag =false;
    //         }
    //         if(flag ===false) {
    //         alert("任务已存在！");
    //     }
    //        })
    //     }
    // }, //onmonted 如何创建方法
    setup() {
        let store = useStore();
        let list = computed( () => { return store.state.list })
        let enter = () => {
            let flag = true;
                 list.value.map((item)=> {
            if (item.title === newdata.value){
                 flag =false;
            }
            
           })
           if(flag ===false) {
            alert("任务已存在！");
        }
            if(flag) {
                store.commit("add",{
                title:newdata.value,
                //complete:false,
                complete:false
            });
            newdata.value = "";
            }
        }
           
        // let test = () => {
                
        // }
        // let test = () => {
        //     console.log("在测试tes方法");
        // }
        // let enter = () => {
        //      store.commit("add",{
        //         title:newdata.value,
        //         //complete:false,
        //         complete:false
        // // 
        
        let newdata = ref("");
        let clear = (val) => {
            store.commit("clear",val);
        }
            let del = (val) => {
            store.commit("del",val);
        }

        return {
            newdata,
            enter,
            list,
            store,
            clear,
            del,
            
            

        }
    },
})
</script>   
<style  scoped>
template{
    background-image: url(../assets/littleGirl.jpg);
    background-size: contain  ;
    /* background-size: contain; */
}
</style>
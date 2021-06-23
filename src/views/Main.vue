<template>
    <div>
        <div><input type="text" placeholder="请输入任务名称" v-model="value" @keydown.enter="enter"></div>
        <div>
            <halloworld :list="list"></halloworld>
            <newAboute></newAboute>
        </div>
    </div>
</template>

<script>
import { defineComponent , ref, computed} from 'vue'
import { useStore } from "vuex";
import Halloworld from "../components/Halloworld.vue";
import newAboute from "../components/newAbout.vue";

export default defineComponent({
    name:"Main",
    components: {
        Halloworld,
        newAboute
    },
    setup() {
        let store = useStore();
        let list = computed( () => { return store.state.list })
        let enter = () => {
            store.commit("add",{
                title:value.value,
                complete:false,
            });
            value.value = "";
        }
           
        let value = ref("");
       

        return {
            value,
            enter,
            list,
            store,

        }
    },
})
</script>   
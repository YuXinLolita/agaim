<template>
  <div>测试</div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    let route = useRoute();
    console.log(route.query);

return {
  route
}
  },
})
</script>

<template>
  <div ref="root"></div>
</template>

<script>
import {
  reactive,
  computed,
  ref,
  toRefs,
  onMounted
} from "@vue/composition-api";
export default {
  setup() {
    const root = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(root.value); // <div/>
    });

    // 应该总是将 ref 存放到 reactive 对象中
    const m = reactive({
      count: ref(0)
    });
    console.log(m.count === 0);
    const arr = reactive({
      list: [m]
    });
    console.log(arr.list[0].count === 0);
    return {
      root
    };
  }
};
</script>

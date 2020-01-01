<template>
    <div ref="root"></div>
</template>

<script>
    import { reactive, computed, ref, toRefs, onMounted } from '@vue/composition-api'
    export default {
        setup() {
            const root = ref(null);

            onMounted(() => {
                // the DOM element will be assigned to the ref after initial render
                console.log(root.value); // <div/>
            });

            return {
                root,
            };
        },
    };
</script>
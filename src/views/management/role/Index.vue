<template>
    <div>
        <el-container>
            <el-aside class="content-aside">Aside</el-aside>
            <el-main class="content-main">Main</el-main>
        </el-container>
    </div>
</template>
<script>
    import {ref, reactive} from "@vue/composition-api";

    export default {
        setup() {}
    }
</script>
<style lang="scss" scoped>
    .content-aside {
        display: block;
        width: 200px;
        border-right: 1px red;
    }
    .content-main {
        display: block;
        width: 200px;
    }
</style>
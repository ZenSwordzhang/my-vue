<template>
    <div id="header-wrap">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div class="title"><label>账户管理->权限管理->工作组管理</label></div>
    </div>
</template>
<style lang="scss" scoped>
    #header-wrap {
        position: fixed;
        top: 0;
        right: 0;
        left: 205px;
    }
    .title {
        height: 42px;
        border-bottom: 1px solid;
        line-height: 42px;
        label {
            font-size: 16px;
            font-weight: bold;
        }
    }
</style>
<script>
    export default {
        setup() {
            const handleSelect = (key, keyPath) => {
                console.log(key, keyPath);
            };
            return {
                activeIndex: '1',
                activeIndex2: '1',
                handleSelect
            };
        }
    }
</script>
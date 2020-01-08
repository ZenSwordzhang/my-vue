<template>
    <div id="nav-wrap">
        <div id="nav-title"><label>工作组管理</label></div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">账户管理</span>
                </template>
                <el-menu-item-group index="1-1">
                    <span slot="title">账号管理</span>
                    <el-menu-item index="1-1-1">登录页面</el-menu-item>
                    <el-menu-item index="1-1-2">账户注册</el-menu-item>
                    <el-menu-item index="1-1-3">加入组织申请</el-menu-item>
                    <el-menu-item index="1-1-4">个人账号信息</el-menu-item>
                    <el-menu-item index="1-1-5">忘记密码</el-menu-item>
                    <el-menu-item index="1-1-6">账号管理</el-menu-item>
                    <el-menu-item index="1-1-7">访问历史</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group index="1-2">
                    <span slot="title">用户管理</span>
                    <el-menu-item index="1-2-1">用户管理</el-menu-item>
                    <el-menu-item index="1-2-2">用户信息管理</el-menu-item>
                    <el-menu-item index="1-2-3">加入组织审核</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-3">
                    <span slot="title">权限管理</span>
                    <el-menu-item index="1-3-1">工作组管理</el-menu-item>
                    <el-menu-item index="1-3-2">角色管理</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">产品资料管理</span>
                </template>
                <el-menu-item-group index="2-1">
                    <span slot="title">产品结构管理</span>
                    <el-menu-item index="2-1-1">产品模板管理</el-menu-item>
                    <el-menu-item index="2-1-2">编码规则管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group index="2-2">
                    <span slot="title">品号信息管理</span>
                    <el-menu-item index="2-2-1">用户管理</el-menu-item>
                    <el-menu-item index="2-2-2">正式品号管理</el-menu-item>
                    <el-menu-item index="2-2-3">工程品号管理</el-menu-item>
                    <el-menu-item index="2-2-4">BOM审批</el-menu-item>
                    <el-menu-item index="2-2-5">品号重构管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style lang="scss" scoped>
    @import "styles/content/common.scss";
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: $navWidth;
        min-height: 400px;
    }
    #nav-wrap {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: $navWidth;
        border-right: 1px solid;
    }
    #nav-title {
        height: 61px;
        width: $navWidth;
        text-align: center;
        line-height: 61px;
        border-bottom: 1px solid;
        label {
            font-size: 16px;
            font-weight: bold;
        }
    }
</style>

<script>
    import {} from "@vue/composition-api";
    export default {
        name: "contentNav",
        setup() {
            const handleOpen = (key, keyPath) => {
                console.log(key, keyPath);
            };
            const handleClose = (key, keyPath) => {
                console.log(key, keyPath);
            };
            return {
                isCollapse: true,
                handleOpen,
                handleClose
            };
        }
    }
</script>
<template>
    <div id="main-wrap">
        <el-row class="content-left">
            <el-col :span="5" class="content-aside">
                <div class="grid-content bg-purple">
                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <div slot="append">
                            <el-select v-model="select" placeholder="请选择">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                            <el-button icon="el-icon-search" class="el-search"></el-button>
                        </div>
                    </el-input>
                </div>
                <div class="role-menu">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </div>
            </el-col>
            <el-col :span="18" class="content-main">
                <div class="role-info-upside">
                    <el-row class="role-title">角色信息：</el-row>
                    <el-row class="role-title">
                        <el-col :span="4" class="content-aside">角色编码：xxxx</el-col>
                        <el-col :span="4" class="content-aside">角色名称：xxxx</el-col>
                        <el-col :span="4" class="content-aside">创建时间：xxxx</el-col>
                        <el-col :span="4" class="content-aside">创建者：xxxx</el-col>
                        <el-col :span="4" class="content-aside">状态：正常/待删除</el-col>
                        <el-col :span="4" class="content-aside">添加用户</el-col>
                    </el-row>
                    <el-row class="role-table">
                        <template>
                            <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%">
                                <el-table-column
                                        fixed
                                        type="selection"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        type="index"
                                        label="序号"
                                        width="80">
                                </el-table-column>
                                <el-table-column
                                        prop="username"
                                        label="用户名称"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="role"
                                        label="归属角色"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="permission"
                                        label="已有权限">
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-row>
                </div>
                <div class="permission-info-bottom">
                    <el-row class="permission-title">角色权限：</el-row>
                    <el-row class="permission-title">
                        <el-button type="primary" round>分配权限</el-button>
                    </el-row>
                    <el-row class="role-title">角色信息：</el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {ref, reactive} from "@vue/composition-api";

    export default {
        setup() {
            const input3 = ref("");
            const select = ref("");
            const tableData = reactive([{
                id: 1,
                username: '王小虎',
                role: '财务',
                permission: '审计'
            }, {
                id: 2,
                username: '王小虎',
                role: '财务',
                permission: '审计'
            }, {
                username: '王小虎',
                role: '财务',
                permission: '审计'

            }]);
            const data = reactive([{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }]);
            const defaultProps = reactive({
                children: 'children',
                label: 'label'
            });
            const handleNodeClick = data => {
                console.log(data);
            };
            return {
                input3, select, tableData, data, defaultProps, handleNodeClick
            };
        }
    }
</script>
<style lang="scss" scoped>

    #main-wrap {
        position: absolute;
        left: 15px;
        top: 10px;
        right: 0;
        bottom: 0;

        .content-left {
            height: 90%;
        }

        .content-aside, .role-menu, .content-main {
            height: 100%;
        }

        .role-menu {
            background-color: #D3DCE6;
            .el-tree {
                background-color: #D3DCE6;
            }
        }

        .input-with-select {
            width: 85%;
        }

        .el-search {
            position: absolute;
            left: 65px;
            background-color: #337AB7;
        }

        .operation-button {
            padding-top: 15px;

            .delete-button {
                padding-left: 10px;
            }
        }

        .content-main {
            padding-left: 15px;

            .role-info-upside {
                height: 300px;

                .role-title {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    height: 40px;
                }

                .role-table {
                    height: 100%;
                }
            }

            .permission-info-bottom {
                padding-top: 20px;
                height: 65%;

                .permission-title {
                    padding-top: 10px;
                    padding-bottom: 10px;
                    height: 55px;

                    .el-button {
                        float: right;
                        margin-top: 0;
                        margin-right: 20px;
                    }
                }
            }
        }
    }
</style>
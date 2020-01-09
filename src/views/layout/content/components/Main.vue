<template>
    <div id="main-wrap">
        <div class="content">
            <div class="menu-content">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <div style="margin-top: 15px;">
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
                        </div>
                    </el-col>
                    <el-col :span="16" class="operation-button">
                        <div class="grid-content bg-purple">
                            <el-row>
                                <el-button type="success" @click="dialogFormVisible = true">新增</el-button>
                                <el-button type="primary">修改</el-button>
                                <el-button type="primary">分配权限</el-button>
                                <span class="delete-button">
                                    <el-popconfirm
                                            confirmButtonText='好的'
                                            cancelButtonText='不用了'
                                            icon="el-icon-info"
                                            iconColor="red"
                                            title="这是一段内容确定删除吗？"
                                    >
                                        <el-button type="danger" slot="reference">删除</el-button>
                                    </el-popconfirm>
                                </span>
                            </el-row>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="content-creation">
                <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                    <el-form :model="formData">
                        <el-form-item label="活动名称" :label-width="formLabelWidth">
                            <el-input v-model="formData.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域" :label-width="formLabelWidth">
                            <el-select v-model="formData.region" placeholder="请选择活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
            <div class="main-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import {ref, reactive} from "@vue/composition-api";
    export default {
        name: "contentMain",
        setup() {
            const dialogFormVisible = ref(false);
            const formData = ()=> reactive([{
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            }]);
            const input3 = ref("");
            const select = ref("");
            const formLabelWidth = ref("120px");
            return {
                input3, select, dialogFormVisible, formData, formLabelWidth
            };
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "styles/content/common.scss";

    #main-wrap {
        position: absolute;
        left: $navWidth;
        top: $headerHeight;
        right: 0;
        bottom: 0;

        .content {
            padding: 0 15px;

            .menu-content {
                padding: 15px;

                .input-with-select {
                    width: 60%;
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
            }

            .main-content {
                padding: 15px;
            }
        }
    }
</style>

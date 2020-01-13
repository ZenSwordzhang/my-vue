<template>
    <div id="main-wrap">
        <el-row>
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
                <div class="role-menu">abc</div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple-light"></div>
                <div class="grid-content bg-purple-light">ccc</div>
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
            return {
                input3, select
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

        .el-row, .content-aside, .role-menu {
            height: 100%;
        }
        .role-menu {
            background-color: #D3DCE6;
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
        .grid-content .bg-purple-light {
            height: 50%;
        }
    }
</style>
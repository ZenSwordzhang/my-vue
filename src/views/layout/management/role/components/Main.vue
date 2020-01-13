<template>
    <div id="main-wrap">
        <div class="content">
           <!-- <div class="menu-content">
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
                </el-row>
            </div>-->
            <div class="main-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
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

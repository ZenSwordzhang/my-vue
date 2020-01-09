<template>
    <div id="main-wrap">
        <div class="content">
          <div class="menu-content">
            <el-row :gutter="20">
              <el-col :span="8"><div class="grid-content bg-purple">
                <div style="margin-top: 15px;">
                  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-select v-model="select" slot="append" placeholder="请选择">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </div></el-col>
              <el-col :span="16"><div class="grid-content bg-purple">
                <el-row>
                  <el-button>默认按钮</el-button>
                  <el-button type="primary">主要按钮</el-button>
                  <el-button type="success">成功按钮</el-button>
                  <el-button type="info">信息按钮</el-button>
                  <el-button type="warning">警告按钮</el-button>
                  <el-button type="danger">危险按钮</el-button>
                </el-row>
              </div></el-col>
            </el-row>
          </div>
            <div class="main-content">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "contentMain",
        setup() {
          return {
            input3: '',
            select: ''
          }
        }
    };
</script>
<style lang="scss" scoped>
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
        }
        .main-content {
          padding: 15px;
        }
      }
    }

</style>

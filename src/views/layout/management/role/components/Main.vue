<template>
    <div id="main-wrap">
        <div class="content">
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

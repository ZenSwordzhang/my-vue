<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                @selection-change="selectionChange"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column
                    fixed
                    type="selection"
                    width="80">
            </el-table-column>
            <el-table-column
                    type="index"
                    label="序号"
                    width="80"
                    :index="indexMethod">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="ID"
                    width="80">
                <template slot-scope="scope">
                    <el-button type="text" @click="dialogTableVisible = true">{{scope.row.id}}</el-button>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    sortable
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="省份"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="市区"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="用户详情" :visible.sync="dialogTableVisible">
            <el-table
                    :data="tableData1"
                    style="width: 100%"
                    row-key="id"
                    border
                    lazy
                    :load="load"
                    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
    import {ref, reactive} from "@vue/composition-api";

    export default {
        setup() {
            const dialogTableVisible = ref(false);
            const tableData = reactive([{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333,
                children: [{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1515 弄',
                    zip: 200333
                }]
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1514 弄',
                zip: 200333
            }]);
            const tableData1 = reactive([{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                hasChildren: true
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]);
            const load = (tree, treeNode, resolve) => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ])
                }, 1000)
            };
            const handleEdit = (index, row) => {
                console.log(index, row);
            };
            const handleDelete = (index, row) => {
                console.log(index, row);
            };
            // 自定义序号格式
            const indexMethod = index=> {
                return index * 1;
            };
            let checkBoxData;
            const selectionChange = val=> {
                checkBoxData = val;
            };
            return {
                tableData, tableData1, load, handleEdit, handleDelete, indexMethod, selectionChange, dialogTableVisible
            };
        }
    };
</script>
<style lang="scss" scoped></style>
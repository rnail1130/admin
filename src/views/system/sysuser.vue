<template>
  <div class="com-container">
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content">
            <div class="title">
              角色列表
            </div>
            <div>
              <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :border="true"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <div class="footers">
      <div class="left-set">
        <el-card shadow="hover">
          <el-checkbox v-model="checked">全选</el-checkbox>
        </el-card>
        <el-card shadow="hover">
          <el-checkbox v-model="checked">反选</el-checkbox>
        </el-card>
          <el-select v-model="value" placeholder="批量操作">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </div>
      <div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'sysuser',
        components: {},
        data() {
          return {
            options: [{
              value: '选项1',
              label: '批量启用'
            }, {
              value: '选项2',
              label: '批量禁用'
            }, {
              value: '选项3',
              label: '批量删除'
            }],
            value: ' ',
            checked: true,
            tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            multipleSelection: []
          }
        },
      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row)
            })
          } else {
            this.$refs.multipleTable.clearSelection()
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val
        }
      }

    }
</script>

<style lang="scss" scoped>
  .com-container{
    background-color: white;
    padding: 15px;
    justify-content: space-between;
    .grid-content{
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .footers{
    height: 50px;
    width: 100%;
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-set{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .el-card{
        margin-left: 4px;
      }
      .el-select{
        margin-left: 4px;
      }
    }
  }

</style>

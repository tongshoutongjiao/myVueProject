<template>
  <div>
      <el-form :inline="true"  :model="filters">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="请输入组织名称查询字段" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  v-on:click="getOrganizeItem" class="defaultBtn" icon="el-icon-search">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button  @click="handleAdd" class="defaultBtn" icon="el-icon-zoom-in">新建</el-button>
          </el-form-item>
      </el-form>

      <!-- 列表功能 -->
      <el-table :data="defaultData" style="width: 100%" :row-class-name="tableRowClassName">
            <template v-for="item in classicName">
                <template v-if="item.name!='operate'">
                   <el-table-column :prop="item.name" :label="item.text" :key='item.id'></el-table-column>
                </template>
                <template v-else>
                  <el-table-column :prop="item.name" :label="item.text" :key='item.id'>
                     <el-link type="danger"  :underline='false'>删除</el-link>
                    <el-link type="info"  @click="centerDialogVisible = true" :underline='false'>修改</el-link>
                    <el-link type="primary" :underline='false'>查看</el-link>
                  </el-table-column>
                </template>
            </template>

      </el-table>

      <!-- 分页 -->
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1,2,3,4]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4">
    </el-pagination>

    <!-- dialog -->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="70%"
      center>

        <span>需要注意的是内容是默认不居中的</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>



  </div>
</template>
<script>
   import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: "Manage",
  props: ["defaultData","classicName"],
  data() {
    return {
     
      
      filters: {
        name: ""
      },
      centerDialogVisible:false,
      selectKey:'',
      currentPage4:4,
      defaultProps: {
          children: 'children',
          label: 'label'
      }
    };
  },
   computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'getSelectKey',
      'getQueryData'
      // ...
    ])
    },
    watch: {
      selectKey(val){
       this.$store.state.selectKey
      }
       
    },
    mounted () {
      console.log('数据')
      console.log(this.defaultData)
    },
  methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      getOrganizationName(val){
          console.log('查询机构名称',val);
        
      },
      getOrganizeItem(){
        console.log('查询机构字段')
          console.log( this.$store.state.selectKey)
      },
      handleAdd(){
        console.log('新增机构名称')

      },
       handleNodeClick(data) {
        console.log(data);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
      
  }
};
</script>
<style scoped lang='less'>
.container{
     height: 100%;
     background: #e6e6e6;
     .defaultBtn{
      background-color: #019b63;
      border-color: #019b63;
      color: #fff;

     }
    .part-left{
        box-sizing: border-box;
        padding: 20px;
        margin-right: 20px;
        background: #fff;
    }
    .part-right{
        box-sizing: border-box;
        padding: 20px;
        background: #fff;
    }
    .el-pagination{
      margin-top: 20px;
    }
    
}







/* table */
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>



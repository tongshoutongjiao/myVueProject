<template>
  <div>
      <el-form :inline="true"  :model="filters">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="请输入组织名称查询字段" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  v-on:click="getOrganizeItem" class="defaultBtn">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button  @click="handleAdd" class="defaultBtn">新增</el-button>
          </el-form-item>
      </el-form>

      <!-- 列表功能 -->
      <el-table :data="data" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="组织编号" width="100"></el-table-column>
            <el-table-column prop="name" label="组织名称" width="100"></el-table-column>
            <el-table-column prop="address" label="创建时间"></el-table-column>
            <el-table-column prop="address" label="操作">
              <template >
                <el-button type="danger" size="small">删除</el-button>
                <el-button type="primary" size="small" >修改</el-button>
                <el-button type="warning" size="small" >查看</el-button>
              </template>
            </el-table-column>
      </el-table>
  </div>
</template>
<script>
   import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
export default {
  name: "Manage",
  props: ["data"],
  data() {
    return {
      filters: {
        name: ""
      },
      selectKey:'',
      defaultProps: {
          children: 'children',
          label: 'label'
        },
      treeData: [{
          label: '中国人寿保险股份有限公司',
          children: [{
            label: '董事会秘书局',
            children: [{
              label: '三级 1-1-1'
            }]
          },{
              label: '战略与市场部',
              children:[
                {
                  label:'资源整合处'
                }
              ]

          },{
            label:'人力资源部',
            children:[{
              label:'绩效管理处'
            }]
          }]
        }],
      tableData: [{
          date: '100000',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
    };
  },
   computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'getSelectKey'
      // ...
    ])
    },
    watch: {
      selectKey(val){
       this.$store.state.selectKey
      }
       
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
    
}







/* table */
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>



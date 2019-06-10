<template>
    <div>
        
      <el-container class="container">
        <el-col :span="8" class="part-left">
           <Query :data='queryData'/>
        </el-col>

        <el-col :span="16" class="part-right">
          <!-- 查詢功能 -->
          <Manage :data='tableData'/>
        </el-col>
      </el-container>
        
        
    </div>
    
    
</template>
<script>
import Manage from '../../components/manage.vue';
import Query from '../../components/query.vue'
export default {
    name:'Self',
    data () {
        return {
            msg:'厂商管理',
            queryData: [{
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

            
        }
    },
    components: {
        Query,
        Manage
    }
   
}
</script>
<style scoped lang='less'>
.container{
     height: 100%;
     background: #e6e6e6;
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


</style>



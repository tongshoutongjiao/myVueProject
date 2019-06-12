<template>
    <div>
        
      <el-container class="container">
        <el-col :span="8" class="part-left">
           <Query :data='queryData'/>
        </el-col>

        <el-col :span="16" class="part-right">
          <!-- 查詢功能 -->
          <Manage :defaultData='tableData' :classicName='classicName'/>
        </el-col>
      </el-container>
        
        
    </div>
    
    
</template>
<script>
import {getQueryData,getPersonalData} from '../../api/api'
import Manage from '../../components/manage.vue';
import Query from '../../components/query.vue'
export default {
    name:'Self',
    data () {
        return {
            msg:'厂商管理',
            queryData: [],
            tableData: [],
            classicName:[{
              id:0,
              text:'人员编号',
               name:'number'
            },{
               id:1,
               text:'邮箱',
               name:'mail'
            },{
              id:2,
              text:'手机号',
              name:'phone'
            },{
              id:3,
              text:'部门名称',
              name:'partName'
               },{
                 id:4,
                 text:'修改时间',
                 name:'fixTime'
               },{
                 id:5,
                 text:'操作',
                 name:'operate'
               }]
        }
    },
    mounted () {
       let that=this;
       getQueryData({name:'xxx'}).then(res=>{
           console.log(res)
           that.queryData=res.data;
       },error=>{
           throw new Error('请求错误')
       });
       getPersonalData({test:'xxx'}).then(res=>{
         console.log('res.data');
         console.log(res.data)
           that.tableData=res.data;
       },err=>{
           throw new Error('数据错误，请重新再试')
       })
      
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



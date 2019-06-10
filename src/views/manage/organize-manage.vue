<template>
<div>
    <el-container class="container">
        <el-col :span='8' class="part-left">
            <Query :data='queryData'/>
        </el-col>
        <el-col :span='16' class="part-right">
            <Manage :data='tableData'/>
        </el-col>

    </el-container>
</div>
    
</template>
<script>
import {getQueryData} from '../../api/api'
import Manage from '../../components/manage.vue';
import Query from '../../components/query.vue';
export default {
    name:'Organize',
    data () {
        return {
            msg:'厂商管理',
            queryData: [],
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
    mounted () {
        let that=this;
       getQueryData({name:'xxx'}).then(res=>{
           console.log(res)
           that.queryData=res.data;
       },error=>{
           throw new Error('请求错误')
       });
       console.log(this.queryData)
    } ,
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




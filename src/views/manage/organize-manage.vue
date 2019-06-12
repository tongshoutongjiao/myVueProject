<template>
<div>
    <el-container class="container">
        <el-col :span='8' class="part-left">
            <Query :data='queryData'/>
        </el-col>
        <el-col :span='16' class="part-right">
            <Manage :defaultData='tableData' :classicName='classicName' />
        </el-col>

    </el-container>
</div>
    
</template>
<script>
import {getQueryData,getTableData} from '../../api/api'
import Manage from '../../components/manage.vue';
import Query from '../../components/query.vue';
export default {
    name:'Organize',
    data () {
        return {
            msg:'厂商管理',
            queryData: [],
            classicName:[
                {
                    name:'number',
                    text:'编号',
                    id:0
                 },{
                     name:'name',
                     text:'组织名称',
                     id:1
                 },{
                     name:'date',
                     text:'创建时间',
                     id:3
                 },{
                     name:'operate',
                     text:'操作',
                     id:4
                 }

            ] ,
        tableData: []

            
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
       getTableData({test:'xxx'}).then(res=>{
           console.log(res.data);
           that.tableData=res.data;
       },err=>{
           throw new Error('数据错误，请重新再试')
       })
       
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




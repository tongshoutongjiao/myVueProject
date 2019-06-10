<template>
        <el-form :inline="true">
            <el-form-item>
              <el-input  placeholder="请输入组织名称" v-model='filterText' ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="getOrganizationName" class="defaultBtn">查询</el-button>
            </el-form-item>
            <el-tree :data="data" class="filter-tree" :filter-node-method="filterNode" :props="defaultProps" @node-click="handleNodeClick" ref="tree"></el-tree>
          </el-form>
</template>
<script>
import {findOrganizeNameInData} from '../utils/index'
export default {
    name:'Query',
    props:['data'],
    data () {
        return {
          filterText:'',
           defaultProps: {
              children: 'children',
              label: 'label'
            }
            
        }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      getOrganizationName(){
       
        let data= findOrganizeNameInData(this.val,this.data);
         console.log('获取机构名称');
         console.log(data);
      },
      handleNodeClick(...params){

        // 选中当前参数,传递到vuex中
         console.log(params[0].label);
           this.$store.dispatch("setSelectKey",params[0].label);
      },
       filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    }
}
</script>
<style scoped>
.defaultBtn{
      background-color: #019b63;
      border-color: #019b63;
      color: #fff;
     }

</style>



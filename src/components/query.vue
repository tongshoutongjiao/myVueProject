<template>
        <el-form :inline="true">
            <el-form-item>
              <el-input  placeholder="请输入组织名称" v-model='filterText' ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="getOrganizationName" class="defaultBtn" icon="el-icon-search">搜索</el-button>
            </el-form-item>
            <el-tree :data="getQueryData" class="filter-tree" :filter-node-method="filterNode" :props="defaultProps" @node-click="handleNodeClick" ref="tree"></el-tree>
          </el-form>
</template>
<script>

import {getOriginazationById} from '../api/api'
import {findOrganizeNameInData} from '../utils/index'
 import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name:'Query',
    props:['data'],
    data () {
        return {
          filterText:'',
          queryData:[],
           defaultProps: {
              children: 'children',
              label: 'label'
            }
            
        }
    },
    
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      },
      queryData(){
        console.log('xxx')
      }
    },
    computed: {
        ...mapGetters([
      'getQueryData'
    ])
      
    },

    methods: {
      getOrganizationName(...params){
       
        let data= findOrganizeNameInData(this.val,this.data);
         console.log('获取机构名称');      
         console.log(data);
      },

      handleNodeClick(...params){

        // 选中当前参数,传递到vuex中
        //  获取当前点击机构的信息，同时将返回的数据，做处理，然后请求接口，获取最新数据，
        console.log(params)
        let newData=getOriginazationById(params[0]);
          console.log(params[0].label);

          //  此时调用vuex 重新获取,并将请求回来的数据重新展示出来 
            // this.$store.dispatch("setSelectKey",params[0].label);
            this.$store.dispatch('setQueryData',newData);
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



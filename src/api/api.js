import axios from 'axios';

let base='';
let baseUrl = 'http://10.18.13.119:8289';

// axios.defaults.baseURL = baseUrl;
//  登录流程
export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data,err=> 
    {console.log('error'); }); };
export const getUserList=params=>{
    return axios.get(`${base}/user/list`,{params:params});
};
export const getUserListPage=params=>{
    return axios.get(`${base}/user/listpage`,{params:params});
}
export const removeUser=params=>{
    console.log(params);
    return axios.get(`${base}/user/remove`,{params:params});
}
export const batchRemoveUser=params=>{
    return axios.get(`${base}/user/batchremove`,{params:params})
}
export const editUser=params=>{
    return axios.get(`${base}/user/edit`,{params:params})
}
export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };





//  自定义

export const getEmpByEmpId=params=>{
    console.log('测试测试')
    return axios.get(`${baseUrl}/getEmpByEmpId`,params).then(res=>res.data,err=>{console.log(err)})
}

export const LogInByUserInfo=params=>{
    return axios.post(`${baseUrl}/orgtree/login`,params).then(res.data,err=>{console.log(err)})
}

export const getCodeImage=params=>{
    return axios.get(`${baseUrl}/code/image`,params).then(res=>  res.config.url,err=>{console.log(err)})
}

export const getQueryData=params=>{
    console.log('获取查询到的数据');
    return axios.get(`${base}/user/getQueryData`,params).then(res=>{
      return  res.data;
    },err=>{console.log(err)})
}

export const getTableData=params=>{
    console.log('获取表格数据');
    return axios.get(`${base}/user/getTableData`,params).then(res=>{
        return  res.data;
      },err=>{console.log(err)})
}

export const getPersonalData=params=>{
    console.log('获取表格数据');
    return axios.get(`${base}/user/personalData`,params).then(res=>{
        console.log('res');
        console.log(res);
        return  res.data;
      },err=>{console.log(err)})
}

export const getOriginazationById=params=>{
    console.log('根据当前id,获取数据');
    return [{
        id:12,
        label:'测试',
        children:[
            {id:'222',
            label:'测试2'}
        ]
     }]
}






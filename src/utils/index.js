export const findOrganizeNameInData=(name,data)=>{
   return findName(name,data)
}
export const findName=(name,data)=>{
    for(let i=0;i<data.length;i++){
        let curData=data[i];
        if(curData['label']===name){ 
            console.log(curData['label']===name,name)
            return name;
        }else{
            return  curData['children']&& typeof curData['children']==='object'&& findName(name,curData['children'])  
        }
    }
}
import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443176063,4021563566&fm=27&gp=0.jpg',
    name: '赵海龙'
  }
];

const queryData=[{
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
}];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users,queryData};

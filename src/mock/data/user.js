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
  id:1,
  children: [{
    label: '董事会秘书局',
    id:2,

    children: [{
      label: '三级 1-1-1',
      id:3
    }]
  },{
      label: '战略与市场部',
      id:5,
      children:[
        {
          label:'资源整合处',
          id:6
        }
      ]

  },{
    label:'人力资源部',
    id:7,
    children:[{
      label:'绩效管理处',
      id:8
    }]
  }]
}];

const tableData=[{
  date: '100000',
  name: '王小虎',
  number: '1',
}, {
  date: '2016-05-04',
  name: '王大虎',
  number: '221'
}, {
  date: '2016-05-01',
  name: '王小虎',
  number: '32',
}, {
  date: '2016-05-03',
  name: '王小虎',
  number: '1518'
}];

const personalData=[
  {
   number:'10000001',
   mail:'1741969637@qq.com',
   phone:'13839955953',
   partName:'研发部',
   fixTime:'2019-06-11'
  }, {
    number:'10000002',
   mail:'1741969637@qq.com',
   phone:'13839955953',
   partName:'研发部',
   fixTime:'2019-06-11'
  }, {
    number:'10000003',
    mail:'1741969637@qq.com',
    phone:'13839955953',
    partName:'研发部',
    fixTime:'2019-06-11'
  }, {
    number:'10000004',
   mail:'1741969637@qq.com',
   phone:'13839955953',
   partName:'研发部',
   fixTime:'2019-06-11'
  },
    {
      number:'10000005',
     mail:'1741969637@qq.com',
     phone:'13839955953',
     partName:'研发部',
     fixTime:'2019-06-11'
    },
    {
      number:'10000006',
     mail:'1741969637@qq.com',
     phone:'13839955953',
     partName:'研发部',
     fixTime:'2019-06-11'
    }

]

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

export { LoginUsers, Users,queryData,tableData,personalData};

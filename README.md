# pos-v1-api
### 需求描述
1. 使用express框架实现pos机（参考前面的pos机命令行任务卡需求）的基本api
    - GET    /items           获取全部商品
    - GET    /items/:id       获取一个商品
    - POST   /items           增加一个商品
    - DELETE /items/:id       删除商品
    - PUT    /items/:id       更新数据

2. 实现处理商品条码数组，返回购物清单的api
清单内容(例样):
```js
***<没钱赚商店>收据*** 
名称:可口可乐，数量:3瓶，单价:3.00(元)，小计:6.00(元)
名称:羽毛球，数量:5个，单价:1.00(元)，小计:4.00(元)
名称:苹果，数 :2 ，单价:5.50(元)， 计:11.00(元) 
----------------------
总计:21.00(元)
节省:4.00(元)
**********************

```
### 操作指南
1. 安装相关依赖
```npm install```
2. 安装mongoDB，并插入item数据
```
{ barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00, promotion: '买二送一' },
{ barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, promotion: '买二送一' },
{ barcode: 'ITEM000002', name: '苹果', unit: '斤', price: 5.50, promotion: '无' },
{ barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00, promotion: '无' },
{ barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00, promotion: '无' },
{ barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50, promotion: '买二送一' }
```
3. postman测试
- GET    http://localhost:3000/items           获取全部商品
- GET    http://localhost:3000/items/ITEM000000       获取一个商品
- POST   http://localhost:3000/items           增加一个商品
- DELETE http://localhost:3000/items/ITEM000005       删除商品
- PUT    http://localhost:3000/items/ITEM000005       更新数据
- GET    http://localhost:3000/figure       获取收据信息
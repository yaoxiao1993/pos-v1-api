const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
var router = express.Router(); 

app.listen(3000, function(){
    console.log('你的服务器在3000端口裸奔！');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pos',{ useNewUrlParser: true });
const db = mongoose.connection;
const Item = require('./items')

app.use(morgan('short'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/items', router);

app.get('/', function(req, res) {
    Item.find().sort({'createdAt': -1}).exec(function(err, items) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ items: items})
    });
});

app.get('/items/ITEM000000', function(req, res) {
    Item.find({'barcode':'ITEM000000'}).exec(function(err, items) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ items: items})
    });
});

app.post('/items', function(req, res) {
    if (req.body.barcode === '') return res.status(400).json({error: '商品条码不能为空！'});
    var item = new Item({barcode: 'ITEM000006', name: '果冻', unit: '袋', price: 6.50, promotion: '买二送一' });
    for (prop in req.body) {
      post[prop] = req.body[prop];
    }
    item.save(function(err) {
      if (err) return res.status(500).json({error: err.message});
      res.json({
        message: '商品存储成功了！'
      });
    });
  });

app.delete('/items/ITEM000006', function(req, res) {
    Item.remove({'barcode':'ITEM000006'}).exec(function(err, items) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ items: items})
    });
});

app.put('/items/ITEM000000', function(req, res) {
    Item.update({'barcode': 'ITEM000000', 'unit': '瓶'},{$set:{'barcode': 'ITEM000000', 'unit': '听'}}).exec(function(err, items) {
      if (err) return res.status(500).json({error: err.message});
      res.json({ items: items})
    });
});

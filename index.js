const express = require('express')
const app = express()
const port = 9000
var cors = require('cors')
const pick_name=require('./pick_name.json')
const allpick=require('./pick.json')
const hotel=require('./hotel.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/pick_name',(req,res)=>{
    res.send(pick_name);
})
app.get('/pick_name/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const filterdata=allpick.find(index=>index.id==id);
    res.send(filterdata);
})
app.get('/hotel/:id',(req,res)=>{
    const id=parseInt(req.params.id);

      const catagoryidwisenews=hotel.filter(index=>index.category_id==id);
      res.send(catagoryidwisenews);
  
   
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

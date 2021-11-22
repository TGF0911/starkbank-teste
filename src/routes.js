const express = require('express') ;
const stark = require('starkbank');


const InvoiceController = require('./controllers/InvoiceController')
const TransferController= require('./controllers/TransferController') 

const router = express.Router();

const key = process.env.STARK_PRIVATE_KEY;

let user = new stark.Project({
  environment: 'sandbox',
  id: '5748217165643776',
  privateKey: key
})

stark.user = user;

router.post('/invoice-generate',  (req, res) => {
  let intervalHours = 0;
   const interval = setInterval(async () => {
    intervalHours++;
   
    if(intervalHours  >= 8){
      clearInterval(interval)
    }
     await InvoiceController.createInvoices();
  } , 10800);
});

router.post('/invoice-transfer',async  (req, res) => {
  const {data} = req.body;
  await TransferController.createTransfers(data.amount);
  res.status(200).send(data);
});


module.exports = router;
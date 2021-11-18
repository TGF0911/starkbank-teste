import stark from 'starkbank';
import express from 'express';
import InvoiceController from './controllers/InvoiceController';
// import TransferController from './controllers/TransferController';

const app = express();

const user = new stark.Project({
  environment: 'sandbox',
 id: process.env.STARK_PROJECT_ID,
 privateKey: process.env.STARK_PRIVATE_KEY
})

stark.user = user;

const invoice = new InvoiceController()
// const transfer = new TransferController()

app.post('/invoice-generate', () => {

  let Hours = 0;
   const interval = setInterval(() => {
    Hours++;
    if(Hours  >= 8){
      clearInterval(interval)
    }
    invoice.createInvoices();
  } , 10800);
});
// transfer.createTransfers();

app.listen(3333, () => console.log('Server started on port 3333'));







import stark from 'starkbank';
import InvoiceController from './controllers/InvoiceController';
// import TransferController from './controllers/TransferController';

const user = new stark.Project({
  environment: 'sandbox',
 id: process.env.STARK_PROJECT_ID,
 privateKey: process.env.STARK_PRIVATE_KEY
})

stark.user = user;

const invoice = new InvoiceController()
// const transfer = new TransferController()

let Hours = 0;
 const interval = setInterval(() => {
  Hours++;
  if(Hours  >= 8){
    clearInterval(interval)
  }

  invoice.createInvoices();
} , 10800);

// transfer.createTransfers();







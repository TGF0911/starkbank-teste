const stark = require('starkbank');

const randomInt = require('../utils/random');


module.exports = {
  async createInvoices() {
    let invoices = [];
    for (let i = 0; i < 12; i++) {
      const invoice = {
        name: `Thais ${i}`,
        amount: randomInt(100, 1000),
        due: new Date().toISOString().replace("Z","+00:00"),
        taxId: '20.018.183/0001-80',
        expiration: 123456789,
        fine: 2.5,
        interest: 1.3,
        discount: [
          {
            'percentage': 10,
            'due': new Date().toISOString().replace("Z","+00:00") 
          }
        ],
        tags: ['Teste', `Invoice #${randomInt(1000, 2000)}`],
        description: [{
          'key': 'Field1',
          'value': 'Something'
        }]
      }
      invoices.push(new stark.Invoice(invoice));
    }

    return invoices
  }
}
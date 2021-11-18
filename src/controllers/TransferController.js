import { randomInt } from '../utils/random';

const stark = require('starkbank');

export default class TransferController {
  async createTransfers() {
    let transfers = [];
    let transfer = await stark.transfer.create([{
      amount: randomInt(100, 1000),
      name: 'Random People',
      bankCode: '20018183',
      branchCode: '0001',
      accountNumber: '6341320293482496',
      name: 'Stark Bank S.A',
      taxId: '20.018.183/0001-80',
      accountType: 'payment'
    }])
    transfers.push(new stark.Transfer(transfer));
    return transfers;
  }
}

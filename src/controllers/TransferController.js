const stark = require('starkbank');

module.exports = {
  async createTransfers(amount) {
    let transfers = [];
    let transfer = await stark.transfer.create([{
      amount,
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

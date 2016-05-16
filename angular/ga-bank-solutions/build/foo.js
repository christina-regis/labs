var transactions = {
  amount: 0,
  action: 'withdraw',
  date: new Date()

};

var self = {};

function go() {
    var entry = {
      amount: self.amount,
      action: self.action,
      date: new Date()
    };

    if (entry.action === 'withdraw') {
      if (entry.amount <= self.balance) {
        self.balance -= entry.amount;
        self.transactions.push(entry);
      }
    } else if (entry.action === 'deposit') {
      self.balance += entry.amount;
      self.transactions.push(entry);
    }
  }

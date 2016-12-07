'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan(){
 var account = {
  borrowed: 550000,
  balance: 286000,
  monthlyPayment: 1700,
  defaulted: 0,
  defaultsToForeclose: 5,
  foreclosed: false
};

function missPayment(){
  account.defaulted += 1;
  if (account.defaulted >= account.defaultsToForeclose){
    account.forclosed = true;
  }
}

return {
  getBalance: function(){
    return account.balance;
  },
  receivePayment: function(amount){
    if (amount < account.monthlyPayment){
      missPayment();
    }
    else {
      account.balance -= amount;
    }
  },
  getMonthlyPayment: function(){
    return account.monthlyPayment;
  },
  isForeclosed: function(){
    return account.foreclosed;
  }
  };
}

stevesLoan = loan();

function borrower(loan){
  var account = {
    monthlyIncome: 1350,
    funds: 2800,
    loan: loan
  }

  return {
    getFunds: function() {
      return account.funds;
    },
    makePayment: function() {
      if(account.funds > loan.getMonthlyPayment()) {
        account.funds = account.funds - loan.getMonthlyPayment();
        loan.recievePayment(loan.getMonthlyPayment());
      }
      else {
        loan.recievePayment(account.funds);
        account.funds = 0;
      }
    },
    payDay: function() {
      account.funds = account.funds + account.monthlyIncome;
    }
  }
};

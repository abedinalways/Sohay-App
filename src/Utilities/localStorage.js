export const getBalance = () => {
  const balance = localStorage.getItem('userBalance');
  return balance ? parseInt(balance) : 10000;
};

export const setBalance = newBalance => {
  localStorage.setItem('userBalance', newBalance);
  window.dispatchEvent(new StorageEvent('storage', { key: 'userBalance', newValue: newBalance.toString(), oldValue: localStorage.getItem('userBalance') }));

};

export const getPaidBills = () => {
  const paidBills = localStorage.getItem('paidBills');
  return paidBills ? JSON.parse(paidBills) : [];
};

export const addPaidBill = billId => {
  const paidBills = getPaidBills();
  if (!paidBills.includes(billId)) {
    localStorage.setItem('paidBills', JSON.stringify([...paidBills, billId]));
  }
};

export const isBillPaid = billId => {
  const paidBills = getPaidBills();
  return paidBills.includes(billId);
};

export const clearLocalPaymentData = () => {
  localStorage.removeItem('userBalance');
  localStorage.removeItem('paidBills');
};

export const subscribeToBalance = callback => {
  window.addEventListener('storage', (event) => {
    if (event.key === 'userBalance') {
      callback();
    }
  });
  return () => {
    window.removeEventListener('storage', (event) => {
      if (event.key === 'userBalance') {
        callback();
      }
    });
  };
};
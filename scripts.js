const Modal = {
  open() {
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const transactions = [
  {
    id: 1,
    desciption: 'Luz',
    amount: -50000,
    date: '23/01/2021',
  },

  {
    id: 2,
    desciption: 'Website',
    amount: 500000,
    date: '23/01/2021',
  },
  {
    id: 3,
    desciption: 'Internet',
    amount: -20000,
    date: '23/01/2021',
  },
  {
    id: 4,
    desciption: 'Agua',
    amount: -10000,
    date: '23/01/2021',
  },
]

const Transaction = {
  incomes() {

  },
  expenses() {

  },
  total() {

  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)


    DOM.transactionsContainer.appendChild(tr)
  },


  innerHTMLTransaction(transaction) {
    const html = `
   
    <td class="description">${transaction.desciption}</td>
    <td class="expense">${transaction.amount}</td>
    <td class="date">${transaction.date}</td>
    <td>
      <img src="./assets/minus.svg" alt="Remover transação">
    </td>
  
  `


    return html
  }
}


transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
})
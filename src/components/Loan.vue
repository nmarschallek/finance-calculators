<template>
  <div class="container mx-auto py-5 flex flex-col space-y-5">
    <div class="border-2 rounded-md p-3 flex flex-col space-y-3" v-for="(year, i) in years">
      <h2 class="text-xl font-medium text-gray-600">
        Year {{i+1}}
        <button @click="removeYear(i)">Remove</button>
      </h2>
      <div class="flex flex-row space-x-3">
        <div class="flex flex-col border rounded-md p-3 space-y-3 flex-grow" v-for="(loan, loanIndex) in year">
          <button @click="removeLoan(year, loanIndex)">Remove</button>
          <label class="flex flex-col space-y-2">
            Principle
            <input v-model="loan.amount" placeholder="Amount" class="border rounded-md p-2">
          </label>
          <label class="flex flex-col space-y-2">
            Interest Rate (%)
            <input v-model="loan.rate" placeholder="Rate" class="border rounded-md p-2">
          </label>
          <label class="flex flex-col space-y-2">
            Other Fees (year total)
            <input v-model="loan.fees" placeholder="Fees" class="border rounded-md p-2">
          </label>
          <label class="flex flex-col space-y-2">
            Monthly Payment
            <input v-model="loan.repayments" placeholder="Repayments" class="border rounded-md p-2">
            <span class="text-xs text-gray-500 italic">Minimum Payment: {{ money(minimumPayment(loan.rate, 30, loan.amount)) }}</span>
          </label>
          <span>Interest & Fees Paid: {{ money(calculatedFees(loan.amount, loan.rate, loan.repayments, loan.fees)) }}</span>
          <span>Loan Value: {{ money(calculatedValue(loan.amount, loan.rate, loan.repayments)) }}</span>
        </div>
        <div class="flex flex-col border rounded-md w-40 min-w-min px-5 justify-center">
          <button class="rounded-md p-3 bg-gray-200 hover:bg-gray-100" @click="newLoan(year)">New Loan +</button>
        </div>
      </div>
      <span>Interest & Fees Paid: {{ money(calculatedYearFees(year)) }}</span>
      <span>Loan Value: {{ money(calculatedYearValue(year)) }}</span>
    </div>
    <div class="flex justify-center">
      <button class="rounded-md w-36 p-3 bg-gray-200 hover:bg-gray-100" @click="addYear()">Add Year +</button>
    </div>
    <div class="border-2 rounded-md p-3 flex flex-col space-y-3">
      <h2 class="text-xl font-medium text-gray-600">Total</h2>
      <span>Interest & Fees Paid: {{ money(calculatedTotalFees()) }}</span>
      <span>Loan Value: {{ money(calculatedTotalValue()) }}</span>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'

const newLoan = (year) => year.push({
  amount: 0,
  rate: 0,
  fees: 0,
  repayments: 0,
})
const addYear = () => years.push([
  {
    amount: 0,
    rate: 0,
    fees: 0,
    repayments: 0,
  }
])

const removeLoan = (year, index) => year.splice(index)
const removeYear = (yearIndex) => years.splice(yearIndex, 1)

const years = reactive([
  [
    {
      amount: 312000,
      rate: 2.19,
      fees: 0,
      repayments: 2000,
    },
    {
      amount: 0,
      rate: 0,
      fees: 0,
      repayments: 0,
    }
  ]
])

const calcInterest = (principle, rate) => round(principle * (rate / 12 / 100))
const calcMonth = (principle, rate, payment, interestToDate = 0) => ({
  principle: round(principle - (payment - calcInterest(principle, rate))),
  interest: calcInterest(principle, rate),
  principlePaid: payment - calcInterest(principle, rate),
  payment: payment,
  totalInterestPaid: calcInterest(principle, rate) + interestToDate,
})
const minimumPayment = (rate, term, amount) => round(((rate / 1200) + (rate / 1200) / (Math.pow((1 + (rate / 1200)), (term * 12)) - 1)) * amount)
const calc = (principle, rate, months, payment) => {
  let value = {
    principle: principle,
    interest: 0,
    principlePaid: 0,
    payment: payment,
    totalInterestPaid: 0,
  }

  for (let month = 1; month <= months; month++) {
    value = calcMonth(value.principle, rate, payment, value.totalInterestPaid)
  }

  return value;
}

const money = (value) => {
  let formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  })
  return formatter.format(value)
}
const round = (value) => Math.round(value * 100) / 100
const calculatedFees = (presentValue, rate, repayments, fees) => {
  return calc(presentValue, rate, 12, repayments).totalInterestPaid + fees
}
const calculatedValue = (presentValue, rate, repayments) => {
  return calc(presentValue, rate, 12, repayments).principle
}

const calculatedYearFees = (year) => {
  let totalFees = 0
  year.forEach((year) => {
    totalFees = totalFees + calc(year.amount, year.rate, 12, year.repayments).totalInterestPaid + Number(year.fees)
  })
  return round(totalFees)
}
const calculatedYearValue = (year) => {
  let totalValue = 0
  year.forEach((year) => {
    totalValue = totalValue + calc(year.amount, year.rate, 12, year.repayments).principle
  })
  return round(totalValue)
}

const calculatedTotalFees = () => {
  let totalFees = 0
  years.forEach((year) => {
    totalFees = totalFees + calculatedYearFees(year)
  })
  return round(totalFees)
}
const calculatedTotalValue = () => {
  let totalValue = 0
  years.forEach((year) => {
    totalValue = totalValue + calculatedYearValue(year)
  })
  return round(totalValue)
}

</script>


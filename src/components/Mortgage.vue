<template>
  <div class="container mx-auto py-5 flex flex-col space-y-5">
    <div class="flex flex-row space-x-3 justify-between">
      <label class="flex flex-col space-y-2">
        Amount borrowed ($)
        <input v-model="initialPrinciple" placeholder="Initial Principle" class="border rounded-md p-2">
      </label>
    </div>

    <div class="flex flex-row space-x-3 justify-between">
      <label class="flex flex-col space-y-2">
        Interest Rate (%)
        <input v-model="interestRate" placeholder="Interest Rate" class="border rounded-md p-2">
      </label>

      <label class="flex flex-col space-y-2">
        Term (years)
        <input v-model="term" placeholder="Term" class="border rounded-md p-2">
      </label>

      <label class="flex flex-col space-y-2">
        Monthly Payment ($)
        <input v-model="currentPayment" placeholder="Payment" class="border rounded-md p-2">
      </label>
    </div>

    <div class="flex flex-row space-x-3 justify-between">
      <label class="flex flex-col space-y-2">
        Minimum Payment ($)
        <input disabled :value="money(minimumRepayment)" placeholder="Minimum Payment" class="border rounded-md p-2">
      </label>

      <label class="flex flex-col space-y-2">
        Time until fully paid
        <input disabled v-model="fullyPaidIn" placeholder="Time until fully paid" class="border rounded-md p-2">
      </label>

      <label class="flex flex-col space-y-2">
        Total Interest Paid
        <input disabled :value="money(data.slice(-1)[0].totalInterestPaid)" placeholder="Time until fully paid" class="border rounded-md p-2">
      </label>
    </div>

    <table>
      <tr>
        <th>Period</th>
        <th>Principle</th>
        <th>Interest</th>
        <th>Principle Paid</th>
        <th>Payment</th>
        <th>Total Interest Paid</th>
      </tr>
      <tr
        v-for="(row, period) in data"
        :class="period % 12 == 0 && period != 0 ? 'border-b-2 border-black' : ''"
      >
        <td>{{ period }}</td>
        <td>{{ money(row.principle) }}</td>
        <td>{{ money(row.interest) }}</td>
        <td>{{ money(row.principlePaid) }}</td>
        <td>{{ money(row.payment) }}</td>
        <td>{{ money(row.totalInterestPaid) }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'

const initialPrinciple = ref(300000)
const term = ref(30)
const interestRate = ref(2.55)
const currentPayment = ref(1193.18)
const minimumRepayment = computed(() => minimumPayment(interestRate.value, term.value, initialPrinciple.value))
const fullyPaidIn = computed(() => {
  return `${Math.floor((data.value.length - 1) / 12)} years, ${(data.value.length - 1) % 12} months`
})

const data = computed(() => {
  let array = [{
    principle: initialPrinciple.value,
    interest: null,
    principlePaid: null,
    payment: null,
    totalInterestPaid: null
  }]

  while (array.slice(-1)[0].principle > 0) {
    let lastPeriod = array.slice(-1)[0]

    let month = calcMonth(lastPeriod.principle, interestRate.value, Math.max(currentPayment.value, minimumRepayment.value), lastPeriod.totalInterestPaid)

    array.push({
      ...month,
    })
  }

  return array
})

const round = (value) => Math.round(value * 100) / 100
const money = (value) => {
  let formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  })
  return formatter.format(value)
}
const calcInterest = (principle, rate) => round(principle * (rate / 12 / 100))
const calcMonth = (principle, rate, payment, interestToDate = 0) => {
  if (principle < payment) {
    payment = principle + calcInterest(principle, rate)
  }
  return ({
    principle: round(principle - (payment - calcInterest(principle, rate))),
    interest: calcInterest(principle, rate),
    principlePaid: payment - calcInterest(principle, rate),
    payment: payment,
    totalInterestPaid: calcInterest(principle, rate) + interestToDate,
  });
}
const minimumPayment = (rate, term, amount) => round(((rate / 1200) + (rate / 1200) / (Math.pow((1 + (rate / 1200)), (term * 12)) - 1)) * amount)

</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

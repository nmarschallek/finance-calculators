<template>
  <teleport to="head">
    <title>Ideal Investment Frequency</title>
  </teleport>

  <div class="container mx-auto py-5 flex flex-col space-y-5">
    <label>
      Savings each Period
      <input class="border rounded-md p-1.5 border-gray-300 ml-3" v-model="s" placeholder="s">
    </label>
    <label>
      Investment Frequency
      <select v-model="d">
        <option :value="365">Daily</option>
        <option :value="52">Weekly</option>
        <option :value="26">Fortnightly</option>
        <option :value="12">Monthly</option>
        <option :value="4">Quarterly</option>
      </select>
    </label>
    <label>
      Savings Rate %
      <input class="border rounded-md p-1.5 border-gray-300 ml-3" v-model="rRaw" placeholder="r">
    </label>
    <label>
      Investment Returns %
      <input class="border rounded-md p-1.5 border-gray-300 ml-3" v-model="gRaw" placeholder="g">
    </label>
    <label>
      Brokerage Cost
      <input class="border rounded-md p-1.5 border-gray-300 ml-3" v-model="b" placeholder="b">
    </label>
    <span>n + 1 : {{ n + 1 }}</span>
    <span>t (periods): {{ t }}</span>
    <span>fv (n-1): {{ fvLess }}</span>
    <span>fv (n): {{ fv }}</span>
    <span>fv (n+1): {{ fvPlus }}</span>
    <span>Invest {{ money(parcel) }} every {{ n + 1 }} {{ timeframe }} </span>
    <span>Interest: {{ money(interest) }} </span>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'

const lcm = (arr) => {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var candidate = max;

  var smallestCommon = function(low, high) {
    // inner function to use 'high' variable
    function scm(l, h) {
      if (h % l === 0) {
        return h;
      } else {
        return scm(l, h + high);
      }
    }
    return scm(low, high);
  };

  for (var i = min; i <= max; i += 1) {
    candidate = smallestCommon(i, candidate);
  }

  return candidate;
}

const s = ref(100)
const d = ref('26')
const rRaw = ref(4)
const gRaw = ref(9)
const b = ref(10)

const r = computed(() => rRaw.value / 100)
const g = computed(() => gRaw.value / 100)

const R = computed(() => Math.pow(1 + r.value / 12, 12 * (1 / d.value)))
const G = computed(() => Math.pow(1 + g.value, (1 / d.value)))
const alpha = computed(() => (s.value - b.value + b.value * R.value) * Math.log(G.value))
const beta = computed(() => s.value * Math.log(G.value / R.value))
const gamma = computed(() => s.value * Math.log(R.value))

const c0 = computed(() => 0.5 * (alpha.value * G.value / R.value * Math.pow(Math.log(G.value / R.value), 2) - beta.value * G.value * Math.pow(Math.log(G.value), 2)))
const c1 = computed(() => alpha.value * G.value / R.value * Math.log(G.value / R.value) - beta.value * G.value * Math.log(G.value))
const c2 = computed(() => alpha.value * G.value / R.value - beta.value * G.value - gamma.value)

const nUnrounded = computed(() => (Math.sqrt(Math.pow(c1.value, 2) - (4 * c0.value * c2.value)) / (2 * Math.abs(c0.value))) - c1.value / (2 * c0.value))
const n = computed(() => Math.round(nUnrounded.value))

const t = computed(() => lcm([
  n.value + 1,
  n.value + 1 - 1,
  n.value + 1 + 1
]))

const fvLess = computed(() => (s.value*(1-Math.pow(R.value,n.value-1+1))-b.value*(1-R.value))*(1-Math.pow(G.value,t.value))/((1-R.value)*(1-Math.pow(G.value, n.value-1+1))))
const fv = computed(() => (s.value*(1-Math.pow(R.value,n.value+1))-b.value*(1-R.value))*(1-Math.pow(G.value,t.value))/((1-R.value)*(1-Math.pow(G.value, n.value+1))))
const fvPlus = computed(() => (s.value*(1-Math.pow(R.value,n.value+1+1))-b.value*(1-R.value))*(1-Math.pow(G.value,t.value))/((1-R.value)*(1-Math.pow(G.value, n.value+1+1))))

const parcel = computed(() => {
  let R = Math.pow(1 + r.value / 12, 12 * (1 / d.value))
  if (r.value === 0) return s.value * (n.value + 1)
  return Math.round(s.value * (1 - Math.pow(R, (n.value + 1))) / (1 - R))
})

const interest = computed(() => {
  return parcel.value - (s.value * (n.value + 1))
})

const timeframe = computed(() => {
  switch (d.value) {
    case '365':
      return 'days'
    case '52':
      return 'weeks'
    case '26':
      return 'fortnights'
    case '12':
      return 'months'
    case '4':
      return 'quarters'
  }
})

const money = (value) => {
  let formatter = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
  })
  return formatter.format(value)
}
</script>

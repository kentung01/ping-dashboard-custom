<script setup lang="ts">
import { fromBech32, fromHex, toBech32 } from '@cosmjs/encoding'

const x = toBech32(
  'neutronvaloper1',
  fromHex('3363E8F97B02ECC00289E72173D827543047ACDA')
)
const add = fromBech32('cosmosvaloper1jxv0u20scum4trha72c7ltfgfqef6nsch7q6cu')
const op = toBech32('neutronvaloper1', add.data)

console.log(x)
console.log(op)
</script>

<template>
  <div>address: {{ x }}</div>
</template>

<template>
  <n-card
    ><div class="flex">
      <n-date-picker placeholder="Start Date" type="date" class="flex-2 p-2" @update-value="startDate = $event" />
      <!-- <pre>{{ JSON.stringify(startDate) }}</pre> -->
      <n-date-picker placeholder="End Date" type="date" class="flex-2 p-2" @update-value="endDate = $event" />
      <!-- <pre>{{ JSON.stringify(endDate) }}</pre> -->
      <n-button class="flex-2 m-2" @click="fetchReports()">Search</n-button>
    </div>
    <n-card v-if="data" style="white-space: pre-line">{{
      data
        ? `Buy Amount: ${data?.buyAmount.toString()}\nSell Amount:${data?.sellAmount.toString()}\nTotal Commission:${data?.commission.toString()}\nPremium Subscriptions: ${data?.premium_subscription.toString()}\nTotal Revenue: ${data?.total_revenue.toFixed(
            2
          )}`
        : ''
    }}</n-card>
  </n-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getReports } from '~/src/service';
const data = ref<ApiManagement.GetReport>();
const startDate = ref<number>();
const endDate = ref<number>();

const fetchReports = async () => {
  if (startDate.value && endDate.value) {
    const result = await getReports(startDate.value!, endDate.value!);
    if (result.data) {
      data.value = result.data;
    } else {
      window.$message?.info('Error');
    }
  } else {
    window.$message?.error('Please select start and end date');
  }
};
</script>
<style scoped></style>

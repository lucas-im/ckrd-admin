<template>
  <n-card style="white-space: pre-line">{{
    data
      ? `Total Users: ${data.total_users}\nTotal Premium Users: ${data.total_premium_users}\nTotal Former Premium Users: ${data.total_former_premium_users}\nTotal Never Been Premium Users: ${data.total_never_premium_users}`
      : ''
  }}</n-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getStatistics } from '~/src/service';

const data = ref<ApiManagement.GetStatistics>();

const fetchStatistics = async () => {
  const result = await getStatistics();
  if (result.data) {
    data.value = result.data;
  } else {
    window.$message?.info('Error');
  }
};

function init() {
  fetchStatistics();
}
init();
</script>

<style scoped></style>

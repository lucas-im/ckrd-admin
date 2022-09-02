<template>
  <n-card style="white-space: pre-line">
    <n-card :bordered="false" class="rounded-16px shadow-sm">
      <div v-if="renderChart" class="flex w-full h-360px">
        <div class="w-200px h-full py-12px">
          <h3 class="text-16px font-bold">Dashboard</h3>
          <p class="text-[#aaa]">Overview Of Lasted Month</p>
          <h3 class="pt-36px text-24px font-bold">
            <count-to prefix="$" :start-value="0" :end-value="7754" />
          </h3>
          <p class="text-[#aaa]">Current Month Earnings</p>
          <h3 class="pt-36px text-24px font-bold">
            <count-to :start-value="0" :end-value="1234" />
          </h3>
          <p class="text-[#aaa]">Current Month Sales</p>
          <n-button class="mt-24px" type="primary">Last Month Summary</n-button>
        </div>
        <div class="flex-1-hidden h-full">
          <div ref="lineRef" class="wh-full"></div>
        </div>
      </div>
    </n-card>
    {{
      data
        ? `Total Users: ${data.total_users}\nTotal Premium Users: ${data.total_premium_users}\nTotal Former Premium Users: ${data.total_former_premium_users}\nTotal Never Been Premium Users: ${data.total_never_premium_users}`
        : ""
    }}</n-card
  >
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { ECOption, useEcharts } from "~/src/composables";
import { getStatistics } from "~/src/service";
const renderChart = ref(false);

const data = ref<ApiManagement.GetStatistics>();
const fetchStatistics = async () => {
  const result = await getStatistics();
  if (result.data) {
    data.value = result.data;
    const {
      xAxisData,
      totalUsersData,
      totalPremiumUsersData,
      totalFormerPremiumUsersData,
      totalNeverBeenPremiumUsersData,
    } = parseTimeStampData(result.data);
    (lineOptions.value.xAxis as any[])[0].data = xAxisData;
    (lineOptions.value.series as any[]).find((val) => val.name === "Total Users").data = totalUsersData;
    (lineOptions.value.series as any[]).find((val) => val.name === "Total Premium Users").data = totalPremiumUsersData;
    (lineOptions.value.series as any[]).find((val) => val.name === "Total Former Premium Users").data =
      totalFormerPremiumUsersData;
    (lineOptions.value.series as any[]).find((val) => val.name === "Total Never Been Premium Users").data =
      totalNeverBeenPremiumUsersData;

    renderChart.value = true;
  } else {
    window.$message?.info("Error");
  }
};

const parseTimeStampData = (data: ApiManagement.GetStatistics) => {
  const totalUsersTimestamps = data.total_users_timestamps.filter((item) => item !== 0);
  const totalPremiumUsersTimestamps = data.total_premium_users_timestamps.filter((item) => item !== 0);
  const totalFormerPremiumUsersTimestamps = data.total_former_premium_users_timestamps.filter((item) => item !== 0);
  const totalNeverBeenPremiumUsersTimestamps = data.total_never_premium_users_timestamps.filter((item) => item !== 0);
  const startTimeStamp = Math.min(
    ...totalUsersTimestamps,
    ...totalPremiumUsersTimestamps,
    ...totalFormerPremiumUsersTimestamps,
    ...totalNeverBeenPremiumUsersTimestamps
  );
  const endTimeStamp = Math.max(
    ...totalUsersTimestamps,
    ...totalPremiumUsersTimestamps,
    ...totalFormerPremiumUsersTimestamps,
    ...totalNeverBeenPremiumUsersTimestamps
  );
  const xAxisData = [];
  for (let i = startTimeStamp; i <= endTimeStamp; i += 86400) {
    xAxisData.push(i);
  }
  let totalUsersCount = 1;
  const totalUsersData = xAxisData
    .map((item) => totalUsersTimestamps.find((i) => item - 43200 <= i && i <= item + 43200) || 0)
    .map((item) => {
      if (item !== 0) {
        totalUsersCount += 1;
      }
      return totalUsersCount;
    });
  let totalPremiumUsersCount = 0;
  const totalPremiumUsersData = xAxisData
    .map((item) => totalPremiumUsersTimestamps.find((i) => item - 43200 <= i && i <= item + 43200) || 0)
    .map((item) => {
      if (item !== 0) {
        totalPremiumUsersCount += 1;
      }
      return totalPremiumUsersCount;
    });
  let totalFormerPremiumUsersCount = 0;
  const totalFormerPremiumUsersData = xAxisData
    .map((item) => totalFormerPremiumUsersTimestamps.find((i) => item - 43200 <= i && i <= item + 43200) || 0)
    .map((item) => {
      if (item !== 0) {
        totalFormerPremiumUsersCount += 1;
      }
      return totalFormerPremiumUsersCount;
    });
  let totalNeverBeenPremiumUsersCount = 0;
  const totalNeverBeenPremiumUsersData = xAxisData
    .map((item) => totalNeverBeenPremiumUsersTimestamps.find((i) => item - 43200 <= i && i <= item + 43200) || 0)
    .map((item) => {
      if (item !== 0) {
        totalNeverBeenPremiumUsersCount += 1;
      }
      return totalNeverBeenPremiumUsersCount;
    });
  return {
    xAxisData,
    totalUsersData,
    totalPremiumUsersData,
    totalFormerPremiumUsersData,
    totalNeverBeenPremiumUsersData,
  };
};

defineOptions({ name: "DashboardAnalysisTopCard" });
let lineOptions = ref<ECOption>({
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Total Users", "Total Premium Users", "Total Former Premium Users", "Total Never Been Premium Users"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      color: "#8e9dff",
      name: "Total Users",
      type: "line",
      smooth: true,
      stack: "Total",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: "#8e9dff",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ],
        },
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    },
    {
      color: "#26deca",
      name: "Total Premium Users",
      type: "line",
      smooth: true,
      stack: "Total",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: "#26deca",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ],
        },
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    },
    {
      color: "#f7b731",
      name: "Total Former Premium Users",
      type: "line",
      smooth: true,
      stack: "Total",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: "#f7b731",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ],
        },
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    },
    {
      color: "#ff7675",
      name: "Total Never Been Premium Users",
      type: "line",
      smooth: true,
      stack: "Total",
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: "#ff7675",
            },
            {
              offset: 1,
              color: "#fff",
            },
          ],
        },
      },
      emphasis: {
        focus: "series",
      },
      data: [],
    },
  ],
}) as Ref<ECOption>;

function init() {
  fetchStatistics();
}
init();
const { domRef: lineRef } = useEcharts(lineOptions);
</script>

<style scoped></style>

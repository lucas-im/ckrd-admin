<template>
  <n-card title="Premium Contents" :bordered="false" class="rounded-16px shadow-sm">
    <n-space class="pb-12px" justify="space-between">
      <n-space
        ><input type="file" multiple @change="onFileChange($event)" />
        <!-- Choose files to upload -->
      </n-space>

      <n-space> </n-space>
    </n-space>
    <n-button @click="handleUploadFile">Upload</n-button>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NUpload, NButton } from 'naive-ui';
import { FileInfo } from 'naive-ui/es/upload/src/interface';
import { uploadPremContent } from '~/src/service/api/management';

const file = ref<File | null>();

const onFileChange = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
  }
};

const handleUploadFile = async () => {
  const result: any = await uploadPremContent(file.value!);
  if (result.data.url) {
    window.$message?.success(result.data.url);
  } else {
    window.$message?.error(result.message);
  }
};
</script>

<style scoped></style>

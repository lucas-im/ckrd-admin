<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="phone">
      <n-input v-model:value="model.phone" placeholder="Phone" />
    </n-form-item>
    <n-form-item path="code">
      <div class="flex-y-center w-full">
        <n-input v-model:value="model.code" placeholder="Code" />
        <div class="w-18px"></div>
        <n-button size="large" :disabled="isCounting" :loading="smsLoading" @click="handleSmsCode">
          {{ label }}
        </n-button>
      </div>
    </n-form-item>
    <n-form-item path="pwd">
      <n-input v-model:value="model.pwd" placeholder="Password" />
    </n-form-item>
    <n-form-item path="confirmPwd">
      <n-input v-model:value="model.confirmPwd" placeholder="Confirm Password" />
    </n-form-item>
    <n-space :vertical="true" :size="18">
      <login-agreement v-model:value="agreement" />
      <n-button type="primary" size="large" :block="true" :round="true" @click="handleSubmit">Submit</n-button>
      <n-button size="large" :block="true" :round="true" @click="toLoginModule('pwd-login')">Login</n-button>
    </n-space>
  </n-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
import type { FormInst, FormRules } from "naive-ui";
import { useRouterPush } from "@/composables";
import { useSmsCode } from "@/hooks";
import { formRules, getConfirmPwdRule } from "@/utils";

const { toLoginModule } = useRouterPush();
const { label, isCounting, loading: smsLoading, start } = useSmsCode();

const formRef = ref<(HTMLElement & FormInst) | null>(null);
const model = reactive({
  phone: "",
  code: "",
  pwd: "",
  confirmPwd: "",
});
const rules: FormRules = {
  phone: formRules.phone,
  code: formRules.code,
  pwd: formRules.pwd,
  confirmPwd: getConfirmPwdRule(toRefs(model).pwd),
};

const agreement = ref(false);

function handleSmsCode() {
  start();
}

function handleSubmit(e: MouseEvent) {
  if (!formRef.value) return;
  e.preventDefault();

  formRef.value.validate((errors) => {
    if (!errors) {
      if (!agreement.value) return;
      window.$message?.success("????????????!");
    } else {
      window.$message?.error("????????????!");
    }
  });
}
</script>

<style scoped></style>

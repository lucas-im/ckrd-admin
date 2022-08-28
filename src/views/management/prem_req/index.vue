<template>
  <n-card title="Premium Requests" :bordered="false" class="rounded-16px shadow-sm">
    <n-data-table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" />
    <table-action-modal v-model:visible="visible" :type="modalType" :edit-data="editData" />
  </n-card>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NSwitch, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchPremiumRequests, modifyPremiumRequest } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
// import { TableActionModal } from "./components";

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<UserManagement.PremiumRequestTable[]>([]);
function setTableData(data: UserManagement.PremiumRequestTable[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchPremiumRequests();
  console.log(data);
  if (data) {
    setTimeout(() => {
      setTableData(data);
      endLoading();
    }, 1000);
  }
}

const columns: DataTableColumns = [
  {
    type: 'selection',
    align: 'center'
  },
  {
    key: 'refferedBy',
    title: 'Reffered By',
    align: 'center'
  },
  {
    key: 'status',
    title: 'Status',
    align: 'center',
    render: (h, i) => {
      const row = h as unknown as UserManagement.PremiumRequestTable;
      return <NTag type={row.status ? 'primary' : 'secondary'}>{row.status ? 'Yes' : 'No'}</NTag>;
    }
  },
  {
    key: 'userId',
    title: 'User ID',
    align: 'center'
  },
  {
    key: 'actions',
    title: 'Actions',
    align: 'center',
    render: row => {
      const rowData = row as unknown as UserManagement.PremiumRequestTable;
      return (
        <NSpace justify={'center'}>
          <NPopconfirm
            onPositiveClick={() => handleModifyRequest(rowData.userId, true)}
            onNegativeClick={() => handleModifyRequest(rowData.userId, false)}
            positiveText="Approve"
            negativeText="Reject"
            negativeButtonProps={{ color: '#E13C39' }}
          >
            {{
              default: () => 'Respond to this request',
              trigger: () => <NButton size={'small'}>Respond</NButton>
            }}
          </NPopconfirm>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(rowData.userId)}>
            {{
              default: () => 'Confirm Delete',
              trigger: () => <NButton size={'small'}>Delete</NButton>
            }}
          </NPopconfirm>
        </NSpace>
      );
    }
  }
];

type ModalType = 'add' | 'edit';

const modalType = ref<ModalType>('add');
function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<UserManagement.PremiumRequestTable | null>(null);
function setEditData(data: UserManagement.PremiumRequestTable | null) {
  editData.value = data;
}

function handleEditTable(rowId: string) {
  const findItem = tableData.value.find(item => item.userId === rowId);
  if (findItem) {
    setEditData(findItem);
  }
  setModalType('edit');
  openModal();
}

const handleModifyRequest = async (userId: string, status: boolean) => {
  const res = await modifyPremiumRequest(userId, status);
  if (res.data != null) {
    const findItem = tableData.value.find(item => item.userId === userId);
    if (findItem) {
      findItem.status = status;
    }
  }
};

function handleDeleteTable(rowId: string) {
  window.$message?.info(`点击了删除，rowId为${rowId}`);
}

const pagination = reactive<PaginationProps>({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [10, 15, 20, 25, 30],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  }
});

function init() {
  getTableData();
}

init();
</script>

<style scoped></style>

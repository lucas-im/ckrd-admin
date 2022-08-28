<template>
  <n-card title="Users" :bordered="false" class="rounded-16px shadow-sm">
    <n-data-table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" />
    <table-action-modal v-model:visible="visible" :type="modalType" :edit-data="editData" />
  </n-card>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue';
import { NButton, NPopconfirm, NSpace, NSwitch, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import { fetchUserManagementList } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
import { TableActionModal } from './components';
const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();

const tableData = ref<UserManagement.UserTable[]>([]);
function setTableData(data: UserManagement.UserTable[]) {
  tableData.value = data;
}

async function getTableData() {
  startLoading();
  const { data } = await fetchUserManagementList();
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
    key: 'id',
    title: 'ID',
    align: 'center'
    // ellipsis: "true",
  },
  {
    key: 'first_name',
    title: 'First Name',
    align: 'center'
  },
  {
    key: 'last_name',
    title: 'Last Name',
    align: 'center'
  },
  {
    key: 'isPRO',
    title: 'Is Pro',
    align: 'center',
    render: (h, i) => {
      const row = h as unknown as UserManagement.UserTable;
      return <NTag type={row.isPRO ? 'primary' : 'secondary'}>{row.isPRO ? 'Yes' : 'No'}</NTag>;
    }
  },
  {
    key: 'isPending',
    title: 'Is Pending',
    align: 'center',
    render: (h, i) => {
      const row = h as unknown as UserManagement.UserTable;
      return <NTag type={row.isPending ? 'primary' : 'secondary'}>{row.isPending ? 'Yes' : 'No'}</NTag>;
    }
  },
  {
    key: 'phone_no',
    title: 'Phone',
    align: 'center'
  },
  {
    key: 'referralCode',
    title: 'Refferal',
    align: 'center'
  },
  {
    key: 'actions',
    title: 'Modify',
    align: 'center',
    render: row => {
      const rowData = row as unknown as UserManagement.UserTable;
      return (
        <NSpace justify={'center'}>
          <NButton size={'small'} onClick={() => handleEditTable(rowData.id)}>
            Modify
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDeleteTable(rowData.id)}>
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

function handleUpdateDisabled(disabled: boolean, rowId: string) {
  const index = tableData.value.findIndex(item => item.id === rowId);
  if (index > -1) {
    tableData.value[index].disabled = disabled;
  }
}

type ModalType = 'add' | 'edit';

const modalType = ref<ModalType>('add');
function setModalType(type: ModalType) {
  modalType.value = type;
}

const editData = ref<UserManagement.UserTable | null>(null);
function setEditData(data: UserManagement.UserTable | null) {
  editData.value = data;
}

function handleAddTable() {
  openModal();
  setModalType('add');
}

function handleEditTable(rowId: string) {
  const findItem = tableData.value.find(item => item.id === rowId);
  if (findItem) {
    setEditData(findItem);
  }
  setModalType('edit');
  openModal();
}
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

// 初始化
init();
</script>

<style scoped></style>

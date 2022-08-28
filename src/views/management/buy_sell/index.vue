<template>
  <n-card title="Buy & Sell" :bordered="false" class="rounded-16px shadow-sm">
    <!-- <div class="pb-4 columns-2">
			<n-select
				v-model:value="selectValue"
				size="large"
				:options="selectOptions"
			/>
		</div> -->
    <n-data-table :columns="columns" :data="tableData" :loading="loading" :pagination="pagination" />
    <table-action-modal v-model:visible="visible" :type="modalType" :edit-data="editData" />
  </n-card>
</template>
<script setup lang="tsx">
import { reactive, ref } from 'vue';
import { NButton, NButtonGroup, NPopconfirm, NSpace, NImage, NSwitch, NTag } from 'naive-ui';
import type { DataTableColumns, PaginationProps } from 'naive-ui';
import type { InternalRowData } from 'naive-ui/es/data-table/src/interface';
import { fetchBuyAndSell, modifyBuyAndSell, modifyPremiumRequest, updateBuyAndSell, uploadDocument } from '@/service';
import { useBoolean, useLoading } from '@/hooks';
// import { TableActionModal } from "./components";

const { loading, startLoading, endLoading } = useLoading(false);
const { bool: visible, setTrue: openModal } = useBoolean();
// let { isIdUploaded, isSignUploaded } = ref<boolean>(false);
const idUri = ref<string>('');
const signUri = ref<string>('');
const tableData = ref<Management.BuyAndSell[]>([]);
let stream: MediaStream;
function setTableData(data: Management.BuyAndSell[]) {
  tableData.value = data;
}

let selectOptions = [];

async function getPageData() {
  startLoading();
  const { data } = await fetchBuyAndSell();
  console.log(data);
  if (data) {
    setTimeout(() => {
      setTableData(data);
      selectOptions = data.map(({ userId }) => ({
        value: userId,
        label: name
      }));
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
    key: 'type',
    title: 'Type',
    align: 'center',
    render: (h, i) => {
      const row = h as unknown as Management.BuyAndSell;
      return (
        <NTag type={(row.type as string) === 'Buy' ? 'primary' : 'error'}>
          {(row.type as string) === 'Buy' ? 'Buy' : 'Sell'}
        </NTag>
      );
    },
    width: '75px'
  },
  {
    key: 'isProcessed',
    title: 'Processed',
    align: 'center',
    render: (h, i) => {
      const row = h as unknown as Management.BuyAndSell;
      return <NTag type={row.isProcessed ? 'primary' : 'error'}>{row.isProcessed ? 'Yes' : 'No'}</NTag>;
    },
    width: '75px'
  },
  {
    key: 'phone_no',
    title: 'Phone',
    align: 'center',
    // ellipsis: true,
    width: '125px'
  },
  {
    key: 'first_name',
    title: 'First Name',
    align: 'center',
    // ellipsis: true,
    width: '75px'
  },
  {
    key: 'last_name',
    title: 'Last Name',
    align: 'center',
    width: '75px'
  },
  {
    key: 'wallet_address',
    title: 'Wallet Addr.',
    align: 'center',
    ellipsis: true
    // width: "150px",
  },
  {
    key: 'usd_amount',
    title: 'Amount',
    align: 'center',
    // ellipsis: true,
    width: '120px'
  },
  {
    key: 'commission',
    title: 'Commission',
    align: 'center',
    // ellipsis: true,
    width: '120px'
  },
  {
    key: 'commission_percentage',
    title: 'Commission %',
    align: 'center',
    // ellipsis: true,
    width: '120px'
  },

  {
    key: 'actions',
    title: 'Actions',
    align: 'center',
    render: row => {
      const rowData = row as unknown as Management.BuyAndSell;
      return (
        <NSpace justify={'center'}>
          <NButtonGroup>
            <NPopconfirm
              onPositiveClick={() => handleUpload(false, row)}
              onNegativeClick={() => disposeUserMedia()}
              onClickoutside={() => disposeUserMedia()}
              positiveText="Upload"
              // negativeText="Capture"
              // positiveButtonProps={{
              // 	disabled: signUri.value !== "" ? false : true,
              // }}
              onShow={() => renderUserMedia()}
            >
              {{
                default: () =>
                  !row.signImage ? (
                    <input className="sign-file" type="file" accept="image/*" capture="camera">
                      Capture
                    </input>
                  ) : (
                    <NImage width="300" src={row.signImage as string} />
                  ),
                trigger: () => (
                  <NButton ghost={true} size="small" type={row.signImage ? 'primary' : 'warning'}>
                    Sign
                  </NButton>
                )
              }}
            </NPopconfirm>
            <NPopconfirm
              onPositiveClick={() => handleUpload(true, row)}
              onNegativeClick={() => disposeUserMedia()}
              onClickoutside={() => disposeUserMedia()}
              positiveText="Upload"
              negativeText="Select File"
              // positiveButtonProps={{
              // 	disabled: idUri.value !== "" ? false : true,
              // }}
            >
              {{
                default: () =>
                  !row.idImage ? (
                    <input className="id-file" type="file" accept="image/*" capture="camera">
                      Capture
                    </input>
                  ) : (
                    <NImage width="300" src={row.idImage as string} />
                  ),
                trigger: () => (
                  <NButton ghost={true} size="small" type={row.idImage ? 'primary' : 'warning'}>
                    Id
                  </NButton>
                )
              }}
            </NPopconfirm>
            <NPopconfirm
              positiveText="Approve"
              negativeText="Reject"
              negativeButtonProps={{ color: '#E13C39' }}
              onPositiveClick={() => handleModifyRequest(rowData.id, true)}
              onNegativeClick={() => handleModifyRequest(rowData.id, false)}
            >
              {{
                default: () => 'Resond to this request',
                trigger: () => (
                  <NButton
                    ghost={true}
                    size="small"
                    type={row.idImage && row.signImage ? 'success' : 'warning'}
                    disabled={!(row.idImage && row.signImage && !row.isProcessed)}
                  >
                    Respond
                  </NButton>
                )
              }}
            </NPopconfirm>
            <NButton
              ghost={true}
              size="small"
              disabled={!row.isProcessed}
              type="success"
              onClick={() => printReceipt(row)}
            >
              Receipt
            </NButton>
          </NButtonGroup>
        </NSpace>
      );
    }
  }
];

const renderUserMedia = async () => {
  (idUri.value = ''), (signUri.value = '');
  stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  });
  const video = document.querySelector('.sign-video') as HTMLVideoElement;
  video.srcObject = stream;
  video.onloadedmetadata = () => {
    video.play();
  };
};

const disposeUserMedia = () => {
  if (stream) {
    stream.getTracks().forEach(track => {
      track.stop();
    });
  }
};

const printReceipt = (row: InternalRowData) => {
  const content = `<div><h3>Receipt</h3>
	<br />
	<div>Order ID: ${row.id}</div>
	<br />
	<div>Order Status: ${row.isProcessed ? 'Processed' : 'Pending'}</div>
<br />
	<div>Order Details</div>
	<br />
	<div>Network: ${row.network}</div>
	<br />
	<div>Phone Number: ${row.phone_no}</div>
	<br />
	<div>Amount: ${row.usd_amount}</div>
	<br />
	<div>Transfered Amount: ${row.usdt_amount}</div>
	<br />
	<div>Exchange Rate: ${row.exchange_rate}</div>
	<br />
	<div>Name: ${row.first_name} ${row.last_name}</div>
	<br />
	<div>Wallet Address: ${row.wallet_address}</div>
	<br />
	<div>Order Type: ${row.type}</div>
	<br />
	<div>Order Date: ${new Date((row.date as TimeStamp).seconds * 1000)}</div>
	<br />
	<div>Commission: ${row.commission}$, ${row.commission_percentage}%</div>
	<br />
	<div>Id Image: ${row.idImage}</div>
	<br />
	<div>Sign Image: ${row.signImage}</div>
	</div>
	`;

  const iframe = document.createElement('iframe') as HTMLIFrameElement;
  iframe.name = 'myiframe';
  iframe.id = 'printFrame';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  iframe.contentDocument?.write(content);

  setTimeout(() => {
    iframe.focus();
    iframe.contentWindow?.print();
    const frame = document.getElementById('printFrame');
    frame?.parentNode?.removeChild(frame);
  }, 100);
};

const captureUserMedia = (isId: boolean) => {
  const video = document.querySelector('.sign-video') as HTMLVideoElement;
  video.pause();
  const canvas = document.querySelector('.sign-canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  context!.drawImage(video, 0, 0, canvas.width, canvas.height);
  isId ? (idUri.value = canvas.toDataURL('image/png')) : (signUri.value = canvas.toDataURL('image/png'));
  disposeUserMedia();
};

const handleUpload = async (isId: boolean, row: InternalRowData) => {
  const file = document.querySelector(isId ? '.id-file' : '.sign-file') as HTMLInputElement;
  const reader = new FileReader();
  reader.readAsDataURL(file.files![0]);
  await new Promise(resolve => {
    reader.onload = async () => {
      const res = await uploadDocument(reader.result as string);
      if (res.data?.url) {
        window.$message?.success('success');
        tableData.value.forEach(r => {
          if (r === row) {
            isId ? (row.idImage = res.data.url) : (row.signImage = res.data.url);
          }
        });
        await updateBuyAndSell(row.id as string, isId ? { idImage: res.data.url } : { signImage: res.data.url });
        resolve(true);
      } else {
        window.$message?.error('error');
        resolve(false);
      }
    };
  });
};

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

const handleModifyRequest = async (orderId: string, status: boolean) => {
  const res = await updateBuyAndSell(orderId, { isProcessed: status });
  if (res.data != null) {
    const findItem = tableData.value.find(item => item.id === orderId);
    if (findItem) {
      findItem.isProcessed = status;
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
  getPageData();
}

init();
</script>

<style scoped></style>

import { FileInfo } from 'naive-ui/es/upload/src/interface';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { request } from '../request';
import { fbApp } from '../../main';

export async function fetchUserManagementList() {
  return await request.get<ApiUserManagement.UserTable[]>('/ckrd-users');
}

export async function fetchPremiumRequests() {
  return await request.get<ApiUserManagement.PremiumRequestTable[]>('/premium-requests');
}

export async function fetchBuyAndSell() {
  return await request.get<ApiManagement.BuyAndSell[]>('/buy-and-sell');
}

export async function modifyPremiumRequest(userId: string, status: boolean) {
  return await request.post<ApiUserManagement.PremiumRequestTable[]>('/premium-requests', {
    userId,
    status
  });
}

export async function uploadPremContent(file: File) {
  // for (let i = 0; i < files.length; i++) {
  // 	data.push({
  // 		data: await files.item(i)?.arrayBuffer(),
  // 		type: files.item(i)?.type,
  // 		name: files.item(i)?.name,
  // 	});
  // }
  const db = getStorage(fbApp);
  const docRef = ref(db, `premium/${file.name}`);
  const uploadTask = uploadBytesResumable(docRef, file, {
    contentType: file.type
  });
  return await new Promise(resolve => {
    uploadTask.catch(error => {
      resolve({ code: 500, message: error.message });
    });
    uploadTask.on('state_changed', async snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (progress === 100) {
        resolve({
          code: 200,
          message: 'ok',
          data: { url: await getDownloadURL(docRef), type: file.type }
        });
      }
    });
  });
}

export async function uploadDocument(base64: string) {
  return await request.post<ApiManagement.DocumentUpload>('/upload-document', {
    data: base64
  });
}

export async function updateBuyAndSell(id: string, data: Object) {
  return await request.post<ApiManagement.UpdateDocument>(`/buy-and-sell/${id}`, data);
}

export async function getReports(startDate: number, endDate: number) {
  return await request.get<ApiManagement.GetReport>(
    `/report/startDate=${startDate.toString()}&endDate=${endDate.toString()}`
  );
}

export async function getStatistics() {
  return await request.get<ApiManagement.GetStatistics>('/statistics');
}

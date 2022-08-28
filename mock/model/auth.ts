import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { fbApp } from '../../src/main';

interface UserModel extends Auth.UserInfo {
  token: string;
  refreshToken: string;
  password: string;
}

export const getUsers = async () => {
  const db = getFirestore(fbApp);
  const users = collection(db, 'users');
  const usersSnapshot = await getDocs(users);
  const userList = usersSnapshot.docs.map(doc => doc.data());
  return userList;
};

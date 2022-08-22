import { StorageApiType } from "Domain/StorageApi/Types";
import { localStorageApi } from "Domain/StorageApi/Metadata";
import { getApiByType, getChromeApiByType } from "Domain/StorageApi/Utils";

export const getAllStorageSyncData = (
  storageApiType: StorageApiType = localStorageApi
) => {
  return new Promise((resolve, reject) => {
    getApiByType(storageApiType).get(null, (items: any) => {
      if (getChromeApiByType(storageApiType).runtime.lastError) {
        return reject(getChromeApiByType(storageApiType).runtime.lastError);
      }
      resolve(items);
    });
  });
};

export const setDefaultAllStorageSyncData = ({
  storageApiType = localStorageApi,
  data,
}: {
  storageApiType?: StorageApiType;
  data;
}) => {
  return new Promise((resolve) => {
    getApiByType(storageApiType).set(data, () => {
      resolve(data);
    });
  });
};

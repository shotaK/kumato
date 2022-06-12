export const StorageApiType = {
  local: "local",
  sync: "sync",
  managed: "managed",
  session: "session",
} as const;

export type StorageApiType = typeof StorageApiType[keyof typeof StorageApiType];

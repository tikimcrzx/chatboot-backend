export enum BranchStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export function getAllBranchStatus() {
  return [BranchStatus.ENABLED, BranchStatus.DISABLED];
}

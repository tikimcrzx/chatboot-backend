export enum CompanyStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export function getAllCompanyStatus() {
  return [CompanyStatus.ENABLED, CompanyStatus.DISABLED];
}

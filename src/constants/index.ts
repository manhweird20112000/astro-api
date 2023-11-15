export enum ValidateType {
  create,
  update,
}
export enum Status {
  inactive,
  active,
  approval,
  temporaryLock,
  block,
}

export enum Roles {
  SuperAdmin = 1,
  Admin = 2,
  Normal = 3,
}

export enum PermissionAction {
  view,
  created,
  update,
  delete,
}

export enum Gender {
  female,
  male,
  other,
}

export enum ESort {
  asc = 'asc',
  desc = 'desc',
}

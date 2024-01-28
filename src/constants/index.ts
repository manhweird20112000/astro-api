export enum ValidateType {
  create,
  update,
}
export enum Status {
  inactive,
  active,
  block,
}

export enum Roles {
  SuperAdmin = 1,
  Admin = 2,
  Normal = 3,
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

export enum ELevel {
  easy,
  medium,
  hard,
  exceptional,
}

export enum EBookmark {
  doNotSave,
  save,
}

export enum EAuthType {
  normal,
  oauth,
}

export enum ESocialType {
  normal = 'normal',
  facebook = 'facebook',
  google = 'google',
}

export enum EWebType {
  Web1 = 'WEB1',
  Web2 = 'WEB2',
  Web3 = 'WEB3',
}

export type TWebType = EWebType | null

export enum ERestFramework {
  FLASK = 'Flask',
  FASTAPI = 'FastAPI',
  DJANGO = 'Django',
  ACTIX = 'Actix',
}

export type TRestFramework = ERestFramework | null

export type TRestFrameworkOption = {
  name: ERestFramework
  avatar: string
}

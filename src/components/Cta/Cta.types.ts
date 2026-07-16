import { ERestFramework, TRestFramework, TWebType } from 'typings/configuration.types'

export type TCtaWebDefaultProps = {
  onWebTypeChoose: (webType: TWebType) => void
}

export type TCtaWeb2Props = {
  restFramework: TRestFramework
  onRestFrameworkChoose: (restFramework: ERestFramework) => void
  onCvClick: () => void
}

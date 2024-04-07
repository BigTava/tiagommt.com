import { ButtonDefault } from 'components/Button'
import { EWebType } from 'typings/configuration.types'

import { TCtaWebDefaultProps } from './Cta.types'
import { CtaContainer } from './CtaContainer'

export const CtaDefault: React.FC<TCtaWebDefaultProps> = ({ onWebTypeChoose }) => (
  <CtaContainer>
    <ButtonDefault
      label='WEB 1'
      onClick={() => onWebTypeChoose(EWebType.Web1)}
      color='transparent'
    />
    <ButtonDefault label='WEB 2' onClick={() => onWebTypeChoose(EWebType.Web2)} color='primary' />
    <ButtonDefault label='WEB 3' onClick={() => onWebTypeChoose(EWebType.Web3)} disabled />
  </CtaContainer>
)

import cv from 'assets/docs/CV_Tiago_Tavares.pdf'
import { ButtonDefault } from 'components/Button'

import { CtaContainer } from './CtaContainer'

export const CtaWeb1: React.FC = () => (
  <CtaContainer>
    <ButtonDefault href={cv} label='Download CV' color='primary' download />
  </CtaContainer>
)

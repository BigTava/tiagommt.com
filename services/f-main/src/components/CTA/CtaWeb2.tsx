import { useEffect } from 'react'

import { ButtonDefault } from 'components/Button'
import { InputSelect } from 'components/InputSelect'
import { REST_FRAMEWORK_OPTIONS } from 'constants/rest-frameworks'
import { ERestFramework } from 'typings/configuration.types'

import { TCtaWeb2Props } from './Cta.types'
import { CtaContainer } from './CtaContainer'

export const CtaWeb2: React.FC<TCtaWeb2Props> = ({
  restFramework,
  onRestFrameworkChoose,
  onCvClick,
}) => {
  useEffect(() => {
    if (!restFramework) {
      onRestFrameworkChoose(ERestFramework.ACTIX)
    }
  })
  return (
    <CtaContainer>
      <InputSelect
        options={REST_FRAMEWORK_OPTIONS}
        onChange={(option) => onRestFrameworkChoose(option.name as ERestFramework)}
      />
      <ButtonDefault label='GET CV' color='primary' onClick={onCvClick} />
    </CtaContainer>
  )
}

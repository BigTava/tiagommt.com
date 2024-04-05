import { useGetCvMutation } from 'rest/cvApiSlice'

import me from 'assets/images/pfp.png'
import { CtaDefault, CtaWeb1, CtaWeb2 } from 'components/Cta'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import Nav from 'components/Nav'
import { selectRestFramework, selectWebType } from 'state/configuration/configuration.selectors'
import { updateRestFramework, updateWebType } from 'state/configuration/configuration.slice'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import { ERestFramework, EWebType, TWebType } from 'typings/configuration.types'

import './styles.css'

export function Main() {
  const dispatch = useAppDispatch()
  const webType = useAppSelector(selectWebType)
  const restFramework = useAppSelector(selectRestFramework)

  const onWebTypeChoose = (webType: TWebType) => {
    dispatch(updateWebType(webType))
  }

  const onRestFrameworkChoose = (restFramework: ERestFramework) => {
    dispatch(updateRestFramework(restFramework))
  }

  const [getCv] = useGetCvMutation()

  const onCvClick = async () => {
    try {
      const result = await getCv(undefined).unwrap()
      const hiddenElement = document.createElement('a')
      const url = window.URL || window.webkitURL
      const blobPDF = url.createObjectURL(result)
      hiddenElement.href = blobPDF
      hiddenElement.target = '_blank'
      hiddenElement.download = 'CV'
      hiddenElement.click()
      return { data: null }
    } catch (err) {
      console.log(err)
    }
  }

  const webTypeToCta: any = {
    [EWebType.Web1]: <CtaWeb1 />,
    [EWebType.Web2]: (
      <CtaWeb2
        restFramework={restFramework}
        onRestFrameworkChoose={onRestFrameworkChoose}
        onCvClick={onCvClick}
      />
    ),
  }

  return (
    <>
      <header id='home' className='h-fit pt-16 overflow-hidden'>
        <div className='container header__container'>
          <h5>Hello I&apos;m</h5>
          <h1>
            <a onClick={() => dispatch(updateWebType(null))}>Tiago Tavares</a>
          </h1>
          <h5 className='text-light'>Blockchain Developer</h5>
          <div className='header__cta'>
            {webType === null ? <h5>Please Choose...</h5> : <h5>Wise Choice!</h5>}
            {webType ? (
              webTypeToCta[webType as EWebType]
            ) : (
              <CtaDefault onWebTypeChoose={onWebTypeChoose} />
            )}
          </div>
          <div className='w-full mt-16 justify-center'>
            <div className='max-w-[20rem] w-[94%] md:w-[22rem] h-[30rem] mx-auto pt-[5rem] px-[1.5rem] bg-gradient-to-b from-primary to-transparent  rounded-t-full  '>
              <img className='h-[22rem] block mx-auto object-cover' src={me} alt='Tiago Tavares' />
            </div>
          </div>

          <div className='header__socials'>
            <Icon type='linkedIn' />
            <Icon type='gitHub' />
            <Icon type='gitLab' />
          </div>

          <a href='#contact' className='scroll__down'>
            Scroll Down
          </a>
        </div>
      </header>
      <Nav />
      <Footer />
    </>
  )
}

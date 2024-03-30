import FLASK_LOGO from 'assets/logos/flask-logo.svg'
import FASTAPI_LOGO from 'assets/logos/fastapi-logo.svg'
import DJANGO_LOGO from 'assets/logos/django-logo.svg'
import ACTIX_LOGO from 'assets/logos/actix-logo.png'

enum ERestFrameworks {
  FLASK = 'Flask',
  FASTAPI = 'FastAPI',
  DJANGO = 'Django',
  ACTIX = 'Actix',
}

type TRestFrameworkOption = {
  name: ERestFrameworks
  avatar: string
}

export const REST_FRAMEWORK_OPTIONS: TRestFrameworkOption[] = [
  // {
  //   name: ERestFrameworks.FLASK,
  //   avatar: FLASK_LOGO,
  // },
  // {
  //   name: ERestFrameworks.FASTAPI,
  //   avatar: FASTAPI_LOGO,
  // },
  // {
  //   name: ERestFrameworks.DJANGO,
  //   avatar: DJANGO_LOGO,
  // },
  {
    name: ERestFrameworks.ACTIX,
    avatar: ACTIX_LOGO,
  },
]
import logo from '/logo.svg'
import Navigation from '../components/navigation/navbar'
import NavigationItem from '../models/navigationItem'
import { routes } from '../router'
import { useNavigate } from 'react-router'
import i18n from '../i18n'

function Root() {
  const navigate = useNavigate()

  const navigationItems: Array<NavigationItem> = [
    {
      title: i18n.get('home'),
      active: true,
      onClick: () => { navigate(routes.HOME.path) }
    },
    {
      title: i18n.get('findDoctor'),
      active: false,
      onClick: () => { navigate(routes.SEARCH.path) }
    },
    {
      title: i18n.get('apps'),
      active: false,
      onClick: () => { navigate(routes.APPS.path) },
    },
    {
      title: i18n.get('testimonials'),
      active: false,
      onClick: () => { navigate(routes.TESTIMONIALS.path) },
    },
    {
      title: i18n.get('about'),
      active: false,
      onClick: () => { navigate(routes.ABOUT.path) },
    }
  ]
  
  return (
    <>
      <Navigation
        logo={{
          title: i18n.get('logoText'),
          image: logo,
          onClick: () => {}
        }}
        items={navigationItems}
      />
    </>
  )
}

export default Root

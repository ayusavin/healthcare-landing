import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import logo from '/logo.svg'
import Navigation from '../components/navigation/navbar'
import NavigationItem from '../models/navigationItem'
import { routes } from '../router'
import { useNavigate } from 'react-router'

function Root() {
  const navigate = useNavigate()

  const navigationItems: Array<NavigationItem> = [
    {
      title: 'Home',
      active: true,
      onClick: () => { navigate(routes.HOME.path) }
    },
    {
      title: 'Find a doctor',
      active: false,
      onClick: () => { navigate(routes.SEARCH.path) }
    },
    {
      title: 'Apps',
      active: false,
      onClick: () => { navigate(routes.APPS.path) },
    },
    {
      title: 'Testimonials',
      active: false,
      onClick: () => { navigate(routes.TESTIMONIALS.path) },
    },
    {
      title: 'About us',
      active: false,
      onClick: () => { navigate(routes.ABOUT.path) },
    }
  ]
  
  return (
    <>
      <Navigation
        logo={{
          title: 'HealthCare',
          image: logo,
          onClick: () => {console.log('sfasfas')}
        }}
        items={navigationItems}
      />
    </>
  )
}

export default Root

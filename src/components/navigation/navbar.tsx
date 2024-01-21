import NavigationItem from '../../models/navigationItem'
import styles from './navbar.module.scss'
import Logo from '../../models/logo'

const Navigation = (props: {
  logo?: Logo,
  items: NavigationItem[],
}) => {

  const {logo, items} = props;

  const renderItems = () => 
    items.map(
      ({ title, active, onClick }) => 
        <a key={`nav-${title}`} onClick={() => onClick()} className={active ? styles.active : ''}>
          {title}
        </a>
    )

  return <nav className={styles.nav}>
      { logo !== undefined &&
        <div className={styles.logoContainer} onClick={(_) => logo!.onClick()}>
          { logo!.image !== undefined  &&
            <img src={logo!.image}></img>
          }
          {logo!.title}
        </div>
      }
      <div className={styles.links}>
          {renderItems()}
      </div>
  </nav>
}

export default Navigation;
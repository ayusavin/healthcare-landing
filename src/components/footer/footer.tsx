import style from './footer.module.scss';

const Footer = (props: {
    logoText: string,
    columns: Array<{title: string, tabs: Array<{title: string, url: string}>}>
}) => {
    return <footer className={style.footer}>
        <div className={style.column}>
            <div className={style.logoContainer}>
                <div className={style.logo}>{'T'}</div>
                {props.logoText}
            </div>

            <div>
                HealthCare provides progressive, and affordable healthcare, accessible on mobile and online
            </div>

            <div>
                ©HealthCare PTY LTD 2024. All rights reserved
            </div>
        </div>

        {props.columns.map(
          ({title, tabs}) => {
            return (
              <div className={style.column}>
                <div className={style.title}>{title}</div>
                {tabs.map((tab) => (<a href={tab.url}>{tab.title}</a>))}
              </div>
            )
          }
        )}
    </footer>
}

export default Footer;

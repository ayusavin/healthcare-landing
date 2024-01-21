import Banner from "../../components/banner/banner";
import Root from "../../routes/root";
import Button from '../../components/ellipseButton/button';
import CardGrid from "../../components/cardGrid/grid";
import style from "../../components/card/card.module.scss";

import virtual_healthcare_banner from '/pages/homepage/images/ic_first_banner.png';
import leading_provider_banner from  '/pages/homepage/images/ic_second_banner.png';
import download_app_banner from '/pages/homepage/images/ic_third_banner.png';
import downArrow from '/icons/ic_down_arrow.svg';
import rightArrow from '/icons/ic_right_arrow.svg'

import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import articleService from "../../services/articleService";
import serviceService from "../../services/serviceService";
import i18n from "../../i18n";

export default function HomePage() {

  const articleCards = Array.from(articleService.listAll()).map((item, index) => {
    return <Card
      key={`article_card_${index}`}
      image={item.image}
      imageFull={true}
      title={item.title}
      description={item.description}
      button={<a href={item.url}>{i18n.get('readMore')}</a>}
      arrowButton={rightArrow}
    />
  })

  const serviceCards = Array.from(serviceService.listAll()).map((item, index) => {
    return <Card
      key={`service_card_${index}`}
      image={item.image}
      title={item.title}
      description={item.description} />
  });

  return (
    <>
    <Root />
    <Banner
        title={i18n.get('virtualHealthcareTitle')}
        content={i18n.get('virtualHealthcareDescription')}
        button={
          <div style={{ paddingTop: '40px' }}>
            <Button type='primary' text="Consult Today" />
          </div>
        }
        image={virtual_healthcare_banner} />

    <CardGrid
    title={i18n.get('ourServicesTitle')}
    description={i18n.get('ourServicesDescription')}
    button={<Button text={i18n.get('learnMore')} />}>
    
    {serviceCards}
    </CardGrid>

    <Banner
        separator={true}
        type='reverse'
        title={i18n.get('leadingProvidersTitle')}
        content={i18n.get('leadingProvidersDescription')}
        button={
          <div style={{ paddingTop: '40px' }}>
            <Button text={i18n.get('learnMore')} />
          </div>
        }
        image={leading_provider_banner} />

      <Banner
        separator={true}
        title={i18n.get('downloadAppTitle')}
        content={i18n.get('downloadAppDescription')}
        button={
          <div style={{ paddingTop: '20px' }}>
            <Button text={i18n.get('download')} content={
              <img className={style.img}
                src={downArrow}
                width={15}
                height={15}
                alt='arrow-down'
              />
            } />
          </div>
        }
        image={download_app_banner} />

      <CardGrid
        type='right'
        title={i18n.get('lastArticleTitle')}
        button={<Button text={i18n.get('viewAll')} onClick={() => {}} />}>
        {articleCards}
      </CardGrid>

      <Footer 
        logoText={i18n.get('logoText')} 
        columns={
          [
            {title: 'Company', tabs: [
                {title: 'About', url: ''},
                {title: 'Testimonials', url: ''},
                {title: 'Find a doctor', url: ''},
                {title: 'Apps', url: ''}
            ]},
              {title: 'Region', tabs: [
              {title: 'Indonesia', url: ''},
              {title: 'Singapore', url: ''},
              {title: 'Hongkong', url: ''},
              {title: 'Canada', url: ''}
            ]},
              {title: 'Help', tabs: [
              {title: 'Help center', url: ''},
              {title: 'Contact support', url: ''},
              {title: 'Instructions', url: ''},
              {title: 'How it works', url: ''}
            ]}
          ]
      }
      />

  </>
)}
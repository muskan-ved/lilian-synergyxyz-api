import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialMediaLinksSocial extends Schema.Component {
  collectionName: 'components_social_media_links_socials';
  info: {
    displayName: 'social';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'social-media-links.social-media-links'>;
    title: Attribute.String;
  };
}

export interface SocialMediaLinksSocialMediaLinks extends Schema.Component {
  collectionName: 'components_social_media_links_social_media_links';
  info: {
    displayName: 'Social Media Links';
    description: '';
  };
  attributes: {
    facebook: Attribute.String;
    instagram: Attribute.String;
    linkedIn: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text & Attribute.Required;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedButtons extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Buttons';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    buttonText: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ServiceServicesCard extends Schema.Component {
  collectionName: 'components_service_services_cards';
  info: {
    displayName: 'Services Card';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

export interface ServiceServiceHeading extends Schema.Component {
  collectionName: 'components_service_service_headings';
  info: {
    displayName: 'Service Heading';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageDetail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'shared.buttons'>;
  };
}

export interface ServiceServiceDifferentiator extends Schema.Component {
  collectionName: 'components_service_service_differentiators';
  info: {
    displayName: 'Service Differentiator';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    order: Attribute.String;
  };
}

export interface MainPageContent extends Schema.Component {
  collectionName: 'components_main_page_contents';
  info: {
    displayName: 'PageContent';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    content: Attribute.Blocks;
    slug: Attribute.String;
  };
}

export interface MainHeader extends Schema.Component {
  collectionName: 'components_main_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
    isBadge: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface MainFooter extends Schema.Component {
  collectionName: 'components_main_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    reservedRight: Attribute.String;
    description: Attribute.Text;
    phone: Attribute.String;
    whatsAppNumber: Attribute.String;
    address: Attribute.Text;
    email: Attribute.String;
    subTitle: Attribute.String;
    availableTime: Attribute.String;
    availableDays: Attribute.String;
    buttons: Attribute.Component<'shared.buttons', true>;
    contactUs: Attribute.String;
    pageLinks: Attribute.Component<'shared.buttons', true>;
  };
}

export interface MainDifferentiatorBody extends Schema.Component {
  collectionName: 'components_main_differentiator_bodies';
  info: {
    displayName: 'DifferentiatorBody';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    differentiator: Attribute.Component<'service.service-differentiator', true>;
  };
}

export interface MainCardBody extends Schema.Component {
  collectionName: 'components_main_card_bodies';
  info: {
    displayName: 'CardBody';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    card: Attribute.Component<'service.services-card', true>;
  };
}

export interface MainAboutUsBody extends Schema.Component {
  collectionName: 'components_main_about_us_bodies';
  info: {
    displayName: 'AboutUsBody';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    card: Attribute.Component<'about-us.banner', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePageOurStory extends Schema.Component {
  collectionName: 'components_home_page_our_stories';
  info: {
    displayName: 'Our Story';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    highlightText: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    videos: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    buttons: Attribute.Component<'shared.buttons'>;
  };
}

export interface HomePageOurMethod extends Schema.Component {
  collectionName: 'components_home_page_our_methods';
  info: {
    displayName: 'Our Method';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttons: Attribute.Component<'shared.buttons'>;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePageOurExpertise extends Schema.Component {
  collectionName: 'components_home_page_our_expertises';
  info: {
    displayName: 'OurExpertise';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    subTitle: Attribute.String;
    buttons: Attribute.Component<'shared.buttons'>;
  };
}

export interface HomePageBanner extends Schema.Component {
  collectionName: 'components_home_page_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    backImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactInfoContactUs extends Schema.Component {
  collectionName: 'components_contact_info_contact_uses';
  info: {
    displayName: 'Contact Us';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    phone: Attribute.Blocks;
    email: Attribute.Blocks;
    availableTime: Attribute.String;
    availableDays: Attribute.String;
    whatsAppNumber: Attribute.Blocks;
    address: Attribute.Blocks;
  };
}

export interface AboutUsBanner extends Schema.Component {
  collectionName: 'components_about_us_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social-media-links.social': SocialMediaLinksSocial;
      'social-media-links.social-media-links': SocialMediaLinksSocialMediaLinks;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'shared.buttons': SharedButtons;
      'service.services-card': ServiceServicesCard;
      'service.service-heading': ServiceServiceHeading;
      'service.service-differentiator': ServiceServiceDifferentiator;
      'main.page-content': MainPageContent;
      'main.header': MainHeader;
      'main.footer': MainFooter;
      'main.differentiator-body': MainDifferentiatorBody;
      'main.card-body': MainCardBody;
      'main.about-us-body': MainAboutUsBody;
      'home-page.our-story': HomePageOurStory;
      'home-page.our-method': HomePageOurMethod;
      'home-page.our-expertise': HomePageOurExpertise;
      'home-page.banner': HomePageBanner;
      'contact-info.contact-us': ContactInfoContactUs;
      'about-us.banner': AboutUsBanner;
    }
  }
}

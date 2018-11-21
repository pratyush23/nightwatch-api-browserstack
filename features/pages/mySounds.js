module.exports = {

  url: function () {
    return 'https://www.bbc.co.uk/sounds/my';
  },

  elements: {
    selectedsubNav: { selector: '.sc-c-navigation-sub-nav__link--selected' },
    subscribed: { selector: '.sc-c-navigation-sub-nav > :nth-child(1)' },
    latest: { selector: '.sc-c-navigation-sub-nav > :nth-child(2)' },
    heading: { selector: '.sc-c-sign-in-upsell__title h2' }
  },
  sections: {
    mySoundsFooter: {
      selector: '.sc-c-navigation-footer',
      elements: {
        iplayer_radio_help: { selector: '.sc-c-navigation-footer__links > :nth-child(1)' },
        contacts_and_information: { selector: '.sc-c-navigation-footer__links > :nth-child(2)' },
        help_with_signing_up_in: { selector: '.sc-c-navigation-footer__links > :nth-child(3)' },
        cymraeg: { selector: '.sc-c-navigation-footer__languages >:nth-child(1) >:nth-child(1)' },
        gaeilge: { selector: '.sc-c-navigation-footer__languages >:nth-child(2) >:nth-child(1)' },
        gàidhlig: { selector: '.sc-c-navigation-footer__languages >:nth-child(3) >:nth-child(1)' }
      }
    },
    latestCards: {
      selector: '.sc-c-basic-slice',
      elements: {
        image: { selector: '.sc-o-responsive-image' },
        primary_title: { selector: '.sc-c-metadata__primary' },
        secondary_title: { selector: '.sc-c-metadata__secondary' },
        duration: { selector: '.sc-c-metadata__duration' }
      }
    },

    signOutUpsell: {
      selector: '.sc-c-sign-in-upsell',
      elements: {
        signinButton: { selector: '.id4-cta-signin' },
        registerButton: { selector: '.id4-cta-register' },
        addIcon: { selector: '.sc-c-icon--add' },
        subscribeIcon: { selector: '.sc-c-icon--podcast-mini' },
        compassIcon: { selector: '.sc-c-icon--explore' },
        addIconExpainer: { selector: '.sc-c-sign-in-upsell__features >:nth-child(1) >:nth-child(2) >:nth-child(1) >:nth-child(1)' },
        subscribeIconExplainer: { selector: '.sc-c-sign-in-upsell__features >:nth-child(2) >:nth-child(2) >:nth-child(1) >:nth-child(1)' },
        compassIconExplainer: { selector: '.sc-c-sign-in-upsell__features >:nth-child(3) >:nth-child(2) >:nth-child(1) >:nth-child(1)' },
        addIconDescription: { selector: '.sc-c-sign-in-upsell__features >:nth-child(1) >:nth-child(2) >:nth-child(1) >:nth-child(2)' },
        subscribeIconDescription: { selector: '.sc-c-sign-in-upsell__features >:nth-child(2) >:nth-child(2) >:nth-child(1) >:nth-child(2)' },
        compassIconDescription: { selector: '.sc-c-sign-in-upsell__features >:nth-child(3) >:nth-child(2) >:nth-child(1) >:nth-child(2)' }
      }
    }

  }
};

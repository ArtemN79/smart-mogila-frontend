import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSmartMogilaЗахоронениеLForm from './forms/i-i-s-smart-mogila-захоронение-l';
import IISSmartMogilaКварталLForm from './forms/i-i-s-smart-mogila-квартал-l';
import IISSmartMogilaКладбищеLForm from './forms/i-i-s-smart-mogila-кладбище-l';
import IISSmartMogilaЗахоронениеEForm from './forms/i-i-s-smart-mogila-захоронение-e';
import IISSmartMogilaКварталEForm from './forms/i-i-s-smart-mogila-квартал-e';
import IISSmartMogilaКладбищеEForm from './forms/i-i-s-smart-mogila-кладбище-e';
import IISSmartMogilaЗахоронениеModel from './models/i-i-s-smart-mogila-захоронение';
import IISSmartMogilaКварталModel from './models/i-i-s-smart-mogila-квартал';
import IISSmartMogilaКладбищеModel from './models/i-i-s-smart-mogila-кладбище';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-smart-mogila-захоронение': IISSmartMogilaЗахоронениеModel,
    'i-i-s-smart-mogila-квартал': IISSmartMogilaКварталModel,
    'i-i-s-smart-mogila-кладбище': IISSmartMogilaКладбищеModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'smart-mogila': {
          caption: 'smart-mogila',
          title: 'smart-mogila',
          'i-i-s-smart-mogila-кладбище-l': {
            caption: 'i-i-s-smart-mogila-кладбище-l',
            title: 'i-i-s-smart-mogila-кладбище-l'
          },
          'i-i-s-smart-mogila-захоронение-l': {
            caption: 'i-i-s-smart-mogila-захоронение-l',
            title: 'i-i-s-smart-mogila-захоронение-l'
          },
          'i-i-s-smart-mogila-квартал-l': {
            caption: 'i-i-s-smart-mogila-квартал-l',
            title: 'i-i-s-smart-mogila-квартал-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-smart-mogila-захоронение-l': IISSmartMogilaЗахоронениеLForm,
    'i-i-s-smart-mogila-квартал-l': IISSmartMogilaКварталLForm,
    'i-i-s-smart-mogila-кладбище-l': IISSmartMogilaКладбищеLForm,
    'i-i-s-smart-mogila-захоронение-e': IISSmartMogilaЗахоронениеEForm,
    'i-i-s-smart-mogila-квартал-e': IISSmartMogilaКварталEForm,
    'i-i-s-smart-mogila-кладбище-e': IISSmartMogilaКладбищеEForm
  },

});

export default translations;

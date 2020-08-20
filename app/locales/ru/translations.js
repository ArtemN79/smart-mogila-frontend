import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Smart mogila',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Smart mogila',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Smart mogila',
          title: 'Smart mogila'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'smart-mogila': {
          caption: 'SmartMogila',
          title: 'SmartMogila',
          'i-i-s-smart-mogila-кладбище-l': {
            caption: 'Кладбище',
            title: ''
          },
          'i-i-s-smart-mogila-захоронение-l': {
            caption: 'Захоронение',
            title: ''
          },
          'i-i-s-smart-mogila-квартал-l': {
            caption: 'Квартал',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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

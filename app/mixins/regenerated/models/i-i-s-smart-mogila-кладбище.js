import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  адрес: DS.attr('string'),
  площадь: DS.attr('decimal'),
  фиоРуководителя: DS.attr('string')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-smart-mogila-кладбище.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-smart-mogila-кладбище.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-smart-mogila-кладбище.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  фиоРуководителя: {
    descriptionKey: 'models.i-i-s-smart-mogila-кладбище.validations.фиоРуководителя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КладбищеE', 'i-i-s-smart-mogila-кладбище', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    площадь: attr('Площадь', { index: 2 }),
    фиоРуководителя: attr('Фио руководителя', { index: 3 })
  });

  modelClass.defineProjection('КладбищеL', 'i-i-s-smart-mogila-кладбище', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    площадь: attr('Площадь', { index: 2 }),
    фиоРуководителя: attr('Фио руководителя', { index: 3 })
  });
};

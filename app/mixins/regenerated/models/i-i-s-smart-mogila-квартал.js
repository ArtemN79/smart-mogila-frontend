import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string'),
  площадь: DS.attr('decimal'),
  кладбище: DS.belongsTo('i-i-s-smart-mogila-кладбище', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-smart-mogila-квартал.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  площадь: {
    descriptionKey: 'models.i-i-s-smart-mogila-квартал.validations.площадь.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  кладбище: {
    descriptionKey: 'models.i-i-s-smart-mogila-квартал.validations.кладбище.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КварталE', 'i-i-s-smart-mogila-квартал', {
    номер: attr('Номер', { index: 0 }),
    площадь: attr('Площадь', { index: 1 }),
    кладбище: belongsTo('i-i-s-smart-mogila-кладбище', 'Кладбище', {
      название: attr('Название', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('КварталL', 'i-i-s-smart-mogila-квартал', {
    номер: attr('Номер', { index: 0 }),
    площадь: attr('Площадь', { index: 1 }),
    кладбище: belongsTo('i-i-s-smart-mogila-кладбище', 'Название', {
      название: attr('Название', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

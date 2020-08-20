import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('number'),
  фИО: DS.attr('string'),
  датаРождения: DS.attr('date'),
  датаСмерти: DS.attr('date'),
  наличиеОграды: DS.attr('boolean', { defaultValue: false }),
  фото: DS.attr('file'),
  состояниеЗахоронения: DS.attr('i-i-s-smart-mogila-состояние-захоронения'),
  состояниеНадгробия: DS.attr('i-i-s-smart-mogila-состояние-захоронения'),
  координатыЗахоронения: DS.attr('decimal'),
  квартал: DS.belongsTo('i-i-s-smart-mogila-квартал', { inverse: null, async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаСмерти: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.датаСмерти.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеОграды: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.наличиеОграды.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фото: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.фото.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеЗахоронения: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.состояниеЗахоронения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеНадгробия: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.состояниеНадгробия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  координатыЗахоронения: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.координатыЗахоронения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  квартал: {
    descriptionKey: 'models.i-i-s-smart-mogila-захоронение.validations.квартал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗахоронениеE', 'i-i-s-smart-mogila-захоронение', {
    инвНомер: attr('Инв номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    датаСмерти: attr('Дата смерти', { index: 3 }),
    состояниеЗахоронения: attr('Состояние захоронения', { index: 4 }),
    состояниеНадгробия: attr('Состояние надгробия', { index: 5 }),
    наличиеОграды: attr('Наличие ограды', { index: 6 }),
    фото: attr('Фото', { index: 7 }),
    координатыЗахоронения: attr('Координаты захоронения', { index: 8 }),
    квартал: belongsTo('i-i-s-smart-mogila-квартал', 'Квартал', {
      номер: attr('Номер', { index: 10 })
    }, { index: 9 })
  });

  modelClass.defineProjection('ЗахоронениеL', 'i-i-s-smart-mogila-захоронение', {
    инвНомер: attr('Инв номер', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    датаСмерти: attr('Дата смерти', { index: 3 }),
    состояниеЗахоронения: attr('Состояние захоронения', { index: 4 }),
    состояниеНадгробия: attr('Состояние надгробия', { index: 5 }),
    наличиеОграды: attr('Наличие ограды', { index: 6 }),
    фото: attr('Фото', { index: 7 }),
    координатыЗахоронения: attr('Координаты захоронения', { index: 8 }),
    квартал: belongsTo('i-i-s-smart-mogila-квартал', 'Номер', {
      номер: attr('Номер', { index: 9 })
    }, { index: -1, hidden: true })
  });
};

import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('захоронение', 'Захоронениеs');
inflector.irregular('кладбище', 'Кладбищеs');
inflector.irregular('квартал', 'Кварталs');

export default {};

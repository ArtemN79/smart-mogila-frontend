import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеЗахороненияEnum from '../enums/i-i-s-smart-mogila-состояние-захоронения';

export default FlexberryEnum.extend({
  enum: СостояниеЗахороненияEnum,
  sourceType: 'IIS.SmartMogila.СостояниеЗахоронения'
});

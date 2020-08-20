import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеНадгробияEnum from '../enums/i-i-s-smart-mogila-состояние-надгробия';

export default FlexberryEnum.extend({
  enum: СостояниеНадгробияEnum,
  sourceType: 'IIS.SmartMogila.СостояниеНадгробия'
});

import { Serializer as КварталSerializer } from
  '../mixins/regenerated/serializers/i-i-s-smart-mogila-квартал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КварталSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

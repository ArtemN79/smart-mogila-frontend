import { Serializer as КладбищеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-smart-mogila-кладбище';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КладбищеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

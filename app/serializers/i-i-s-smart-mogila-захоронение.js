import { Serializer as ЗахоронениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-smart-mogila-захоронение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗахоронениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

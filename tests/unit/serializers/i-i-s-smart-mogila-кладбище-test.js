import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-smart-mogila-кладбище', 'Unit | Serializer | i-i-s-smart-mogila-кладбище', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-smart-mogila-кладбище',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-smart-mogila-состояние-захоронения',
    'transform:i-i-s-smart-mogila-состояние-надгробия',

    'model:i-i-s-smart-mogila-захоронение',
    'model:i-i-s-smart-mogila-квартал',
    'model:i-i-s-smart-mogila-кладбище',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

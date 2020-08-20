import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-smart-mogila-захоронение', 'Unit | Model | i-i-s-smart-mogila-захоронение', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-smart-mogila-захоронение',
    'model:i-i-s-smart-mogila-квартал',
    'model:i-i-s-smart-mogila-кладбище',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

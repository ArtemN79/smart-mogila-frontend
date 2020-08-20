import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-smart-mogila-захоронение-l');
  this.route('i-i-s-smart-mogila-захоронение-e',
  { path: 'i-i-s-smart-mogila-захоронение-e/:id' });
  this.route('i-i-s-smart-mogila-захоронение-e.new',
  { path: 'i-i-s-smart-mogila-захоронение-e/new' });
  this.route('i-i-s-smart-mogila-квартал-l');
  this.route('i-i-s-smart-mogila-квартал-e',
  { path: 'i-i-s-smart-mogila-квартал-e/:id' });
  this.route('i-i-s-smart-mogila-квартал-e.new',
  { path: 'i-i-s-smart-mogila-квартал-e/new' });
  this.route('i-i-s-smart-mogila-кладбище-l');
  this.route('i-i-s-smart-mogila-кладбище-e',
  { path: 'i-i-s-smart-mogila-кладбище-e/:id' });
  this.route('i-i-s-smart-mogila-кладбище-e.new',
  { path: 'i-i-s-smart-mogila-кладбище-e/new' });
});

export default Router;

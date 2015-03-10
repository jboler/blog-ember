/* global moment:true */

import Ember from 'ember';

export function dateFormat(params) {
  return moment(params[0]).format('MM/DD/YYYY');
}

export default Ember.HTMLBars.makeBoundHelper(dateFormat);

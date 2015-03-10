/* global moment:true */

import Ember from 'ember';

export function dateFormat(value, options) {
  return moment(value).format('MM/DD/YYYY');
}

export default Ember.HTMLBars.makeBoundHelper(dateFormat);

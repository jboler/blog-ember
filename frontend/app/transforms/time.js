/* global moment:true */

import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    if (serialized) {
      return moment(serialized).toDate();
    }
    return serialized;
  },

  serialize: function(deserialized) {
    if (deserialized) {
      return moment(deserialized).toISOString();
    }
    return deserialized;
  }
});

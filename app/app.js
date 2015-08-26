var riot = require('riot')
var _ =
// Require all of our riot tags so riot can mount them
require('./tags/*.tag', {mode: 'expand'});

var tags = []

module.exports = {
  init: function(){
    tags = riot.mount("hello-world")
  },
  terminate: function(){
    _.each(tags, function(tag) {tag.unmount(true)})
  }
}

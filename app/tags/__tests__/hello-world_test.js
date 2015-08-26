var riot = require('riot')
var $ = require('jquery')
require('../hello-world.tag')

var element = document.createElement('hello-world');
var body = document.getElementsByTagName("body")[0]
body.appendChild(element)

describe("HelloWorld", function(){
  beforeEach(function(){
    this.tag = riot.mount("hello-world")[0]
  })

  afterEach(function(){
    this.tag.unmount()
  })

  it("when we update the input it updates the display", function(){
    var input = $("input").first()
    input.val("Andrew")
    input.trigger('blur')
    var display = $("p").first()
    expect(display.text()).toEqual("Hello Andrew")
  })
})

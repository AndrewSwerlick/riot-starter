<hello-world>
  <input type="text" onblur="{updateName}">
  <p>Hello {name}</p>

  <script>
    var self = this
    this.updateName = function(e){
      self.name = e.currentTarget.value
    }
  </script>
</hello-world>

(function() {

  var root = this;
  
  var magog = function(template){
    rezi(magog._css);
    magog._css = {};
    document.body.innerHTML = template;
  };

  magog.id = function(){
    var id = 0;
    magog.id = function(){ return "_"+id++ ;};
    return magog.id();
  };

  magog._css = {};
  magog.style = function(x){
    for (var key in x){
      this._css[key] = x[key];
    }
  };

  magog.eves = {};

  magog.eve = function(id,cb){
    this.eves[id] = cb;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = magog;
    }
    exports.magog = magog;
  }
  else {
    root.magog = magog;
  }

}).call(this);

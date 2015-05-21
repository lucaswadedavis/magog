(function() {

  var root = this;
  
  var magog = function(template){
    rezi(magog._css);
    magog._css = {};
    document.body.innerHTML = template;
  };

  magog._lastID = 0;
  magog.id = function(){
    return "_"+this._lastID++;
  };

  magog._css = {};
  magog.style = function(x){
    for (var key in x){
      this._css[key] = x[key];
    }
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

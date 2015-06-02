(function() {

  var root = this;
  
  var magog = function(template){
    rezi(magog._css);
    magog._css = {};
  
    magog.after.eves = magog.after.nextEves;
    magog.after.nextEves = [];

    magog.eves = magog.nextEves;
    magog.nextEves = {};
    
    document.body.innerHTML = template;
    for (var i=0;i< magog.after.eves.length;i++){
      magog.eves[magog.after.eves[i]]();
    }
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
  magog.nextEves = {};

  magog.eve = function(id,cb){
    this.nextEves[id] = cb;
  };

  magog.after = function(id,cb){
    magog.after.nextEves.push(id);
    magog.eve(id,cb);
  };

  magog.after.eves = [];
  magog.after.nextEves = [];

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

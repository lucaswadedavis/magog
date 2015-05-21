(function() {

  var root = this;


  var rezi = function(jcss) {
    if (jcss === undefined) {
      return null;
    }

    try {
      JSON.stringify(jcss);
    }
    catch (err) {
      return null;
    }

    if (document.getElementById("rezi") === null) {
      var cssNode = document.createElement("STYLE");
      cssNode.id = "rezi";
      cssNode.setAttribute("type", "text/css");
      document.head.appendChild(cssNode);
    }
    var cssTag = document.getElementById("rezi");
    cssTag.innerHTML = rezi.transpile(jcss);
  };

  rezi.transpile = function(jcss) {
    var css = "";

    var compile = function(child, parent) {
      if (parent === undefined) {
        parent = "";
      }
      for (var key in child) {
        if (typeof child[key] === 'string') {
          css += "\n" + parent + " {\n" + key + ": " + child[key] + ";\n}";
        }
        else {
          compile(child[key], parent + " " + key);
        }
      }
    };

    compile(jcss);
    return css;
  };



  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = rezi;
    }
    exports.rezi = rezi;
  }
  else {
    root.rezi = rezi;
  }

}).call(this);
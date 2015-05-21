var app = function(){
  id = magog.id();
  var template = "<div id='"+id+"'>";
    template += app.header(Math.random() );
  template += "</div>";

  var style = {};
  style["#"+id] = {margin:"30px"};
  magog.style(style);

  return template;
};

app.header = function(x){
  var id = magog.id();
  var template = "<h1 id='"+id+"'>"+(x||"Luke")+"</h1>";
  template += "<div>"+app.header.armageddon()+"</div>";
  var style = {};
  style["#"+id] = {"background-color":"#f37",color:"#fff"};
  magog.style(style);

  return template;
};

app.header.armageddon = function(x){
  return "<p>the end is near!</p>";
};

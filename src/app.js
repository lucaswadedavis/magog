var app = function(x){
  id = magog.id();

  var template = "";
  template += "<div>";
   
  if (x.route === 'main'){
    template += app.header("Welcome to the End" );
    template += app.table();
  } else {
    template += app.header();
    template += "<div>"+app.armageddon()+"</div>";
  }
  
  template += "</div>";

  var style = {};
  style["#"+id] = {margin:"30px"};
  magog.style(style);

  return template;
};

app.header = function(x){
  var id = magog.id();
  var template = "<h1 onclick='magog.eves."+id+"()' id='"+id+"'>"+(x||"Luke")+"</h1>";
 
  var style = {};
  style["#"+id] = {
    "background-color":"#f37",
    color:"#fff",
    padding:"20px",
    "text-align":"center",
    cursor:"pointer"
  };
  magog.style(style);

  magog.eve(id,function(){
    magog( app({route:"main"}) );
  });
  
  return template;
};

app.armageddon = function(x){
  return "<p>the end is near!</p>";
};

app.table = function(x){
  var id = magog.id();

  var template = "";
  template += "<table id='"+id+"'>";
  for (var i=0;i<1000;i++){
    template += app.table.row([i,Math.random()]);
  }
  template += "</table>";

  var style = {};
  style["#"+id] = {
    td:{border:"1px solid #333"},
    width:"100%"
  };
  magog.style(style);

  return template;
};

app.table.row = function(x){
  var id = magog.id();

  var template = "";
  template += "<tr>";
  for (var i=0;i<x.length;i++){
    template += "<td onclick='magog.eves."+id+"()'>"+x[i]+"</td>";
  }
  template += "</tr>";
 
  magog.eve(id,function(){
    console.log("vlarg");
  });

  var style = {};
  style["#"+id] = {
    cursor:"pointer"
  };
  magog.style(style);
  
  return template;
};

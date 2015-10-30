var io = require('io');
var $ = require('node').all;
if(!$('#J_Chart').length) return false;

//github信息
var $star = $('.J_CountStar');
if($star.length){
  var user = $star.attr('data-user');
  var repo = $star.attr('data-repo');
  io.jsonp('https://api.github.com/repos/'+user+'/'+repo).then(function(result){
    var data = result[0].data;
    var stargazers_count = data.stargazers_count;
    $star.all('span').html(stargazers_count);
  })
}

KISSY.use("kg/kcharts/2.0.0/linechart/index",function(S,LineChart){
  var api = $('#J_Chart').attr('data-api');
  io.getJSON(api).then(function(result){
    var data = result[0];
    if(!data.success) return false;
    data = data.result;
    if(!data.views) return false;
    if(!data.views.x.length) return false;
    var linechart = new LineChart({
      renderTo:"#J_Chart",
      points:{
        attr:{
          type:"auto"
        }
      },
      yLabels:{
        css:{
          "marginLeft":"-4px",
          "font-family":"Microsoft Yahei",
          "font-size":"10px"
        }
      },
      xLabels:{
        css:{
          "font-family":"Microsoft Yahei",
          "font-size":"10px"
        }
      },
      lineType:"arc",
      xAxis: {
        text:data.views.x
      },
      yAxis:{
        num:7
      },
      comparable:true,
      series:[{
        text: '近15天图书访问量',
        data: data.views.y
      }
      ],
      legend:{
        isShow:true,y:-10
      }
    });

    linechart.on("afterRender",function(){
      var points = linechart._points[0];
      var htmlPaper = linechart.getPaper();
      for(var i in points){
        htmlPaper.text(points[i]['x'],points[i]['y']-8,points[i]['dataInfo']['y'],"conter","bottom");
      }
    })

  });

});
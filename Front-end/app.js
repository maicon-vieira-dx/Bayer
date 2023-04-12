var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
   autoplay: {
    delay: 4000,
     disableOnInteraction: false,
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

 window.addEventListener("scroll", function(){
   var header = document.querySelector('.header');
   var sticky = header.offsetTop
   if (window.pageYOffset > 300) {
       header.classList.add("sticky");
     }else {
       header.classList.remove("sticky");
     }
     console.log(window.scrollY)
 })

var chartData = [
  {
      "date": "2012-01-01",
      "Zika": 51,
      "Malaria": 39,
      "Dengue": 72,
      "townName1": "Norte",
      "townName2": "Nordeste",
      "townName3": "Centro-Oeste",
      "townName4": "Sul",
      "townName5": "Sudeste",
      "townSize": 14,
      "Norte": 65,
      "Nordeste": 29,
      "Centro-oeste": 34,
      "Sul": 24,
      "Sudeste": 10
  },
  {
      "date": "2012-01-02",
      "Zika": 50,
      "Malaria": 32,
      "Dengue": 70,
      "townName": "Norte",
      "townName2": "Nordeste",
      "townName3": "Centro-Oeste",
      "townName4": "Sul",
      "townName5": "Sudeste",
      "townSize": 14,
      "Norte": 57,
      "Nordeste": 25,
      "Centro-oeste": 47,
      "Sul": 10,
      "Sudeste": 13
  },
  {
      "date": "2012-01-03",
      "Zika": 52,
      "Malaria": 54,
      "Dengue": 79,
      "townName": "Norte",
      "townName2": "Nordeste",
      "townName3": "Centro-Oeste",
      "townName4": "Sul",
      "townName5": "Sudeste",
      "townSize": 14,
      "Norte": 86,
      "Nordeste": 29,
      "Centro-oeste": 45,
      "Sul": 16,
      "Sudeste": 9 
  },
  {
      "date": "2012-01-04",
  },
];
var chart = AmCharts.makeChart("chartdiv", {
type: "serial",
theme: "dark",
dataDateFormat: "YYYY-MM-DD",
dataProvider: chartData,

addClassNames: true,
startDengue: 1,
color: "#FFFFFF",
marginLeft: 0,

categoryField: "date",
categoryAxis: {
  parseDates: true,
  minPeriod: "DD",
  autoGridCount: false,
  gridCount: 50,
  gridAlpha: 0.1,
  gridColor: "#FFFFFF",
  axisColor: "#555555",
  dateFormats: [{
      period: 'DD',
      format: 'DD'
  }, {
      period: 'WW',
      format: 'MMM DD'
  }, {
      period: 'MM',
      format: 'MMM'
  }, {
      period: 'YYYY',
      format: 'YYYY'
  }]
},

valueAxes: [{
  id: "a1",
  title: "Casos",
  gridAlpha: 0,
  axisAlpha: 0
},{
  id: "a2",
  position: "right",
  gridAlpha: 0,
  axisAlpha: 0,
  labelsEnabled: false
},{
  id: "a3",
  title: "Casos",
  position: "right",
  gridAlpha: 0,
  axisAlpha: 0,
  inside: true,
  Dengue: "mm",
  DengueUnits: {
      DD: "d. ",
      hh: "h ",
      mm: "min",
      ss: ""
  }
}],
graphs: [{
  id: "g1",
  valueField:  "Norte",
  title:  "Norte",
  type:  "column",
  fillAlphas:  0.4,
  valueAxis:  "a1",
  balloonText:  "[[value]] registros",
  legendValueText:  "[[value]] mi",
  legendPeriodValueText:  "total: [[value.sum]] mi",
  lineColor:  "#0d3650",
  alphaField:  "alpha",
  labelText: "[[townName1]]",
},{
  id: "g4",
  valueField:  "Nordeste",
  title:  "Nordeste",
  type:  "column",
  fillAlphas:  0.4,
  valueAxis:  "a1",
  balloonText:  "[[value]] registros",
  legendValueText:  "[[value]]",
  legendPeriodValueText:  "total: [[value.sum]] mi",
  lineColor:  "#e83d5c",
  alphaField:  "alpha",
  labelText: "[[townName2]]",
},{
  id: "g5",
  valueField:  "Centro-oeste",
  title:  "Centro-oeste",
  type:  "column",
  fillAlphas:  0.4,
  valueAxis:  "a1",
  balloonText:  "[[value]] registros",
  legendValueText:  "[[value]] mi",
  legendPeriodValueText:  "total: [[value.sum]] mi",
  lineColor:  "#5b4d66",
  alphaField:  "alpha",
  labelText: "[[townName3]]",
},{
  id: "g6",
  valueField:  "Sul",
  title:  "Sul",
  type:  "column",
  fillAlphas:  0.4,
  valueAxis:  "a1",
  balloonText:  "[[value]] registros",
  legendValueText:  "[[value]] mi",
  legendPeriodValueText:  "total: [[value.sum]] mi",
  lineColor:  "#00bcff",
  alphaField:  "alpha",
  labelText: "[[townName4]]",
},{
  id: "g7",
  valueField:  "Sudeste",
  title:  "Sudeste",
  type:  "column",
  fillAlphas:  0.4,
  valueAxis:  "a1",
  balloonText:  "[[value]] registros",
  legendValueText:  "[[value]] mi",
  legendPeriodValueText:  "total: [[value.sum]] mi",
  lineColor:  "#F3e500",
  alphaField:  "alpha",
  labelText: "[[townName5]]",
},{
  id: "g2",
  title: "Zika",
  valueField: "Zika",
  type: "line",
  valueAxis: "a3",
  lineColor: "#ffff",
  balloonText: "[[value]]",
  lineThickness: 1,
  legendValueText: "[[value]]",
  bullet: "square",
  bulletBorderColor: "#00000",
  bulletBorderThickness: 1,
  bulletBorderAlpha: 1,
  dashLengthField: "dashLength",
  animationPlayed: true
},{
  id: "g3",
  title: "Dengue",
  valueField: "Dengue",
  type: "line",
  valueAxis: "a3",
  lineColor: "#ffff",
  balloonText: "[[value]]",
  lineThickness: 1,
  legendValueText: "[[value]]",
  bullet: "square",
  bulletBorderColor: "#ffff",
  bulletBorderThickness: 1,
  bulletBorderAlpha: 1,
  dashLengthField: "dashLength",
  animationPlayed: true
},{
  id: "g8",
  title: "Malaria",
  valueField: "Malaria",
  type: "line",
  valueAxis: "a3",
  lineColor: "#ffff",
  balloonText: "[[value]]",
  lineThickness: 1,
  legendValueText: "[[value]]",
  bullet: "square",
  bulletBorderColor: "#ffff",
  bulletBorderThickness: 1,
  bulletBorderAlpha: 1,
  dashLengthField: "dashLength",
  animationPlayed: true
}],

chartCursor: {
  zoomable: false,
  categoryBalloonDateFormat: "DD",
  cursorAlpha: 0,
  valueBalloonsEnabled: false
},
legend: {
  bulletType: "round",
  equalWidths: false,
  valueWidth: 120,
  useGraphSettings: true,
  color: "#FFFFFF"
}
});
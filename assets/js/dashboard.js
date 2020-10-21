const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'

var dropdown = document.getElementsByClassName("drop-down-nav");
let i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

const adminSection = document.getElementById("admin");
const userSection = document.getElementById("user");

function myFunction() {
  var x = document.getElementById("sel1").value;
  if (x === "Admin") {
    adminSection.style.display = "block";
    userSection.style.display = "none";
  }
  else {
    adminSection.style.display = "none";
    userSection.style.display = "block";
  }
}
var chart= Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Target',
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

  }, {
    name: 'Actual',
    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

  }]
});
let w = $(".graph-main").width();  
chart.setSize(w);
$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active')    
         
    });
});

const elem = $(".graph-main")[0]; 
  
let resizeObserver = new ResizeObserver(() => { 
  chart.setSize(w);
  w = $(".graph-main").width();
}); 

resizeObserver.observe(elem); 
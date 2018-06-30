var links = [ {name: "one", value: 1},
			{name: "two", value:  1},
			{name: "three", value:  1},
			{name: "four", value:  1},
			{name: "five", value:  1} ];

var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
var margin = {top: 50, right: 50, bottom: 50, left: 50};
	width = document.getElementById("content").clientWidth - margin.left - margin.right; //600 - margin.left - margin.right;
	height = document.getElementById("content").clientHeight - margin.top - margin.bottom; // 1500 - margin.top - margin.bottom;
console.log(width);
console.log(height);
console.log(document.getElementsByClassName("html").clientHeight);

var chart = d3.select("#content")
				.append('svg')
			    .attr("width", width + margin.left + margin.right)
			    .attr("height", height + margin.top + margin.bottom)
			   .append("g")
    			.attr("transform", "translate(" + ((width/2)+margin.left) + "," + ((height/2)+margin.top) + ")");


var radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
	.range(["#3399FF", "#5DAEF8", "#86C3FA", "#ADD6FB", "#D6EBFD"]);

var arc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius - 50);

var pie = d3.layout.pie()
    .sort(null)
    .startAngle(1.1*Math.PI)
    .endAngle(3.1*Math.PI)
    .value(function(d) { return d.value; });


var g = chart.selectAll(".arc")
  .data(pie(links))
.enter().append("g")
  .attr("class", "arc");

g.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .on("mouseenter", function(d) {

 	     var endAngle = d.endAngle;

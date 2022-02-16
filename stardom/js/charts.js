/* All functions in this file are used only for charts.html */
var Charts = function () {

    // Init Flot Charts Plugin
    var runCharts = function () {
		
        // Add a series of colors to be used in the charts and pie graphs
        var Colors = ['#5bc0de', '#428bca', '#5cb85c', '#d9534f', '#f0ad4e', '#7857ca', '#efcf1d'];
		
        // Typical random Number generator
        var randNum = function () {return (Math.floor(Math.floor((Math.random() * 5) + 1) + 5));}
		
        // Creates Random data values based on passed quantity and desired deviation
		function dataCreate(num, dev) {
			var dataPlots = [];
			for (var i = 0; i < num; i++) {
				if (i === 0) {
					dataPlots.push([(i + 1), 0]);
				} else {
					dataPlots.push([(i + 1), (randNum() * (i + dev))]);
				}
			}
			return (dataPlots);
		}
			
        if ($(".chart-line").length) {
            var options = {
                grid: {
                    show: true,
                    aboveData: true,
                    color: "#3f3f3f",
                    labelMargin: 5,
                    axisMargin: 0,
                    borderWidth: 0,
                    borderColor: null,
                    minBorderMargin: 5,
                    clickable: true,
                    hoverable: true,
                    autoHighlight: true,
                    mouseActiveRadius: 20
                },
                series: {
                    lines: {
                        show: true,
                        fill: 0.5,
                        lineWidth: 2,
                        steps: false
                    },
                    points: {
                        show: false
                    }
                },
                yaxis: {
                    min: 0
                },
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                colors: Colors,
                shadowSize: 1,
                tooltip: true,
                //activate tooltip
                tooltipOpts: {
                    content: "%s : %y.0",
                    shifts: {
                        x: -30,
                        y: -50
                    },
                    defaultTheme: false
                }
            };
            $.plot($(".chart-line"), [{
                label: "Facebook Fans",
                data: dataCreate(18, 1),
                lines: {
                    fillColor: "#f3faff"
                }
            }, {
                label: "Twitter Followers",
                data: dataCreate(18, 1),
                lines: {
                    fillColor: "#fff8f7"
                }
            }], options);
        }
        if ($(".chart-donut").length) {
            $(function () {
                var options = {
                    series: {
                        pie: {
                            show: true,
                            innerRadius: 0.5,
                            highlight: {
                                opacity: 0.1
                            },
                            startAngle: 2,
                            border: 30 //darken the main color with 30
                        }
                    },
                    legend: {
                        show: true,
                        labelFormatter: function (label, series) {
                            // series is the series object for the label
                            return '<a href="#' + label + '">' + label + '</a>';
                        },
                        margin: 50,
                        width: 20,
                        padding: 1
                    },
                    grid: {
                        hoverable: true,
                        clickable: true
                    },
                    tooltip: true,
                    //activate tooltip
                    tooltipOpts: {
                        content: "%s : %p.0" + "%",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                };
                var data = [{
                    label: "USA",
                    data: 38,
                    color: Colors[0]
                }, {
                    label: "Brazil",
                    data: 23,
                    color: Colors[1]
                }, {
                    label: "India",
                    data: 15,
                    color: Colors[2]
                }, {
                    label: "Turkey",
                    data: 9,
                    color: Colors[3]
                }, {
                    label: "France",
                    data: 7,
                    color: Colors[4]
                }, {
                    label: "China",
                    data: 5,
                    color: Colors[5]
                }, {
                    label: "Germany",
                    data: 3,
                    color: Colors[6]
                }];
                $.plot($(".chart-donut"), data, options);
            });
        }
        if ($(".chart-pie").length) {
            $(function () {
                var options = {
                    series: {
                        pie: {
                            show: true,
                            highlight: {
                                opacity: 0.1
                            },
                            radius: 1,
                            stroke: {
                                width: 2
                            },
                            startAngle: 2,
                            border: 30 //darken the main color with 30
                        }
                    },
                    legend: {
                        show: true,
                        labelFormatter: function (label, series) {
                            // series is the series object for the label
                            return '<a href="#' + label + '">' + label + '</a>';
                        },
                        margin: 50,
                        width: 20,
                        padding: 1
                    },
                    grid: {
                        hoverable: true,
                        clickable: true
                    },
                    tooltip: true,
                    //activate tooltip
                    tooltipOpts: {
                        content: "%s : %p.0" + "%",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                };
                var data = [{
                    label: "USA",
                    data: 38,
                    color: Colors[0]
                }, {
                    label: "Brazil",
                    data: 23,
                    color: Colors[1]
                }, {
                    label: "India",
                    data: 15,
                    color: Colors[2]
                }, {
                    label: "Turkey",
                    data: 9,
                    color: Colors[3]
                }, {
                    label: "France",
                    data: 7,
                    color: Colors[4]
                }, {
                    label: "China",
                    data: 5,
                    color: Colors[5]
                }, {
                    label: "Germany",
                    data: 3,
                    color: Colors[6]
                }];
                $.plot($(".chart-pie"), data, options);
            });
        }
        if ($(".chart-bars-ordered").length) {
            $(function () {
                //generate some data
                var d1 = [];
                for (var i = 0; i <= 10; i += 1)
                    d1.push([i, parseInt(Math.random() * 30)]);
                var d2 = [];
                for (var i = 0; i <= 10; i += 1)
                    d2.push([i, parseInt(Math.random() * 30)]);
                var d3 = [];
                for (var i = 0; i <= 10; i += 1)
                    d3.push([i, parseInt(Math.random() * 30)]);
                var data = new Array();
                data.push({
                    label: "Data One",
                    data: d1,
                    bars: {
                        order: 1
                    }
                });
                data.push({
                    label: "Data Two",
                    data: d2,
                    bars: {
                        order: 2
                    }
                });
                data.push({
                    label: "Data Three",
                    data: d3,
                    bars: {
                        order: 3
                    }
                });
                var options = {
                    bars: {
                        show: true,
                        barWidth: 0.2,
                        fill: 1
                    },
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor: null,
                        minBorderMargin: 5,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20
                    },
                    colors: Colors,
                    tooltip: true,
                    //activate tooltip
                    tooltipOpts: {
                        content: "Data&nbsp;" + "%x.0 : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        }
                    }
                };
                $.plot($(".chart-bars-ordered"), data, options);
            });
        }
		
 if ($(".chart-toggle").length) {
			
			var datasets = {
				"usa": {
					label: "USA",
					data: [[1988, 483994], [1989, 479060], [1990, 457648], [1991, 401949], [1992, 424705], [1993, 402375], [1994, 377867], [1995, 357382], [1996, 337946], [1997, 336185], [1998, 328611], [1999, 329421], [2000, 342172], [2001, 344932], [2002, 387303], [2003, 440813], [2004, 480451], [2005, 504638], [2006, 528692]]
				},        
				"russia": {
					label: "Russia",
					data: [[1988, 218000], [1989, 203000], [1990, 171000], [1992, 42500], [1993, 37600], [1994, 36600], [1995, 21700], [1996, 19200], [1997, 21300], [1998, 13600], [1999, 14000], [2000, 19100], [2001, 21300], [2002, 23600], [2003, 25100], [2004, 26100], [2005, 31100], [2006, 34700]]
				},
				"germany": {
					label: "Germany",
					data: [[1988, 55627], [1989, 55475], [1990, 58464], [1991, 55134], [1992, 52436], [1993, 47139], [1994, 43962], [1995, 43238], [1996, 42395], [1997, 40854], [1998, 40993], [1999, 41822], [2000, 41147], [2001, 40474], [2002, 40604], [2003, 40044], [2004, 38816], [2005, 38060], [2006, 36984]]
				},
				"sweden": {
					label: "Sweden",
					data: [[1988, 6402], [1989, 6474], [1990, 6605], [1991, 6209], [1992, 6035], [1993, 6020], [1994, 6000], [1995, 6018], [1996, 3958], [1997, 5780], [1998, 5954], [1999, 6178], [2000, 6411], [2001, 5993], [2002, 5833], [2003, 5791], [2004, 5450], [2005, 5521], [2006, 5271]]
				},
				"uk": {
					label: "UK",
					data: [[1988, 62982], [1989, 62027], [1990, 60696], [1991, 62348], [1992, 58560], [1993, 56393], [1994, 54579], [1995, 50818], [1996, 50554], [1997, 48276], [1998, 47691], [1999, 47529], [2000, 47778], [2001, 48760], [2002, 50949], [2003, 57452], [2004, 60234], [2005, 60076], [2006, 59213]]
				}
			};
	
			// hard-code color indices to prevent them from shifting as
			// countries are turned on/off
			var i = 0;
			$.each(datasets, function(key, val) {
				val.color = i;
				++i;
			});
	
			// insert checkboxes 
			var choiceContainer = $("#choices");
			$.each(datasets, function(key, val) {
				choiceContainer.append("<label class='checkbox-inline'><input type='checkbox' class='checkbox' name='" + key +	"' checked='checked' id='id" + key + "'>" + val.label + "</label>");
			});
			
			choiceContainer.find("input").click(function() {
				plotAccordingToChoices();
				$.uniform.update('#choices .checkbox');
			});
			
			function plotAccordingToChoices() {
				var data = [];
				choiceContainer.find("input:checked").each(function () {
					var key = $(this).attr("name");
					if (key && datasets[key]) {
						data.push(datasets[key]);
					}
				});
	
				if (data.length > 0) {
					$.plot(".chart-toggle", data, {
						grid: {
							show: true,
							aboveData: true,
							color: "#3f3f3f",
							labelMargin: 5,
							axisMargin: 0,
							borderWidth: 0,
							borderColor: null,
							minBorderMargin: 5,
							clickable: true,
							hoverable: true,
							autoHighlight: true,
							mouseActiveRadius: 20
						},
						series: {
							lines: {
								show: true,
								fill: 0.5,
								lineWidth: 2,
								steps: false
							},
							points: {
								show: false
							}
						},
						yaxis: {
							min: 0
						},
						xaxis: {
							ticks: 11,
							tickDecimals: 0
						},
						colors: Colors,
						shadowSize: 1,
						tooltip: true,
						//activate tooltip
						tooltipOpts: {
							content: "%s : %y.0",
							shifts: {
								x: -30,
								y: -50
							}
						}
					});
				}
			}
			plotAccordingToChoices();
			$('#choices .checkbox').uniform();
	    }
		
        if ($(".chart-bars-stacked").length) {
            $(function () {
                //some data
                var d1 = [];
                for (var i = 0; i <= 10; i += 1)
                    d1.push([i, parseInt(Math.random() * 30)]);
                var d2 = [];
                for (var i = 0; i <= 10; i += 1)
                    d2.push([i, parseInt(Math.random() * 30)]);
                var d3 = [];
                for (var i = 0; i <= 10; i += 1)
                    d3.push([i, parseInt(Math.random() * 30)]);
                var data = new Array();
                data.push({
                    label: "Data One",
                    data: d1
                });
                data.push({
                    label: "Data Two",
                    data: d2
                });
                data.push({
                    label: "Data Tree",
                    data: d3
                });
                var stack = 0,
                    bars = true,
                    lines = false,
                    steps = false;
                var options = {
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor: null,
                        minBorderMargin: 5,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: true,
                        mouseActiveRadius: 20
                    },
                    series: {
                        stack: stack,
                        lines: {
                            show: lines,
                            fill: true,
                            steps: steps
                        },
                        bars: {
                            show: bars,
                            barWidth: 0.5,
                            fill: 1
                        }
                    },
                    xaxis: {
                        ticks: 11,
                        tickDecimals: 0
                    },
                    colors: Colors,
                    shadowSize: 1,
                    tooltip: true,
                    //activate tooltip
                    tooltipOpts: {
                        content: "%s : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        }
                    }
                };
                $.plot($(".chart-bars-stacked"), data, options);
            });
        }
        if ($(".chart-bars-horizontal").length) {
            $(function () {
                var d1 = [];
                for (var i = 0; i <= 5; i += 1)
                    d1.push([parseInt(Math.random() * 30), i]);
                var d2 = [];
                for (var i = 0; i <= 5; i += 1)
                    d2.push([parseInt(Math.random() * 30), i]);
                var d3 = [];
                for (var i = 0; i <= 5; i += 1)
                    d3.push([parseInt(Math.random() * 30), i]);
                var data = new Array();
                data.push({
                    data: d1,
                    bars: {
                        horizontal: true,
                        show: true,
                        barWidth: 0.2,
                        order: 1
                    }
                });
                data.push({
                    data: d2,
                    bars: {
                        horizontal: true,
                        show: true,
                        barWidth: 0.2,
                        order: 2
                    }
                });
                data.push({
                    data: d3,
                    bars: {
                        horizontal: true,
                        show: true,
                        barWidth: 0.2,
                        order: 3
                    }
                });
                var options = {
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor: null,
                        minBorderMargin: 5,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20
                    },
                    series: {
                        bars: {
                            show: true,
                            horizontal: true,
                            barWidth: 0.2,
                            fill: 1
                        }
                    },
                    colors: Colors,
                    tooltip: true,
                    //activate tooltip
                    tooltipOpts: {
                        content: "Data&nbsp;" + "%y.0 : %x.0",
                        shifts: {
                            x: -30,
                            y: -50
                        }
                    }
                };
                $.plot($(".chart-bars-horizontal"), data, options);
            });
        }
        if ($(".chart-updating").length) {
            $(function () {
                // we use an inline data source in the example, usually data would
                // be fetched from a server
                var data = [],
                    totalPoints = 50;

                function getRandomData() {
                    if (data.length > 0) data = data.slice(1);
                    // do a random walk
                    while (data.length < totalPoints) {
                        var prev = data.length > 0 ? data[data.length - 1] : 50;
                        var y = prev + Math.random() * 10 - 5;
                        if (y < 0) y = 0;
                        if (y > 100) y = 100;
                        data.push(y);
                    }
                    // zip the generated y values with the x values
                    var res = [];
                    for (var i = 0; i < data.length; ++i)
                        res.push([i, data[i]])
                    return res;
                }
                // Update interval
                var updateInterval = 250;
                // setup plot
                var options = {
                    series: {
                        shadowSize: 0,
                        // drawing is faster without shadows
                        lines: {
                            show: true,
                            fill: true,
                            lineWidth: 2,
                            steps: false
                        },
                        points: {
                            show: true,
                            radius: 2.8,
                            symbol: "circle",
                            lineWidth: 2.5
                        }
                    },
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor: null,
                        minBorderMargin: 5,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20
                    },
                    colors: Colors,
                    tooltip: true,
                    //activate tooltip
                    tooltipOpts: {
                        content: "Value is : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        }
                    },
                    yaxis: {
                        min: 0,
                        max: 100
                    },
                    xaxis: {
                        show: true
                    }
                };
                var plot = $.plot($(".chart-updating"), [getRandomData()], options);

                function update() {
                    plot.setData([getRandomData()]);
                    // since the axes don't change, we don't need to call plot.setupGrid()
                    plot.draw();
                    setTimeout(update, updateInterval);
                }
                update();
            });
        }
    }

    // Init Flot Chart Plugins
    var runChartPlugins = function () {

		// Flot Time Plugin
		(function(e){function n(e,t){return t*Math.floor(e/t)}function r(e,t,n,r){if(typeof e.strftime=="function")return e.strftime(t);var i=function(e,t){return e=""+e,t=""+(t==null?"0":t),e.length==1?t+e:e},s=[],o=!1,u=e.getHours(),a=u<12;n==null&&(n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),r==null&&(r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]);var f;u>12?f=u-12:u==0?f=12:f=u;for(var l=0;l<t.length;++l){var c=t.charAt(l);if(o){switch(c){case"a":c=""+r[e.getDay()];break;case"b":c=""+n[e.getMonth()];break;case"d":c=i(e.getDate());break;case"e":c=i(e.getDate()," ");break;case"h":case"H":c=i(u);break;case"I":c=i(f);break;case"l":c=i(f," ");break;case"m":c=i(e.getMonth()+1);break;case"M":c=i(e.getMinutes());break;case"q":c=""+(Math.floor(e.getMonth()/3)+1);break;case"S":c=i(e.getSeconds());break;case"y":c=i(e.getFullYear()%100);break;case"Y":c=""+e.getFullYear();break;case"p":c=a?"am":"pm";break;case"P":c=a?"AM":"PM";break;case"w":c=""+e.getDay()}s.push(c),o=!1}else c=="%"?o=!0:s.push(c)}return s.join("")}function i(e){function t(e,t,n,r){e[t]=function(){return n[r].apply(n,arguments)}}var n={date:e};e.strftime!=undefined&&t(n,"strftime",e,"strftime"),t(n,"getTime",e,"getTime"),t(n,"setTime",e,"setTime");var r=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"];for(var i=0;i<r.length;i++)t(n,"get"+r[i],e,"getUTC"+r[i]),t(n,"set"+r[i],e,"setUTC"+r[i]);return n}function s(e,t){if(t.timezone=="browser")return new Date(e);if(!t.timezone||t.timezone=="utc")return i(new Date(e));if(typeof timezoneJS!="undefined"&&typeof timezoneJS.Date!="undefined"){var n=new timezoneJS.Date;return n.setTimezone(t.timezone),n.setTime(e),n}return i(new Date(e))}function l(t){t.hooks.processOptions.push(function(t,i){e.each(t.getAxes(),function(e,t){var i=t.options;i.mode=="time"&&(t.tickGenerator=function(e){var t=[],r=s(e.min,i),u=0,l=i.tickSize&&i.tickSize[1]==="quarter"||i.minTickSize&&i.minTickSize[1]==="quarter"?f:a;i.minTickSize!=null&&(typeof i.tickSize=="number"?u=i.tickSize:u=i.minTickSize[0]*o[i.minTickSize[1]]);for(var c=0;c<l.length-1;++c)if(e.delta<(l[c][0]*o[l[c][1]]+l[c+1][0]*o[l[c+1][1]])/2&&l[c][0]*o[l[c][1]]>=u)break;var h=l[c][0],p=l[c][1];if(p=="year"){if(i.minTickSize!=null&&i.minTickSize[1]=="year")h=Math.floor(i.minTickSize[0]);else{var d=Math.pow(10,Math.floor(Math.log(e.delta/o.year)/Math.LN10)),v=e.delta/o.year/d;v<1.5?h=1:v<3?h=2:v<7.5?h=5:h=10,h*=d}h<1&&(h=1)}e.tickSize=i.tickSize||[h,p];var m=e.tickSize[0];p=e.tickSize[1];var g=m*o[p];p=="second"?r.setSeconds(n(r.getSeconds(),m)):p=="minute"?r.setMinutes(n(r.getMinutes(),m)):p=="hour"?r.setHours(n(r.getHours(),m)):p=="month"?r.setMonth(n(r.getMonth(),m)):p=="quarter"?r.setMonth(3*n(r.getMonth()/3,m)):p=="year"&&r.setFullYear(n(r.getFullYear(),m)),r.setMilliseconds(0),g>=o.minute&&r.setSeconds(0),g>=o.hour&&r.setMinutes(0),g>=o.day&&r.setHours(0),g>=o.day*4&&r.setDate(1),g>=o.month*2&&r.setMonth(n(r.getMonth(),3)),g>=o.quarter*2&&r.setMonth(n(r.getMonth(),6)),g>=o.year&&r.setMonth(0);var y=0,b=Number.NaN,w;do{w=b,b=r.getTime(),t.push(b);if(p=="month"||p=="quarter")if(m<1){r.setDate(1);var E=r.getTime();r.setMonth(r.getMonth()+(p=="quarter"?3:1));var S=r.getTime();r.setTime(b+y*o.hour+(S-E)*m),y=r.getHours(),r.setHours(0)}else r.setMonth(r.getMonth()+m*(p=="quarter"?3:1));else p=="year"?r.setFullYear(r.getFullYear()+m):r.setTime(b+g)}while(b<e.max&&b!=w);return t},t.tickFormatter=function(e,t){var n=s(e,t.options);if(i.timeformat!=null)return r(n,i.timeformat,i.monthNames,i.dayNames);var u=t.options.tickSize&&t.options.tickSize[1]=="quarter"||t.options.minTickSize&&t.options.minTickSize[1]=="quarter",a=t.tickSize[0]*o[t.tickSize[1]],f=t.max-t.min,l=i.twelveHourClock?" %p":"",c=i.twelveHourClock?"%I":"%H",h;a<o.minute?h=c+":%M:%S"+l:a<o.day?f<2*o.day?h=c+":%M"+l:h="%b %d "+c+":%M"+l:a<o.month?h="%b %d":u&&a<o.quarter||!u&&a<o.year?f<o.year?h="%b":h="%b %Y":u&&a<o.year?f<o.year?h="Q%q":h="Q%q %Y":h="%Y";var p=r(n,h,i.monthNames,i.dayNames);return p})})})}var t={xaxis:{timezone:null,timeformat:null,twelveHourClock:!1,monthNames:null}},o={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,quarter:7776e6,year:525949.2*60*1e3},u=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]],a=u.concat([[3,"month"],[6,"month"],[1,"year"]]),f=u.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);e.plot.plugins.push({init:l,options:t,name:"time",version:"1.0"}),e.plot.formatDate=r})(jQuery);
		
		// Flot Canvas Plugin
		(function(e){function o(t,o){var u=o.Canvas;n==null&&(r=u.prototype.getTextInfo,i=u.prototype.addText,n=u.prototype.render),u.prototype.render=function(){if(!t.getOptions().canvas)return n.call(this);var e=this.context,r=this._textCache;e.save(),e.textBaseline="middle";for(var i in r)if(s.call(r,i)){var o=r[i];for(var u in o)if(s.call(o,u)){var a=o[u],f=!0;for(var l in a)if(s.call(a,l)){var c=a[l],h=c.positions,p=c.lines;f&&(e.fillStyle=c.font.color,e.font=c.font.definition,f=!1);for(var d=0,v;v=h[d];d++)if(v.active)for(var m=0,g;g=v.lines[m];m++)e.fillText(p[m].text,g[0],g[1]);else h.splice(d--,1);h.length==0&&delete a[l]}}}e.restore()},u.prototype.getTextInfo=function(n,i,s,o,u){if(!t.getOptions().canvas)return r.call(this,n,i,s,o,u);var a,f,l,c;i=""+i,typeof s=="object"?a=s.style+" "+s.variant+" "+s.weight+" "+s.size+"px "+s.family:a=s,f=this._textCache[n],f==null&&(f=this._textCache[n]={}),l=f[a],l==null&&(l=f[a]={}),c=l[i];if(c==null){var h=this.context;if(typeof s!="object"){var p=e("<div>&nbsp;</div>").css("position","absolute").addClass(typeof s=="string"?s:null).appendTo(this.getTextLayer(n));s={lineHeight:p.height(),style:p.css("font-style"),variant:p.css("font-variant"),weight:p.css("font-weight"),family:p.css("font-family"),color:p.css("color")},s.size=p.css("line-height",1).height(),p.remove()}a=s.style+" "+s.variant+" "+s.weight+" "+s.size+"px "+s.family,c=l[i]={width:0,height:0,positions:[],lines:[],font:{definition:a,color:s.color}},h.save(),h.font=a;var d=(i+"").replace(/<br ?\/?>|\r\n|\r/g,"\n").split("\n");for(var v=0;v<d.length;++v){var m=d[v],g=h.measureText(m);c.width=Math.max(g.width,c.width),c.height+=s.lineHeight,c.lines.push({text:m,width:g.width,height:s.lineHeight})}h.restore()}return c},u.prototype.addText=function(e,n,r,s,o,u,a,f,l){if(!t.getOptions().canvas)return i.call(this,e,n,r,s,o,u,a,f,l);var c=this.getTextInfo(e,s,o,u,a),h=c.positions,p=c.lines;r+=c.height/p.length/2,l=="middle"?r=Math.round(r-c.height/2):l=="bottom"?r=Math.round(r-c.height):r=Math.round(r),!(window.opera&&window.opera.version().split(".")[0]<12)||(r-=2);for(var d=0,v;v=h[d];d++)if(v.x==n&&v.y==r){v.active=!0;return}v={active:!0,lines:[],x:n,y:r},h.push(v);for(var d=0,m;m=p[d];d++)f=="center"?v.lines.push([Math.round(n-m.width/2),r]):f=="right"?v.lines.push([Math.round(n-m.width),r]):v.lines.push([Math.round(n),r]),r+=m.height}}var t={canvas:!0},n,r,i,s=Object.prototype.hasOwnProperty;e.plot.plugins.push({init:o,options:t,name:"canvas",version:"1.0"})})(jQuery);
		
		// Flot Tooltip Plugin
		!function(a){var b={tooltip:!1,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:!0,onHover:function(){}}},c=function(a){this.tipPosition={x:0,y:0},this.init(a)};c.prototype.init=function(b){function c(a){var b={};b.x=a.pageX,b.y=a.pageY,e.updateTooltipPosition(b)}function d(a,b,c){var d=e.getDomElement();if(c){var f;f=e.stringFormat(e.tooltipOptions.content,c),d.html(f),e.updateTooltipPosition({x:b.pageX,y:b.pageY}),d.css({left:e.tipPosition.x+e.tooltipOptions.shifts.x,top:e.tipPosition.y+e.tooltipOptions.shifts.y}).show(),"function"==typeof e.tooltipOptions.onHover&&e.tooltipOptions.onHover(c,d)}else d.hide().html("")}var e=this;b.hooks.bindEvents.push(function(b,f){if(e.plotOptions=b.getOptions(),e.plotOptions.tooltip!==!1&&"undefined"!=typeof e.plotOptions.tooltip){e.tooltipOptions=e.plotOptions.tooltipOpts;{e.getDomElement()}a(b.getPlaceholder()).bind("plothover",d),a(f).bind("mousemove",c)}}),b.hooks.shutdown.push(function(b,e){a(b.getPlaceholder()).unbind("plothover",d),a(e).unbind("mousemove",c)})},c.prototype.getDomElement=function(){var b;return a("#flotTip").length>0?b=a("#flotTip"):(b=a("<div />").attr("id","flotTip"),b.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&b.css({background:"#fff","z-index":"100",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),b},c.prototype.updateTooltipPosition=function(b){var c=a("#flotTip").outerWidth()+this.tooltipOptions.shifts.x,d=a("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;b.x-a(window).scrollLeft()>a(window).innerWidth()-c&&(b.x-=c),b.y-a(window).scrollTop()>a(window).innerHeight()-d&&(b.y-=d),this.tipPosition.x=b.x,this.tipPosition.y=b.y},c.prototype.stringFormat=function(a,b){var c=/%p\.{0,1}(\d{0,})/,d=/%s/,e=/%x\.{0,1}(?:\d{0,})/,f=/%y\.{0,1}(?:\d{0,})/,g=b.datapoint[0],h=b.datapoint[1];return"function"==typeof a&&(a=a(b.series.label,g,h,b)),"undefined"!=typeof b.series.percent&&(a=this.adjustValPrecision(c,a,b.series.percent)),"undefined"!=typeof b.series.label&&(a=a.replace(d,b.series.label)),this.isTimeMode("xaxis",b)&&this.isXDateFormat(b)&&(a=a.replace(e,this.timestampToDate(g,this.tooltipOptions.xDateFormat))),this.isTimeMode("yaxis",b)&&this.isYDateFormat(b)&&(a=a.replace(f,this.timestampToDate(h,this.tooltipOptions.yDateFormat))),"number"==typeof g&&(a=this.adjustValPrecision(e,a,g)),"number"==typeof h&&(a=this.adjustValPrecision(f,a,h)),"undefined"!=typeof b.series.xaxis.tickFormatter&&(a=a.replace(e,b.series.xaxis.tickFormatter(g,b.series.xaxis))),"undefined"!=typeof b.series.yaxis.tickFormatter&&(a=a.replace(f,b.series.yaxis.tickFormatter(h,b.series.yaxis))),a},c.prototype.isTimeMode=function(a,b){return"undefined"!=typeof b.series[a].options.mode&&"time"===b.series[a].options.mode},c.prototype.isXDateFormat=function(){return"undefined"!=typeof this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},c.prototype.isYDateFormat=function(){return"undefined"!=typeof this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},c.prototype.timestampToDate=function(b,c){var d=new Date(b);return a.plot.formatDate(d,c)},c.prototype.adjustValPrecision=function(a,b,c){var d,e=b.match(a);return null!==e&&""!==RegExp.$1&&(d=RegExp.$1,c=c.toFixed(d),b=b.replace(a,c)),b};var d=function(a){new c(a)};a.plot.plugins.push({init:d,options:b,name:"tooltip",version:"0.6.1"})}(jQuery);
		
	   // Flot Navigate Plugin
		(function(e){function t(i){var l,h=this,p=i.data||{};if(p.elem)h=i.dragTarget=p.elem,i.dragProxy=a.proxy||h,i.cursorOffsetX=p.pageX-p.left,i.cursorOffsetY=p.pageY-p.top,i.offsetX=i.pageX-i.cursorOffsetX,i.offsetY=i.pageY-i.cursorOffsetY;else if(a.dragging||p.which>0&&i.which!=p.which||e(i.target).is(p.not))return;switch(i.type){case"mousedown":return e.extend(p,e(h).offset(),{elem:h,target:i.target,pageX:i.pageX,pageY:i.pageY}),o.add(document,"mousemove mouseup",t,p),s(h,!1),a.dragging=null,!1;case!a.dragging&&"mousemove":if(r(i.pageX-p.pageX)+r(i.pageY-p.pageY)<p.distance)break;i.target=p.target,l=n(i,"dragstart",h),l!==!1&&(a.dragging=h,a.proxy=i.dragProxy=e(l||h)[0]);case"mousemove":if(a.dragging){if(l=n(i,"drag",h),u.drop&&(u.drop.allowed=l!==!1,u.drop.handler(i)),l!==!1)break;i.type="mouseup"};case"mouseup":o.remove(document,"mousemove mouseup",t),a.dragging&&(u.drop&&u.drop.handler(i),n(i,"dragend",h)),s(h,!0),a.dragging=a.proxy=p.elem=!1}return!0}function n(t,n,r){t.type=n;var i=e.event.dispatch.call(r,t);return i===!1?!1:i||t.result}function r(e){return Math.pow(e,2)}function i(){return a.dragging===!1}function s(e,t){e&&(e.unselectable=t?"off":"on",e.onselectstart=function(){return t},e.style&&(e.style.MozUserSelect=t?"":"none"))}e.fn.drag=function(e,t,n){return t&&this.bind("dragstart",e),n&&this.bind("dragend",n),e?this.bind("drag",t?t:e):this.trigger("drag")};var o=e.event,u=o.special,a=u.drag={not:":input",distance:0,which:1,dragging:!1,setup:function(n){n=e.extend({distance:a.distance,which:a.which,not:a.not},n||{}),n.distance=r(n.distance),o.add(this,"mousedown",t,n),this.attachEvent&&this.attachEvent("ondragstart",i)},teardown:function(){o.remove(this,"mousedown",t),this===a.dragging&&(a.dragging=a.proxy=!1),s(this,!0),this.detachEvent&&this.detachEvent("ondragstart",i)}};u.dragstart=u.dragend={setup:function(){},teardown:function(){}}})(jQuery),function(e){function t(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=0,o=0,t=e.event.fix(n);return t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),o=i,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(o=0,s=-1*i),void 0!==n.wheelDeltaY&&(o=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(s=-1*n.wheelDeltaX/120),r.unshift(t,i,s,o),(e.event.dispatch||e.event.handle).apply(this,r)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var r=n.length;r;)e.event.fixHooks[n[--r]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),function(e){function n(t){function n(e,n){var r=t.offset();r.left=e.pageX-r.left,r.top=e.pageY-r.top,n?t.zoomOut({center:r}):t.zoom({center:r})}function r(e,t){return e.preventDefault(),n(e,t<0),!1}function a(e){if(e.which!=1)return!1;var n=t.getPlaceholder().css("cursor");n&&(i=n),t.getPlaceholder().css("cursor",t.getOptions().pan.cursor),s=e.pageX,o=e.pageY}function f(e){var n=t.getOptions().pan.frameRate;if(u||!n)return;u=setTimeout(function(){t.pan({left:s-e.pageX,top:o-e.pageY}),s=e.pageX,o=e.pageY,u=null},1/n*1e3)}function l(e){u&&(clearTimeout(u),u=null),t.getPlaceholder().css("cursor",i),t.pan({left:s-e.pageX,top:o-e.pageY})}function c(e,t){var i=e.getOptions();i.zoom.interactive&&(t[i.zoom.trigger](n),t.mousewheel(r)),i.pan.interactive&&(t.bind("dragstart",{distance:10},a),t.bind("drag",f),t.bind("dragend",l))}function h(e,t){t.unbind(e.getOptions().zoom.trigger,n),t.unbind("mousewheel",r),t.unbind("dragstart",a),t.unbind("drag",f),t.unbind("dragend",l),u&&clearTimeout(u)}var i="default",s=0,o=0,u=null;t.zoomOut=function(e){e||(e={}),e.amount||(e.amount=t.getOptions().zoom.amount),e.amount=1/e.amount,t.zoom(e)},t.zoom=function(n){n||(n={});var r=n.center,i=n.amount||t.getOptions().zoom.amount,s=t.width(),o=t.height();r||(r={left:s/2,top:o/2});var u=r.left/s,a=r.top/o,f={x:{min:r.left-u*s/i,max:r.left+(1-u)*s/i},y:{min:r.top-a*o/i,max:r.top+(1-a)*o/i}};e.each(t.getAxes(),function(e,t){var n=t.options,r=f[t.direction].min,i=f[t.direction].max,s=n.zoomRange,o=n.panRange;if(s===!1)return;r=t.c2p(r),i=t.c2p(i);if(r>i){var u=r;r=i,i=u}o&&(o[0]!=null&&r<o[0]&&(r=o[0]),o[1]!=null&&i>o[1]&&(i=o[1]));var a=i-r;if(s&&(s[0]!=null&&a<s[0]||s[1]!=null&&a>s[1]))return;n.min=r,n.max=i}),t.setupGrid(),t.draw(),n.preventEvent||t.getPlaceholder().trigger("plotzoom",[t,n])},t.pan=function(n){var r={x:+n.left,y:+n.top};isNaN(r.x)&&(r.x=0),isNaN(r.y)&&(r.y=0),e.each(t.getAxes(),function(e,t){var n=t.options,i,s,o=r[t.direction];i=t.c2p(t.p2c(t.min)+o),s=t.c2p(t.p2c(t.max)+o);var u=n.panRange;if(u===!1)return;u&&(u[0]!=null&&u[0]>i&&(o=u[0]-i,i+=o,s+=o),u[1]!=null&&u[1]<s&&(o=u[1]-s,i+=o,s+=o)),n.min=i,n.max=s}),t.setupGrid(),t.draw(),n.preventEvent||t.getPlaceholder().trigger("plotpan",[t,n])},t.hooks.bindEvents.push(c),t.hooks.shutdown.push(h)}var t={xaxis:{zoomRange:null,panRange:null},zoom:{interactive:!1,trigger:"dblclick",amount:1.5},pan:{interactive:!1,cursor:"move",frameRate:20}};e.plot.plugins.push({init:n,options:t,name:"navigate",version:"1.3"})}(jQuery);

		// Float Selection Plugin
		(function(e){function t(t){function s(e){n.active&&(h(e),t.getPlaceholder().trigger("plotselecting",[a()]))}function o(t){if(t.which!=1)return;document.body.focus(),document.onselectstart!==undefined&&r.onselectstart==null&&(r.onselectstart=document.onselectstart,document.onselectstart=function(){return!1}),document.ondrag!==undefined&&r.ondrag==null&&(r.ondrag=document.ondrag,document.ondrag=function(){return!1}),c(n.first,t),n.active=!0,i=function(e){u(e)},e(document).one("mouseup",i)}function u(e){return i=null,document.onselectstart!==undefined&&(document.onselectstart=r.onselectstart),document.ondrag!==undefined&&(document.ondrag=r.ondrag),n.active=!1,h(e),m()?f():(t.getPlaceholder().trigger("plotunselected",[]),t.getPlaceholder().trigger("plotselecting",[null])),!1}function a(){if(!m())return null;if(!n.show)return null;var r={},i=n.first,s=n.second;return e.each(t.getAxes(),function(e,t){if(t.used){var n=t.c2p(i[t.direction]),o=t.c2p(s[t.direction]);r[e]={from:Math.min(n,o),to:Math.max(n,o)}}}),r}function f(){var e=a();t.getPlaceholder().trigger("plotselected",[e]),e.xaxis&&e.yaxis&&t.getPlaceholder().trigger("selected",[{x1:e.xaxis.from,y1:e.yaxis.from,x2:e.xaxis.to,y2:e.yaxis.to}])}function l(e,t,n){return t<e?e:t>n?n:t}function c(e,r){var i=t.getOptions(),s=t.getPlaceholder().offset(),o=t.getPlotOffset();e.x=l(0,r.pageX-s.left-o.left,t.width()),e.y=l(0,r.pageY-s.top-o.top,t.height()),i.selection.mode=="y"&&(e.x=e==n.first?0:t.width()),i.selection.mode=="x"&&(e.y=e==n.first?0:t.height())}function h(e){if(e.pageX==null)return;c(n.second,e),m()?(n.show=!0,t.triggerRedrawOverlay()):p(!0)}function p(e){n.show&&(n.show=!1,t.triggerRedrawOverlay(),e||t.getPlaceholder().trigger("plotunselected",[]))}function d(e,n){var r,i,s,o,u=t.getAxes();for(var a in u){r=u[a];if(r.direction==n){o=n+r.n+"axis",!e[o]&&r.n==1&&(o=n+"axis");if(e[o]){i=e[o].from,s=e[o].to;break}}}e[o]||(r=n=="x"?t.getXAxes()[0]:t.getYAxes()[0],i=e[n+"1"],s=e[n+"2"]);if(i!=null&&s!=null&&i>s){var f=i;i=s,s=f}return{from:i,to:s,axis:r}}function v(e,r){var i,s,o=t.getOptions();o.selection.mode=="y"?(n.first.x=0,n.second.x=t.width()):(s=d(e,"x"),n.first.x=s.axis.p2c(s.from),n.second.x=s.axis.p2c(s.to)),o.selection.mode=="x"?(n.first.y=0,n.second.y=t.height()):(s=d(e,"y"),n.first.y=s.axis.p2c(s.from),n.second.y=s.axis.p2c(s.to)),n.show=!0,t.triggerRedrawOverlay(),!r&&m()&&f()}function m(){var e=t.getOptions().selection.minSize;return Math.abs(n.second.x-n.first.x)>=e&&Math.abs(n.second.y-n.first.y)>=e}var n={first:{x:-1,y:-1},second:{x:-1,y:-1},show:!1,active:!1},r={},i=null;t.clearSelection=p,t.setSelection=v,t.getSelection=a,t.hooks.bindEvents.push(function(e,t){var n=e.getOptions();n.selection.mode!=null&&(t.mousemove(s),t.mousedown(o))}),t.hooks.drawOverlay.push(function(t,r){if(n.show&&m()){var i=t.getPlotOffset(),s=t.getOptions();r.save(),r.translate(i.left,i.top);var o=e.color.parse(s.selection.color);r.strokeStyle=o.scale("a",.8).toString(),r.lineWidth=1,r.lineJoin=s.selection.shape,r.fillStyle=o.scale("a",.4).toString();var u=Math.min(n.first.x,n.second.x)+.5,a=Math.min(n.first.y,n.second.y)+.5,f=Math.abs(n.second.x-n.first.x)-1,l=Math.abs(n.second.y-n.first.y)-1;r.fillRect(u,a,f,l),r.strokeRect(u,a,f,l),r.restore()}}),t.hooks.shutdown.push(function(t,n){n.unbind("mousemove",s),n.unbind("mousedown",o),i&&e(document).unbind("mouseup",i)})}e.plot.plugins.push({init:t,options:{selection:{mode:null,color:"#e8cfac",shape:"round",minSize:5}},name:"selection",version:"1.1"})})(jQuery);

		// Float Threshold Plugin
		(function(e){function n(t){function n(t,n,r,i,s){var o=r.pointsize,u,a,f,l,c,h=e.extend({},n);h.datapoints={points:[],pointsize:o,format:r.format},h.label=null,h.color=s,h.threshold=null,h.originSeries=n,h.data=[];var p=r.points,d=n.lines.show,v=[],m=[],g;for(u=0;u<p.length;u+=o){a=p[u],f=p[u+1],c=l,f<i?l=v:l=m;if(d&&c!=l&&a!=null&&u>0&&p[u-o]!=null){var y=a+(i-f)*(a-p[u-o])/(f-p[u-o+1]);c.push(y),c.push(i);for(g=2;g<o;++g)c.push(p[u+g]);l.push(null),l.push(null);for(g=2;g<o;++g)l.push(p[u+g]);l.push(y),l.push(i);for(g=2;g<o;++g)l.push(p[u+g])}l.push(a),l.push(f);for(g=2;g<o;++g)l.push(p[u+g])}r.points=m,h.datapoints.points=v;if(h.datapoints.points.length>0){var b=e.inArray(n,t.getData());t.getData().splice(b+1,0,h)}}function r(t,r,i){if(!r.threshold)return;r.threshold instanceof Array?(r.threshold.sort(function(e,t){return e.below-t.below}),e(r.threshold).each(function(e,o){n(t,r,i,o.below,o.color)})):n(t,r,i,r.threshold.below,r.threshold.color)}t.hooks.processDatapoints.push(r)}var t={series:{threshold:null}};e.plot.plugins.push({init:n,options:t,name:"threshold",version:"1.2"})})(jQuery);
	
	}
    return {
        init: function () {
            runCharts();
			runChartPlugins();
        }
    };
}();
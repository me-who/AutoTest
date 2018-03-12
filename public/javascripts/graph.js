window.onload = function () {

    var ctx = document.getElementById("myChart").getContext("2d");
    var oBtn = document.getElementById('upload');

    var myNewChart = null;
    Chart.defaults.global.defaultFontColor = '#fff'; // 设置图表的默认字体颜色

    oBtn.onclick = function () {
        if (myNewChart) {
            myNewChart.destroy();
        }
        var arr1 = getValue();
        var arr2 = getValue();
        myNewChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: "My First dataset",
                    lineTension: 0,
                    backgroundColor: 'rgb(244,91,91)', // 点的颜色
                    borderColor: 'rgb(244,91,91)', // 曲线的颜色
                    data: [
                        {
                            x: 0,
                            y: 0.5
                        },
                        {
                            x: 0.1,
                            y: 0.8
                        },
                        {
                            x: 0.5,
                            y: 1
                        },
                        {
                            x: 1,
                            y: 1
                        }
                    ],
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'point',
                    intersect: false,
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'FPR',
                            fontSize: 16
                        },
                        ticks: {
                            max: 1.1,
                            min: 0,
                            stepSize: 0.1
                        },
                        gridLines: {
                            color: 'rgb(112,112,115)',
                        }
                    }],
                    yAxes: [{
                        type: 'linear',
                        display: true,
                        ticks: {
                            max: 1.1,
                            min: 0,
                            stepSize: 0.1
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'TPR',
                            fontSize: 16
                        },
                        gridLines: {
                            color: 'rgb(112,112,115)'
                        }
                    }]
                }
            }
        });
    }
}

function getValue () {
    var arr = [];
    for(var i = 0; i < 12; i++) {
        arr.push(Math.random());
    }
    return arr;
}
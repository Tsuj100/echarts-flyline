import './china'

export function drawMap(echarts, container) {
    let mapData = [
        {
            "startPointName": "保山",
            "startPointBdLng": "99.1729",
            "startPointBdLat": "25.05753",
            "endPointName": "南昌",
            "endPointBdLng": "115.9000015258789",
            "endPointBdLat": "28.864999771118164"
        },
        {
            "startPointName": "烟台",
            "startPointBdLng": "121.37200164794922",
            "startPointBdLat": "37.40169906616211",
            "endPointName": "沈阳",
            "endPointBdLng": "123.48300170898438",
            "endPointBdLat": "41.639801025390625",
        },
        {
            "startPointName": "昆明",
            "startPointBdLng": "102.9291667",
            "startPointBdLat": "25.1019444",
            "endPointName": "烟台",
            "endPointBdLng": "121.37200164794922",
            "endPointBdLat": "37.40169906616211",
        },
        {
            "startPointName": "沈阳",
            "startPointBdLng": "123.48300170898438",
            "startPointBdLat": "41.639801025390625",
            "endPointName": "烟台",
            "endPointBdLng": "121.37200164794922",
            "endPointBdLat": "37.40169906616211",
        },
        {
            "startPointName": "烟台",
            "startPointBdLng": "121.37200164794922",
            "startPointBdLat": "37.40169906616211",
            "endPointName": "昆明",
            "endPointBdLng": "102.9291667",
            "endPointBdLat": "25.1019444",
        },
        {
            "startPointName": "无锡",
            "startPointBdLng": "120.429000854",
            "startPointBdLat": "31.494400024399997",
            "endPointName": "丽江",
            "endPointBdLng": "100.246002197",
            "endPointBdLat": "26.6800003052",
        },
        {
            "startPointName": "无锡",
            "startPointBdLng": "120.429000854",
            "startPointBdLat": "31.494400024399997",
            "endPointName": "昆明",
            "endPointBdLng": "102.9291667",
            "endPointBdLat": "25.1019444",
        },
        {
            "startPointName": "昆明",
            "startPointBdLng": "102.9291667",
            "startPointBdLat": "25.1019444",
            "endPointName": "无锡",
            "endPointBdLng": "120.429000854",
            "endPointBdLat": "31.494400024399997",
        },
        {
            "startPointName": "丽江",
            "startPointBdLng": "100.246002197",
            "startPointBdLat": "26.6800003052",
            "endPointName": "无锡",
            "endPointBdLng": "120.429000854",
            "endPointBdLat": "31.494400024399997",
        },
        {
            "startPointName": "兰州",
            "startPointBdLng": "103.620002747",
            "startPointBdLat": "36.5152015686",
            "endPointName": "南昌",
            "endPointBdLng": "115.9000015258789",
            "endPointBdLat": "28.864999771118164",
        },
        {
            "startPointName": "珠海",
            "startPointBdLng": "113.375999",
            "startPointBdLat": "22.006399",
            "endPointName": "南昌",
            "endPointBdLng": "115.9000015258789",
            "endPointBdLat": "28.864999771118164",
        },
        {
            "startPointName": "南昌",
            "startPointBdLng": "115.9000015258789",
            "startPointBdLat": "28.864999771118164",
            "endPointName": "保山",
            "endPointBdLng": "99.1729",
            "endPointBdLat": "25.05753",
        },
        {
            "startPointName": "南昌",
            "startPointBdLng": "115.9000015258789",
            "startPointBdLat": "28.864999771118164",
            "endPointName": "兰州",
            "endPointBdLng": "103.620002747",
            "endPointBdLat": "36.5152015686",
        },
        {
            "startPointName": "南昌",
            "startPointBdLng": "115.9000015258789",
            "startPointBdLat": "28.864999771118164",
            "endPointName": "珠海",
            "endPointBdLng": "113.375999",
            "endPointBdLat": "22.006399",
        },
        {
            "startPointName": "昆明",
            "startPointBdLng": "102.9291667",
            "startPointBdLat": "25.1019444",
            "endPointName": "成都",
            "endPointBdLng": "103.9469985961914",
            "endPointBdLat": "30.578500747680664",
        },
        {
            "startPointName": "南京",
            "startPointBdLng": "118.86199951171875",
            "startPointBdLat": "31.742000579833984",
            "endPointName": "昆明",
            "endPointBdLng": "102.9291667",
            "endPointBdLat": "25.1019444",
        },
        {
            "startPointName": "保山",
            "startPointBdLng": "99.1729",
            "startPointBdLat": "25.05753",
            "endPointName": "南京",
            "endPointBdLng": "118.86199951171875",
            "endPointBdLat": "31.742000579833984",
        },
        {
            "startPointName": "南京",
            "startPointBdLng": "118.86199951171875",
            "startPointBdLat": "31.742000579833984",
            "endPointName": "保山",
            "endPointBdLng": "99.1729",
            "endPointBdLat": "25.05753",
        },
        {
            "startPointName": "南京",
            "startPointBdLng": "118.86199951171875",
            "startPointBdLat": "31.742000579833984",
            "endPointName": "呼和浩特",
            "endPointBdLng": "111.823997498",
            "endPointBdLat": "40.851398468",
        },
        {
            "startPointName": "呼和浩特",
            "startPointBdLng": "111.823997498",
            "startPointBdLat": "40.851398468",
            "endPointName": "南京",
            "endPointBdLng": "118.86199951171875",
            "endPointBdLat": "31.742000579833984",
        }
    ]
    let chartOption = {
        'areaColor': '#262C38',
        'borderColor': '#fff',
        'lineColor': '#9ae5fc',
        'trailColor': '#fff',
        'endColor': 'rgb(192, 158, 255)'
    }
    let series = [];
    series.push({
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: chartOption.trailColor,
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                width: 0,
                curveness: 0.2
            }
        },
        data: initLineData(mapData)
    }, {
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbolSize: 5
        },
        lineStyle: {
            normal: {
                color: chartOption.lineColor,
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: initLineData(mapData)
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 3;
        },
        data: initEndPointData(mapData)
    }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return val[2] / 3;
        },
        itemStyle: {
            normal: {
                color: chartOption.endColor
            }
        },
        data: initStartPointData(mapData)
    });

    let option = {
        tooltip: {
            show: false
        },
        geo: {
            map: "china",
            roam: true,// 一定要关闭拖拽
            zoom: 1.2,
            center: [105, 36], // 调整地图位置
            label: {
                normal: {
                    show: true, //关闭省份名展示
                    fontSize: "10",
                    color: "#06acea"
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#1a4e98',  // 省区块颜色
                    borderColor: '#14254e', // 省边界线颜色
                    borderWidth: 0, //设置外层边框
                    shadowBlur: 3,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    shadowColor: "#01012a"
                },
                emphasis: {
                    areaColor: '#2267c9',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 5,
                    borderWidth: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        },
        series: series
    };
    echarts.init(container).setOption(option);
}

function initLineData(data) {
    let reault = [];
    for (let i = 0; i < data.length; i++) {
        let el = data[i];
        let fromData = `${el.startPointBdLng},${el.startPointBdLat}`.split(',')
        let toData = `${el.endPointBdLng},${el.endPointBdLat}`.split(',')
        let val = []
        val.push(fromData, toData)
        reault.push({
            fromName: el.startPointName,
            toName: el.endPointName,
            coords: val,
            value: el.num
        })
    }
    return reault;
}

function initEndPointData(data) {
    let reault = [];
    for (let i = 0; i < data.length; i++) {
        let el = data[i];
        let val = `${el.endPointBdLng},${el.endPointBdLat},30`.split(',')
        reault.push({
            name: el.endPointName,
            value: val
        })
    }
    return reault;
}
function initStartPointData(data) {
    let reault = [];
    for (let i = 0; i < data.length; i++) {
        let el = data[i];
        let val = `${el.startPointBdLng},${el.startPointBdLat},30`.split(',')
        reault.push({
            name: el.startPointName,
            value: val
        })
    }
    return reault;
}
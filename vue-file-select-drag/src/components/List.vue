<template>
    <div>
        <div class ='header'>header</div>
        <div class ='menu'>menu</div>
        <div class='fileContent' v-drag id='mainContent'>
            <div class="fileDiv">file1</div>
            <div class="fileDiv">file2</div>
            <div class="fileDiv">file3</div>
            <div class="fileDiv">file4</div>
            <div class="fileDiv">file5</div>
            <div class="fileDiv">file6</div>
            <div class="fileDiv">file7</div>
            <div class="fileDiv">file8</div>
            <div class="fileDiv">file9</div>
            <div class="fileDiv">file10</div>
            <div class="fileDiv">file11</div>
            <div class="fileDiv">file12</div>
            <div class="fileDiv">file13</div>
            <div class="fileDiv">file14</div>
            <div class="fileDiv">file15</div>
            <div class="fileDiv">file16</div>
            <div class="fileDiv">file17</div> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data () {
            return {
            }
        },
        methods: {
            clearEventBubble (evt) {
                if (evt.stopPropagation) {
                    evt.stopPropagation()
                } else {
                    evt.cancelBubble = true
                }
                if (evt.preventDefault) {
                    evt.preventDefault()
                } else {
                    evt.returnValue = false
                }
            },
            showSelDiv (arr) {
                var count = 0
                var selInfo = ''
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].className.indexOf('seled') !== -1) {
                        count++
                        selInfo += arr[i].innerHTML + '\n'
                    }
                }
                if (count > 0) {
                    alert('共选择' + count + ' 个文件，分别是：\n' + selInfo)
                }
            }
        },
        directives: {
            drag: function (el, option, vnode) {
                el.onmousedown = function () {
                    // TODO:判断是否有已选文件，有则实现拖拽功能
                    var selList = []
                    var fileNodes = el.children
                    for (var i = 0; i < fileNodes.length; i++) {
                        if (fileNodes[i].className.indexOf('fileDiv') !== -1) {
                            fileNodes[i].className = 'fileDiv'
                            selList.push(fileNodes[i])
                        }
                    }

                    var isSelect = true
                    var evt = event || arguments[0]
                    var startX = (evt.x || evt.clientX) - evt.currentTarget.offsetLeft // 鼠标相对于引起事件的元素的父元素的X坐标
                    var startY = (evt.y || evt.clientY) - evt.currentTarget.offsetTop

                    var vcurrent = document.getElementById('mainContent')
                    var selDiv = document.createElement('div')
                    selDiv.id = 'selectDiv'
                    selDiv.style.cssText = 'position:absolute;width:0px;height:0px;font-size:0px;margin:0px;padding:0px;border:1px dashed #3a9cfd;background-color:#a8caec;z-index:1000;filter:alpha(opacity:60);opacity:0.6;display:none;'
                    vcurrent.appendChild(selDiv)
                    selDiv.style.left = startX + 'px'
                    selDiv.style.top = startY + 'px'
                    var _x = null
                    var _y = null

                    vnode.context.clearEventBubble(evt)

                    el.onmousemove = function () {
                        // TODO:如果出现滚动轴selDiv变化
                        evt = event || arguments[0]
                        if (isSelect) {
                            if (selDiv.style.display === 'none') {
                                selDiv.style.display = ''
                            }
                            _x = (evt.x || evt.clientX) - evt.currentTarget.offsetLeft
                            _y = (evt.y || evt.clientY) - evt.currentTarget.offsetTop + evt.currentTarget.scrollTop
                            // 鼠标移动范围画矩形selDiv，适应左右上下移动的情况
                            selDiv.style.left = Math.min(_x, startX) + 'px'
                            selDiv.style.top = Math.min(_y, startY) + 'px'
                            selDiv.style.width = Math.abs(_x - startX) + 'px'
                            selDiv.style.height = Math.abs(_y - startY) + 'px'
                            var _l = selDiv.offsetLeft
                            var _t = selDiv.offsetTop
                            var _w = selDiv.offsetWidth
                            var _h = selDiv.offsetHeight

                            // for (var i = 0; i < selList.length; i++) {
                            //     var sl = selList[i].offsetWidth + selList[i].offsetLeft + evt.currentTarget.offsetLeft
                            //     var st = selList[i].offsetHeight + selList[i].offsetTop + evt.currentTarget.offsetTop - evt.currentTarget.scrollTop
                            //     // 判断鼠标移动范围选中的文件，选中用.seled标记
                            //     if (sl > _l &&
                            //         st > _t &&
                            //         selList[i].offsetLeft + evt.currentTarget.offsetLeft < _l + _w &&
                            //         selList[i].offsetTop + evt.currentTarget.offsetTop - evt.currentTarget.scrollTop < _t + _h) {
                            //         if (selList[i].className.indexOf('seled') === -1) {
                            //             selList[i].className = selList[i].className + ' seled'
                            //         }
                            //     } else {
                            //         if (selList[i].className.indexOf('seled') !== -1) {
                            //             selList[i].className = 'fileDiv'
                            //         }
                            //     }
                            // }
                            for (var i = 0; i < selList.length; i++) {
                                var sl = selList[i].offsetWidth + selList[i].offsetLeft
                                var st = selList[i].offsetHeight + selList[i].offsetTop
                                // 判断鼠标移动范围选中的文件，选中用.seled标记
                                if (sl > _l &&
                                    st > _t &&
                                    selList[i].offsetLeft < _l + _w &&
                                    selList[i].offsetTop < _t + _h) {
                                    if (selList[i].className.indexOf('seled') === -1) {
                                        selList[i].className = selList[i].className + ' seled'
                                    }
                                } else {
                                    if (selList[i].className.indexOf('seled') !== -1) {
                                        selList[i].className = 'fileDiv'
                                    }
                                }
                            }
                        }
                        vnode.context.clearEventBubble(evt)
                    }

                    document.onmouseup = function () {
                        isSelect = false
                        if (selDiv) {
                            vcurrent.removeChild(selDiv)
                            vnode.context.showSelDiv(selList)
                        }
                        selList = null
                        _x = null
                        _y = null
                        selDiv = null
                        startX = null
                        startY = null
                        evt = null
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 50px;
        background: #666;
    }
    .menu{
        width: 100px;
        height : -moz-calc(100% - 50px);
        height : -webkit-calc(100% - 50px);
        height : calc(100% - 50px);
        background: #999;
        position: absolute;
    }
    .fileContent{
        height : -moz-calc(100% - 90px);
        height : -webkit-calc(100% - 90px);
        height : calc(100% - 90px);
        width : -moz-calc(100% - 140px);
        width : -webkit-calc(100% - 140px);
        width : calc(100% - 140px);
        position: absolute;
        left: 100px;
        overflow: auto;
        padding: 20px;
    }
    .fileDiv {
        float: left;
        width: 150px;
        height: 150px;
        text-align: center;
        line-height: 150px;
        font-size: 12px;
        border: 1px solid #ccc;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .seled {
        border: 1px solid #b4ceed;
        background-color: #d9eafe;
    }
</style>

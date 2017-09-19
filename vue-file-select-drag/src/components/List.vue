<template>
    <div>
        <div class='header'>header</div>
        <div class='menu' @drop='drop($event)'
             @dragover='dragover($event)'>menu</div>
        <div class='fileContent' v-drag id='mainContent'>
            <div
                class="fileDiv"
                v-for="(file, index) of files"
                @drop="file.ftype === 'folder' ? drop($event) : ''"
                @dragover="file.ftype === 'folder' ? dragover($event) : ''"
                @dragenter="file.ftype === 'folder' ? dragenter($event) : ''"
                @dragleave="file.ftype === 'folder' ? dragleave($event) : ''"
                :key="file.id"
                :id='file.id'
            >{{file.fname}}
            </div>
        </div>
        <div id="move">
            <div class="content">
                <i></i>
                <span class="num">{{selIds.length}}</span>
                <p id="move-path"><a>移动到</a>我的云文档</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data () {
            return {
                files: [
                    {
                        'groupid': 186301522,
                        'parentid': 0,
                        'fname': 'yrtutryur',
                        'fsize': 0,
                        'ftype': 'folder',
                        'ctime': 1505441918,
                        'mtime': 1505441918,
                        'store': 1,
                        'storeid': '',
                        'fver': 1,
                        'fsha': '',
                        'deleted': false,
                        'id': 3768010404,
                        'creator': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        },
                        'modifier': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        }
                    },
                    {
                        'groupid': 186301522,
                        'parentid': 0,
                        'fname': 'eeeeee.ppt',
                        'fsize': 20992,
                        'ftype': 'file',
                        'ctime': 1505441937,
                        'mtime': 1505441937,
                        'store': 1,
                        'storeid': 'gXFPqpbt0mAmEyI9AFIAm7gj7L3tJ(bCzmz9lXE4iAXnuhM',
                        'fver': 1,
                        'fsha': '9bb823ecbded27e6c2ce6cfd9571388805e7ba13',
                        'deleted': false,
                        'id': 3768022278,
                        'creator': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        },
                        'modifier': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        }
                    },
                    {
                        'groupid': 186301522,
                        'parentid': 0,
                        'fname': 'wwwwww.xls',
                        'fsize': 7168,
                        'ftype': 'file',
                        'ctime': 1505441932,
                        'mtime': 1505441932,
                        'store': 1,
                        'storeid': 'pkOg9Nho0KkLmCxMABwAbPqUZPZl19F6Wm4UYYv1wOVJX3A',
                        'fver': 1,
                        'fsha': '6cfa9464f665d7d17a5a6e14618bf5c0e5495f70',
                        'deleted': false,
                        'id': 3768018965,
                        'creator': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        },
                        'modifier': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        }
                    },
                    {
                        'groupid': 186301522,
                        'parentid': 0,
                        'fname': 'qqqqqq.doc',
                        'fsize': 9216,
                        'ftype': 'file',
                        'ctime': 1505441926,
                        'mtime': 1505441926,
                        'store': 1,
                        'storeid': 'w()GoldasNeyy53(ACQAGDpe08atmwvAkIMRmapyQBioSuA',
                        'fver': 1,
                        'fsha': '183a5ed3c6ad9b0bc090831199aa724018a84ae0',
                        'deleted': false,
                        'id': 3768015630,
                        'creator': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        },
                        'modifier': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        }
                    },
                    {
                        'groupid': 186301522,
                        'parentid': 0,
                        'fname': 'totoro.jpg',
                        'fsize': 13581,
                        'ftype': 'file',
                        'ctime': 1493015571,
                        'mtime': 1493015571,
                        'store': 1,
                        'storeid': 'vjJ0I9sC7jDgWgd8ADUNFJWV0bRJAQJwi8XP)XeyLL2smwY',
                        'fver': 1,
                        'fsha': '149595d1b4490102708bc5cffd77b22cbdac9b06',
                        'deleted': false,
                        'id': 2019785973,
                        'creator': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        },
                        'modifier': {
                            'id': 200295289,
                            'name': '小箱',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/23FF7C8210951E921DBC934AEECD7871/100',
                            'corpid': 0
                        }
                    },
                    {
                        'groupid': 186301522,
                        'parentid': 0,
                        'fname': '9楼B座位.jpg',
                        'fsize': 85430,
                        'ftype': 'file',
                        'ctime': 1492421307,
                        'mtime': 1492421307,
                        'store': 1,
                        'storeid': 'oXwAaDB8VBwcaT7fAU22JUXHFcZpgwEYLsGJCcLAZgmlxdU',
                        'fver': 1,
                        'fsha': '2545c715c6698301182ec18909c2c06609a5c5d5',
                        'deleted': false,
                        'id': 1989807141,
                        'creator': {
                            'id': 196726302,
                            'name': 'hugo',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/115646548BEA2E714DD4130345EAF3AF/100',
                            'corpid': 0
                        },
                        'modifier': {
                            'id': 196726302,
                            'name': 'hugo',
                            'avatar': 'https://q.qlogo.cn/qqapp/100360965/115646548BEA2E714DD4130345EAF3AF/100',
                            'corpid': 0
                        }
                    }
                ],
                selIds: []
            }
        },
        methods: {
            dragover: function (event) {
                event.stopPropagation()
                event.preventDefault()
            },
            dragenter: function (event) {
                if (event.target.className === 'fileDiv') {
                    event.target.className = event.target.className + ' seled'
                }
            },
            dragleave: function (event) {
                if (event.target.className.indexOf('fileDiv') !== -1) {
                    event.target.className = 'fileDiv'
                }
            },
            drop: function (event) {
                event.stopPropagation()
                event.preventDefault()
                if (event.target.className.indexOf('fileDiv') !== -1) {
                    event.target.className = 'fileDiv'
                }
                this.files = this.files.filter(file => {
                    return this.selIds.indexOf(file.id) === -1
                })
                this.selIds = []
            },
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
            checkScroll (evt) {
                let est = evt.currentTarget.scrollHeight // 实际页面高度
                let ect = evt.currentTarget.clientHeight // 可见页面高度
                var t
                // TODO：存在滚动轴并且鼠标触底，该判断待优化
                if (est > ect && ect - evt.layerY < 5) {
                    document.getElementById('mainContent').style.background = 'pink'
                    // console.log(est, ect, evt.layerY, ect - evt.layerY)
                    t = setTimeout(this.timedCount(), 1000)
                } else {
                    clearTimeout(t)
                    document.getElementById('mainContent').style.background = 'lightyellow'
                }
            },
            timedCount () {
                let st = document.getElementById('mainContent').scrollTop
                document.getElementById('mainContent').scrollTop = st + 10
            }
        },
        directives: {
            drag: function (el, option, vnode) {
                // TODO:区分单击事件跟拖拽事件
                el.onmousedown = function () {
                    let goDrag = false
                    // 判断是否有已选文件且点击位置在该范围文件内，有则实现拖拽功能
                    if (vnode.context.selIds.length !== 0) {
                        if (vnode.context.selIds.find(id => id === parseInt(event.path[0].id))) {
                            goDrag = true
                        }
                    }
                    if (goDrag) {
                        el.ondragstart = function (event) {
                            event.dataTransfer.setData('Text', JSON.stringify(this.files))
                            let id = document.getElementById('move')
                            event.dataTransfer.setDragImage(id, 0, 0)
                        }
                    } else {
                        var selList = []
                        var selIds = []
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
                        var startY = (evt.y || evt.clientY) - evt.currentTarget.offsetTop + evt.currentTarget.scrollTop

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
                        let mouseMove = function () {
                            console.log(1)
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
                                            selList[i].setAttribute('draggable', true)
                                            selIds.push(parseInt(selList[i].id))
                                        }
                                    } else {
                                        if (selList[i].className.indexOf('seled') !== -1) {
                                            selList[i].className = 'fileDiv'
                                            selList[i].setAttribute('draggable', false)
                                            let plusId = selList[i].id.split(',')
                                            plusId[0] = parseInt(plusId[0])
                                            let selIdsSet = new Set(selIds)
                                            let plusIdSet = new Set(plusId)
                                            selIds = Array.from(new Set([...selIdsSet].filter(x => !plusIdSet.has(x))))
                                        }
                                    }
                                }
                            }
                            // TODO：触底滚动效果
                            // vnode.context.checkScroll(evt)
                            vnode.context.clearEventBubble(evt)
                        }

                        el.addEventListener('mousemove', mouseMove, false)

                        document.onmouseup = function () {
                            isSelect = false
                            if (selDiv) {
                                vcurrent.removeChild(selDiv)
                                vnode.context.selIds = selIds
                                // alert('共选择' + selIds.length + ' 个文件，分别是：\n' + selIds)
                            }
                            selList = null
                            _x = null
                            _y = null
                            selDiv = null
                            startX = null
                            startY = null
                            evt = null
                            el.removeEventListener('mousemove', mouseMove, false)
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .header {
        width: 100%;
        height: 50px;
        background: #666;
    }

    .menu {
        width: 100px;
        height: calc(~ "100% - 50px");
        background: #999;
        position: absolute;
    }

    .fileContent {
        height: calc(~ "100% - 90px");
        width: calc(~ "100% - 140px");
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

    #move {
        position: absolute;
        top: -10000px;
        left: -10000px;
        .content {
            position: relative;
            width: 150px;
            i {
                background: pink;
                width: 50px;
                height: 50px;
                display: block;
                border-radius: 3px;
            }
            span {
                &.num {
                    display: block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    background: dodgerblue;
                    border-radius: 50%;
                    position: absolute;
                    top: 30px;
                    left: 30px;
                }
            }
            #move-path {
                display: none;
            }
        }
    }
</style>

<template>
    <div>
        <div id="main">
            <h1>Vue Draggable</h1>
            <div class="aside" id="aside" @drop='drop($event)' @dragover='dragover($event)'>
                <p>侧边栏</p>
                <ul>

                </ul>
            </div>
            <div class="list">
                <div v-for="item in files" key="item.id" :type='item.type'
                     :num="item.id"
                     :class="{ item: true, selected: item.selected }"
                     @dragstart='dragstart($event)'
                     @dragenter="dragenter($event,item)"
                     @dragleave="dragleave($event,item)"
                     @dragover='dragover($event)'
                     @drop='dropList($event)'
                     :draggable="item.selected">
                    <span></span>
                    <p> {{item.name}}</p>
                </div>
            </div>
        </div>
        <div id="move">
            <div class="content">
                <i></i>
                <span class="num">{{selected.length}}</span>
                <p id="move-path"><a>移动到</a>我的云文档</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Drag',
        data () {
            return {
                files: [{
                    id: 1,
                    type: 'folder',
                    name: 'folder',
                    selected: true,
                    color: 'red'
                }, {
                    id: 2,
                    type: 'file',
                    name: 'file2',
                    selected: true,
                    color: 'blue'
                }, {
                    id: 3,
                    type: 'file',
                    name: 'file3',
                    selected: false
                }, {
                    id: 4,
                    type: 'file',
                    name: 'file4',
                    selected: false
                }, {
                    id: 5,
                    type: 'folder',
                    name: 'folder1',
                    selected: false
                }]
            }
        },
        computed: {
            selected () {
                return this.files.filter(file => file.selected)
            },
            fileList () {
                return this.files
            }
        },

        methods: {
            closest: function (el, selector) {
                var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector

                while (el) {
                    if (matchesSelector.call(el, selector)) {
                        break
                    }
                    el = el.parentElement
                }
                return el
            },
            dragstart: function (event) {
                event.dataTransfer.setData('Text', JSON.stringify(this.files))
                let id = document.getElementById('move')
                event.dataTransfer.setDragImage(id, 0, 0)
            },
            dragover: function (event) {
                event.preventDefault()
            },
            dragenter: function (event, item) {
                event.preventDefault()
                if (this.closest(event.target, '.item').getAttribute('type') === 'folder') {
                    this.closest(event.target, '.item').classList.add('selected')
                }
            },
            dragleave: function (event, item) {
                event.preventDefault()
                if (this.closest(event.target, '.item').getAttribute('class').indexOf('selected') === -1) {
                    this.closest(event.target, '.item').classList.remove('selected')
                }
            },
            dropList: function (event) {
                event.preventDefault()
                this.closest(event.target, '.item').classList.remove('selected')
                this.files = this.files.filter(file => !file.selected)
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>

    .main {
        width: 1000px;
    }

    .aside {
        display: inline-block;
        width: 200px;
        border: 1px solid;
        height: 400px;
        vertical-align: top;
    }

    .list {
        display: inline-block;
        width: 600px;
        margin: auto;
    }

    .item {
        float: left;
        width: 50px;
        margin: 30px 50px;
        padding: 20px;
        span {
            display: block;
            width: 50px;
            height: 50px;
            background: pink;
        }

        &.selected {
            background: #dfdfff;
        }
    }

    #move {
        position: absolute;
        /*top: -10000px;*/
        /*left: -10000px;*/
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


<template>
  <div class='fileContent' v-drag>
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
        document.onmousedown = function () {
        // TODO:判断是否有已选文件，有则实现拖拽功能
          var selList = []
          var fileNodes = el.children
          // debugger
          for (var i = 0; i < fileNodes.length; i++) {
            if (fileNodes[i].className.indexOf('fileDiv') !== -1) {
              fileNodes[i].className = 'fileDiv'
              selList.push(fileNodes[i])
            }
          }

          var isSelect = true
          var evt = window.event || arguments[0]
          var startX = (evt.x || evt.clientX)
          var startY = (evt.y || evt.clientY)
          var selDiv = document.createElement('div')

          selDiv.style.cssText = 'position:absolute;width:0px;height:0px;font-size:0px;margin:0px;padding:0px;border:1px dashed #0099FF;background-color:#C3D5ED;z-index:1000;filter:alpha(opacity:60);opacity:0.6;display:none;'

          selDiv.id = 'selectDiv'
          document.body.appendChild(selDiv)
          selDiv.style.left = startX + 'px'
          selDiv.style.top = startY + 'px'
          var _x = null
          var _y = null

          vnode.context.clearEventBubble(evt)

          document.onmousemove = function () {
            // TODO:如果出现滚动轴selDiv变化
            evt = window.event || arguments[0]
            if (isSelect) {
              if (selDiv.style.display === 'none') {
                selDiv.style.display = ''
              }
              _x = (evt.x || evt.clientX)
              _y = (evt.y || evt.clientY)
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
                if (sl > _l && st > _t && selList[i].offsetLeft < _l + _w && selList[i].offsetTop < _t + _h) {
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
              document.body.removeChild(selDiv)
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
    border: 1px solid red;
    background-color: #D6DFF7;
  }
</style>

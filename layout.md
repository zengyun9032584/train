# 响应式布局
一.浏览器各个高度
1.电脑屏幕高度：screen.height
2.屏幕可用高度（去除任务栏）：screen.availHeight
3.浏览器高度： window.outerHeight
4.页面可用高度（包含横向滚动条）： window.innerHeight
5.工具栏高度（地址栏+书签栏）：window.outerHeight - window.innerHeight
6.Body展示高度: body.clientHeight
7.横向滚动条高度： window.innerHeight - body.clientHeight

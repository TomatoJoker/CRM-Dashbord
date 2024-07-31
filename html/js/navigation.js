"use strict";

function pageWidget(pages) {
  var widgetWrap = document.createElement('div');
  widgetWrap.className = 'widget_wrap';
  var widgetList = document.createElement('ul');
  widgetList.className = 'widget_list';
  widgetWrap.appendChild(widgetList);
  document.body.insertBefore(widgetWrap, document.body.firstChild);
  pages.forEach(function (page) {
    var listItem = document.createElement('li');
    listItem.className = 'widget_item';
    var link = document.createElement('a');
    link.className = 'widget_link';
    link.href = page + '.html';
    link.textContent = page;
    listItem.appendChild(link);
    widgetList.appendChild(listItem);
  });
  var styles = "\n        body {position:relative} \n        .widget_wrap {\n            position:absolute;\n            top:0;\n            left:0;\n            z-index:999999;\n            padding:10px 20px;\n            background:#222;\n            border-bottom-right-radius:10px;\n            transition:all .3s ease;\n            transform:translate(-100%, 0);\n        }\n        .widget_wrap:after {\n            content:\" \";\n            position:absolute;\n            top:0;\n            left:100%;\n            width:24px;\n            height:24px;\n            background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;\n            cursor:pointer;\n        }\n        .widget_wrap:hover {\n            transform:translate(0, 0);\n        }\n        .widget_item {\n            padding:0 0 10px;\n        }\n        .widget_link {\n            color:#fff;\n            text-decoration:none;\n            font-size:15px;\n        }\n        .widget_link:hover {\n            text-decoration:underline;\n        }\n    ";
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
document.addEventListener("DOMContentLoaded", function () {
  pageWidget(['index']);
});
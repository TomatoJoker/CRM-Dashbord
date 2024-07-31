function pageWidget(pages) {
    var widgetWrap = document.createElement('div');
    widgetWrap.className = 'widget_wrap';

    var widgetList = document.createElement('ul');
    widgetList.className = 'widget_list';
    widgetWrap.appendChild(widgetList);

    document.body.insertBefore(widgetWrap, document.body.firstChild);

    pages.forEach(function(page) {

        var listItem = document.createElement('li');
        listItem.className = 'widget_item';

        var link = document.createElement('a');
        link.className = 'widget_link';
        link.href = page + '.html';
        link.textContent = page;

        listItem.appendChild(link);
        widgetList.appendChild(listItem);
    });

    var styles = `
        body {position:relative} 
        .widget_wrap {
            position:absolute;
            top:0;
            left:0;
            z-index:999999;
            padding:10px 20px;
            background:#222;
            border-bottom-right-radius:10px;
            transition:all .3s ease;
            transform:translate(-100%, 0);
        }
        .widget_wrap:after {
            content:" ";
            position:absolute;
            top:0;
            left:100%;
            width:24px;
            height:24px;
            background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;
            cursor:pointer;
        }
        .widget_wrap:hover {
            transform:translate(0, 0);
        }
        .widget_item {
            padding:0 0 10px;
        }
        .widget_link {
            color:#fff;
            text-decoration:none;
            font-size:15px;
        }
        .widget_link:hover {
            text-decoration:underline;
        }
    `;

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

document.addEventListener("DOMContentLoaded", function() {
    pageWidget(['index']);
});
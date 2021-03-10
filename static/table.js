window.addEventListener("load", function () {
    var _loop_1 = function (tr) {
        var tableRow = tr;
        tableRow.onclick = function () {
            var aElement = tableRow.getElementsByTagName("a")[0];
            window.location.href = aElement.getAttribute("href");
        };
    };
    for (var _i = 0, _a = $$(".table-row"); _i < _a.length; _i++) {
        var tr = _a[_i];
        _loop_1(tr);
    }
});

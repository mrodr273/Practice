$(document).ready(function(){
    alert("hello");
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
    });
});
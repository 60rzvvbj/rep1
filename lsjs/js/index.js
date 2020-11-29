var btn = getDom('button');
console.log(btn);
btn.addEventListener('click', function () {
    jsonp({
        url: '/jsonp',
        data: {
            number: 12
        },
        success: function (res) {
            console.log(res);
        }
    })
});
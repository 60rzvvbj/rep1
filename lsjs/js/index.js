var btn = getDom('button');
// btn.addEventListener('click', function () {
//     jsonp({
//         url: '/jsonp',
//         data: {
//             number: 12
//         },
//         success: function (res) {
//             console.log(res);
//         }
//     })
// });

btn.addEventListener('click', function () {
    $.ajax({
        type: 'put',
        url: '/testPut',
        data: {
            text: 'adsasd\nadaad'
        },
        success: function (res) {
            console.log(res);
        }
    });
});

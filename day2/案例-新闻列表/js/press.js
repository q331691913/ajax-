$(function() {

    $.ajax({
        type: 'GET',
        url: 'http://www.liulongbin.top:3006/api/news',
        success(res) {
            if (res.status !== 200) return alert('没有获取到新闻')
            res.data.forEach(item => item.tags = item.tags.split(','))
            console.log(res);
            let news = template('moban', res)
            $('#news-list').html(news)
        }
    })
})
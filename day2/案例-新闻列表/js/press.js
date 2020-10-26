$(function() {

    template.defaults.imports.formatDate = function(data) {
        let date = new Date(data)
        let y = date.getFullYear()
        let m = (date.getMonth() + 1).toString().padStart(2, 0)
        let d = date.getDate().toString().padStart(2, 0)
        let h = date.getHours().toString().padStart(2, 0)
        let miu = date.getMinutes().toString().padStart(2, 0)
        let s = date.getSeconds().toString().padStart(2, 0)
        return `${y}-${m}-${d} ${h}:${miu}:${s}`
    }
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
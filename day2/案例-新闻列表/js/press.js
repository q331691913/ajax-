$(function() {
    function getNotime() {
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
    }
    getNotime()
    $.ajax({
        type: 'GET',
        url: 'http://www.liulongbin.top:3006/api/news',
        success(res) {
            if (res.status !== 200) return alert('获取新闻失败')
            res.data.forEach(item => item.tags = item.tags.split(','))
            let data = template('moban', res)
            console.log(res);
            $('#news-list').html(data)
        }
    })

})
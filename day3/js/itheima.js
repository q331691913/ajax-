function resolvData(data) {
    let arr = []
    for (var k in data) {
        let str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.jion('&')
}

function itheima(options) {
    let xhr = new XMLHttpRequest()
        //把外界传递过来的参数对象，转换为查询字符串
    let qs = resolvData(options.data)
    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 & xhr.status === 200) {
            let result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}
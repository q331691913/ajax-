$(function() {
    const BAN_URL = 'http://www.liulongbin.top:3006'

    function getCommentList() {
        $.ajax({
            type: 'GET',
            url: BAN_URL + '/api/cmtlist',
            success(res) {
                if (res.status !== 200) return alert('获取评论失败')
                let rows = []
                res.data.forEach(item => {

                    let str = `   <li class="list-group-item">
                    <span class="badge" style="background-color:#F0AD4E">评论时间：${item.time}</span>
                    <span class="badge" style="background-color:#5BC0DE">评论人：${item.username}</span>${item.content}
                </li>
                `
                    rows.push(str)
                })
                $('#cmt-list').empty().append(rows)

            }
        })
    }
    getCommentList()
        //发表评论
    $('#formAddCmt').submit(function(e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: BAN_URL + '/api/addcmt',
            data,
            success(res) {
                if (res.status !== 201) return alert('评论失败')
                getCommentList()
            }
        })
        $('#formAddCmt')[0].reset()
    })

})
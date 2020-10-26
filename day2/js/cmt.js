$(function() {
    const BAN_URL = 'http://www.liulongbin.top:3006'

    function getCommentList() {
        $.ajax({

            url: BAN_URL + '/api/cmtlist',
            success(res) {
                if (res.status !== 200) return alert('获取评论失败')
                let rows = []
                res.data.forEach(item => {
                    let str = `
                    <li class="list-group-item">
                    <span class="badge" style="background-color:#F0AD4E">评论时间：${item.time}</span>
                    <span class="badge" style="background-color:#5BC0DE">评论人：${item.username}</span>${item.content}
                </li>
                `

                    rows.push(str)

                })
                $('#cmt-list').empty().append(rows.join(''))
            }

        })
    }
    getCommentList()
    $("#formAddCmt").submit(function(e) {
        e.preventDefault()
        let data1 = $('#ipt1').val()
        let data2 = $('#ipt2').val()
        $.ajax({
            type: 'POST',
            url: BAN_URL + '/api/addcmt',
            data: {
                username: data1,
                content: data2
            },
            success(res) {
                if (res.status !== 201) return alert('发表失败')
                getCommentList()
            }
        })
        $('#formAddCmt')[0].reset()
    })
})
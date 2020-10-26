$(function() {
    function CmomentList() {
        $.ajax({
            url: 'http://www.liulongbin.top:3006/api/cmtlist',
            success(res) {
                if (res.status !== 200) return alert('获取列表失败')

                let rows = []
                res.data.forEach(item => {
                    let set = `  <li class="list-group-item">
                 <span class="badge" style="background-color:#F0AD4E">评论时间：${item.time}</span>
                 <span class="badge" style="background-color:#5BC0DE">评论人：${item.username}</span> ${item.content}
             </li>`
                    rows.push(set)
                })
                $("#cmt-list").empty().append(rows)


            }

        })
    }
    CmomentList();
    $('#formAddCmt').submit(function(e) {
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addcmt',
            data,
            success(res) {
                if (res.status !== 201) return alert('评论获取失败')
                CmomentList()
            }
        })
        $('#formAddCmt')[0].reset()
        return false

    })

})
$(function() {
    const BAN_URL = 'http://www.liulongbin.top:3006'

    function getCommentList() {
        $.ajax({

            url: BAN_URL + '/api/cmtlist',
            success(res) {
                if (res.status !== 200) return alert('获取评论失败')
                console.log(res);
                let newItem = template('moban', res)
                $("#cmt-list").html(newItem)
            }

        })
    }
    getCommentList()
    $("#formAddCmt").submit(function(e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            type: 'POST',
            url: BAN_URL + '/api/addcmt',
            data,
            success(res) {
                if (res.status !== 201) return alert('发表失败')
                getCommentList()
            }
        })
        $('#formAddCmt')[0].reset()
    })
})
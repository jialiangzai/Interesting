$(function name(params) {
    //初始化滚动条
    resetui()
    $('#btnSend').on('click', function () {
        var text = $('#ipt').val().trim();
        if (text.length <= 0) {
            return $('#ipt').val('');
        }
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
        $('#ipt').val('');
        resetui();
        getMag(text)
    })
    function getMag(text) {
        $.ajax(
            {
                method: 'GET',
                url: 'http://www.liulongbin.top:3006/api/robot',
                data: {
                    spoken: text
                },
                success: function (res) {
                    if (res.message === 'success') {//响应数据和服务器请求成功返回的数据一致
                        var msg = res.data.info.text;
                        $('#talk_list').append('<li class="left_word"><img src="img/person01.png" alt=""><span>' + msg + '</span></li>')
                        resetui();
                        getVoice(msg);
                    }
                }
            }
        )
    };
    function getVoice (text) {
        $.ajax({
            type:'GET',
            url:'http://www.liulongbin.top:3006/api/synthesize',
            data:{
                text:text,
            },
            success:function (res) {
                if (res.status===200) {
                    $('#voice').attr('src',res.voiceUrl)
                }
            }
        })
    };
    $('#ipt').on('keyup',function (e) {
        if (e.keyCode===13) {
            $('#btnSend').click();
        }
    })





















})
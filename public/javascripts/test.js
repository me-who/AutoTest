$('#uploadForm span').css({paddingLeft:($('#uploadForm span').width() - 25)/2 + 'px'});
//将选取的文件路径添加到输入框
$('#file').on("change",function () {
    var filePath = $('#file')[0].value;
    $('#filePath').val(filePath);
})

//传输
var formData = new FormData();
formData.append('file',$('#file')[0].files[0]);

$('#upload').on('click',function () {
    $.ajax({
        url: "test.php",
        type: 'POST',
        cache: false,
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            alert(".done uploader!")
        }

    })
})
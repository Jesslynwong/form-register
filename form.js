function checkForm() {
    notice = document.getElementById("notice"); //不能有s,不能有.value不然undefined
    // username check
    var username = document.getElementsByName("username")[0]
    .value; //getElementsByName出来的是集合，id才有value;要.value才是取里面的值
    // console.log(username)
    isEmpty(username);
    if (isEmpty(username)) { //要先判断是否为空，不然length是undifine
        notice.innerHTML = "用户名不能为空";
        return 0;
    } else if (username.length < 6 || username.length > 12) {
        notice.innerHTML = "用户名必须在6到12位";
        return 0;
    }

    // password check
    var password = document.getElementsByName("pwd")[0];
    if (isEmpty(password)) {
        notice.innerHTML = "密码不能为空";
        return 0;
    }
    if (password.length < 6 || password.length > 12) {
        notice.innerHTML = "密码必须在6到12位";
        return 0;
    }
    console.log(password.toString().indexOf(username));
    if (password.toString().indexOf(username) != -1) { //要先变成str，不然会说indexOF没有define
        notice.innerHTML = "密码不能为用户名";
        return 0;
    }
    //gender check
    var sex = document.getElementsByName("sex")[0];
    for (var i = 0; i < sex.length; i++) { //选取gender
        if (sex[i].checked == true) {
            var gender = sex[i].value; //获取单选值
        }
    }
    //hobby check
    var hobby = document.getElementsByName("hobby");
    var fav = '';
    for (i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            fav = fav + hobby[i].value + ","; //爱好收录于fav中 
        }
    }
    if (isEmpty(fav)) {
        notice.innerHTML = "爱好必须选";
        return 0;
    }
    fav = fav.substring(0, fav.length); //提取字符串
    //birth of place check
    var birthOfPlace = document.getElementById("birthOfPlace").value;
    if (birthOfPlace == -1) {
        notice.innerHTML = "出生地址不能为空";
        return 0;
    }
    return true; //无错误,判断notice为空则为true  

    //判断是否为空函数
    function isEmpty(str) {
        if (str == null || str == "") {
            // 
            return true;
        } else {
            return false;
        }
    }
}
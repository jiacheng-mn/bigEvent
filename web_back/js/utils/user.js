
var user = {
    /**
     * 用户登录
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    login: function (userName, password, callBack) {
        // 发ajax请求
        $.post('http://localhost:8000/admin/login', {
            user_name: userName,
            password: password
        }, function (res) {
            // res 就是响应体。是由$.post这个方法决定的
            callBack(res);
        })
    },
    /**
     * 用户退出
     * @param {*} callBack 回调函数
     */
    logout: function (callBack) {
        $.post('http://localhost:8000/admin/logout', function (res) {
            callBack(res);
        });
    },
    /**
     * 获取用户信息
     * @param {*} callBack 回调函数
     */
    getInfo: function (callBack) {
        $.get('http://localhost:8000/admin/getuser', function (res) {
            callBack(res);
        })
    }
}
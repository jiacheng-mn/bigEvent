// Ajax请求地址优化
var base_url = 'http://localhost:8000';
var URL_list = {
    // 获取用户信息
    user_login: base_url + '/admin/login',
    user_logout: base_url + '/admin/logout',
    user_getInfo: base_url + '/admin/getuser',
    user_editInfo: base_url + '/admin/userinfo_edit',

    // 文章类别管理
    category_show: base_url + '/admin/category_search',
    category_add: base_url + '/admin/category_add',
    category_del: base_url + '/admin/category_delete',
    category_edit: base_url + '/admin/category_edit',

    // 文章列表管理
    article_show: base_url + '/admin/search',
    article_del: base_url + '/admin/article_delete'



}
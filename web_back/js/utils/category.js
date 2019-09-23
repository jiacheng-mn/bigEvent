/**
 *  文章类别管理
 */
var category = {
    /**
     * 数据显示
     * @param {*} callBack 
     */
    show: function (callBack) {
        $.get('http://localhost:8000/admin/category_search', function (res) {
            callBack(res);
        });
    },
    /**
     * 新增
     * @param {*} name 
     * @param {*} slug 
     * @param {*} callBack 
     */
    add: function (name, slug, callBack) {
        $.post('http://localhost:8000/admin/category_add', { name: name, slug: slug }, function (res) {
            callBack(res);
        });
    },
    /**
     * 删除
     * @param {*} id 
     * @param {*} callBack 
     */
    del: function (id, callBack) {
        $.post('http://localhost:8000/admin/category_delete', { id: id }, function () {
            callBack(res);
        })
    },
    edit: function () { }
}

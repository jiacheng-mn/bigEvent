/**
 *  文章类别管理
 */
var category = {
    /**
     * 数据显示
     * @param {*} callBack 
     */
    show: function (callBack) {
        $.get(URL_list.category_show, function (res) {
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
        $.post(URL_list.category_add, { name: name, slug: slug }, function (res) {
            callBack(res);
        });
    },
    /**
     * 删除
     * @param {*} id 
     * @param {*} callBack 
     */
    del: function (id, callBack) {
        $.post(URL_list.category_del, { id: id }, function () {
            callBack(res);
        })
    },
    edit: function (id, name, slug, callBack) {
        $.post(URL_list.category_edit, {
            id: id, name: name, slug: slug
        }, function () {
            callBack(res);
        })
    }
}

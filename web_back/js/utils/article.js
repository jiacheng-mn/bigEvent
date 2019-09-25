/**
 *  文章
 */
var article = {
  /**
   * 文章搜索显示
   * @param {*} paramObj {type:1,state:'草稿'}
   * @param {*} callBack 
   */
  show: function (paramObj, callBack) {
    $.get(URL_list.article_show, paramObj, function (res) {
      callBack(res);
    });
  },

  /**
   * 删除
   * @param {*} id 
   * @param {*} callBack 
   */
  del: function (id, callBack) {
    $.get(URL_list.article_del, { id: id }, function (res) {
      callBack(res);
    })
  },

  /**
  * 新增
  * @param {*} name 
  * @param {*} slug 
  * @param {*} callBack 
  */
  add: function (fd, callBack) {
    $.ajax({
      url: 'http://localhost:8000/admin/article_publish',
      type: 'post',
      data: fd,
      processData: false, // 不要去处理formData的数据
      contentType: false, // 不要额外设置表头，formData有自带的表头
      success: function (res) {
        // console.log(res);
        callBack(res);
      }
    })
  },


  // edit: function (id, name, slug, callBack) {
  //     $.post(URL_list.category_edit, {
  //         id: id, name: name, slug: slug
  //     }, function () {
  //         callBack(res);
  //     })
  // }
}

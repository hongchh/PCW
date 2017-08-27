<template lang="pug">
md-card#notification
  md-card-header
    md-card-header-text
      div.md-title 公告
    md-button.md-icon-button.md-warn(@click.native="$refs.confirmLog.open()")
      md-icon delete
    md-button.md-icon-button.md-primary(@click.native="$refs.creationBoard.open()")
      md-icon add
  md-card-content
    md-table
      md-table-header
        md-table-row
          md-table-head 标题
          md-table-head 创建时间
          md-table-head 创建人
          md-table-head 选择
      md-table-body
        md-table-row(v-for="(row, i) in rows", :key="i", @click.native="showDetailBoard(i)")
          md-table-cell {{ row.title }}
          md-table-cell {{ row.createTime }}
          md-table-cell {{ row.author }}
          md-table-cell
            md-checkbox(v-model="row.selected", :disabled="row.author !== 'yyyy'")
  //- 查看公告详情
  md-dialog(ref="detailBoard")
    md-dialog-title {{ rows[detailRow].title }}
    md-dialog-content Nemo, nobis necessitatibus ut illo, ducimus ex.
    md-dialog-actions
      md-button.md-primary(@click.native="$refs.detailBoard.close()") 确定
  //- 创建公告
  md-dialog(ref="creationBoard")
    md-dialog-title 发布新公告
    md-dialog-content Nemo, nobis necessitatibus ut illo, ducimus ex.
    md-dialog-actions
      md-button.md-primary(@click.native="$refs.creationBoard.close()") 取消
      md-button.md-primary(@click.native="createNotification") 确定
  //- 删除公告时候的确认框
  md-dialog-confirm(ref="confirmLog", md-title="提示", md-content-html="确认要删除所选的公告吗？",
    md-ok-text="确认", md-cancel-text="取消", @close="deleteNotifications")
</template>

<script>
export default {
  name: 'notification',
  data () {
    return {
      rows: [
        { title: 'xxxx', createTime: '2017-08-27', author: 'yyyy', selected: false },
        { title: 'xxxx', createTime: '2017-08-27', author: 'zzzz', selected: false },
        { title: 'xxxx', createTime: '2017-08-27', author: 'yyyy', selected: false },
        { title: 'xxxx', createTime: '2017-08-27', author: 'yyyy', selected: false },
        { title: 'xxxx', createTime: '2017-08-27', author: 'yyyy', selected: false }
      ],
      detailRow: 0
    }
  },
  methods: {
    /*
     * 显示某条公告
     * @param  { Number }  i  索引，表示第i条公告
     */
    showDetailBoard (i) {
      this.detailRow = i
      this.$refs.detailBoard.open()
    },
    /*
     * 发布新公告
     */
    createNotification () {
      // TODO
      this.$refs.creationBoard.close()
    },
    /*
     * 删除选中的公告
     * @param  { String }  state  确认框的选中状态
     */
    deleteNotifications (state) {
      console.log(state)
    }
  }
}
</script>

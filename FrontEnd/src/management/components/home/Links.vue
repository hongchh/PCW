<template lang="pug">
md-card#links
  md-card-header
    md-card-header-text
      div.md-title 友情链接
    md-button.md-icon-button.md-primary(@click.native="openEditBoard(0)")
      md-icon add
  md-card-content
    div.link-item(v-for="(link, i) in links")
      span {{ link.title }}
      md-button.md-icon-button.md-warn(@click.native="openConfirmDialog(i)")
        md-icon delete
      md-button.md-icon-button.md-primary(@click.native="openEditBoard(1, i)")
        md-icon edit
  //- 删除确认弹窗
  md-dialog-confirm(ref="confirmLog", md-title="提示", :md-content-html="confirmText",
    md-ok-text="确认", md-cancel-text="取消", @close="deleteLink")
  //- 编辑链接
  md-dialog.edit-board(ref="editBoard")
    md-dialog-title {{ dialogTitle }}
    md-dialog-content
      md-input-container
        label 链接描述
        md-input(v-model="editDescription", required, maxlength="10")
      md-input-container
        label 链接地址
        md-textarea(v-model="editLink", required)
    md-dialog-actions
      md-button.md-primary(@click.native="$refs.editBoard.close()") 取消
      md-button.md-primary(@click.native="submitEdition") 确定
</template>

<script>
import axios from 'axios'

export default {
  name: 'links',
  data () {
    return {
      links: [],
      editBoardType: 0,
      currentLinkIndex: 0,
      editLink: '',
      editDescription: '',
      dialogTitle: '',
      confirmText: ''
    }
  },
  created () {
    axios.get('/static/data/home.json').then(res => {
      if (res.status === 200) {
        this.links = res.data.links
      }
    })
  },
  methods: {
    /*
     * 打开删除确认框
     * @param  { Number }  index  要删除的链接索引
     */
    openConfirmDialog (index) {
      this.confirmText = '确认要删除“' + this.links[index].title + '”吗?'
      this.currentLinkIndex = index
      this.$refs.confirmLog.open()
    },
    /*
     * 删除链接
     */
    deleteLink () {
      // TODO
    },
    /*
     * 打开编辑板
     * @param  { Number }  type  0表示添加新链接，1表示编辑旧链接
     * @param  { Number }  index  编辑旧链接的时候需要传递链接索引
     */
    openEditBoard (type, index) {
      if (type === 0) {
        this.editLink = ''
        this.editDescription = ''
        this.dialogTitle = '新增友情链接'
      } else {
        this.editLink = this.links[index].url
        this.editDescription = this.links[index].title
        this.currentLinkIndex = index
        this.dialogTitle = '编辑链接'
      }
      this.editBoardType = type
      this.$refs.editBoard.open()
    },
    /*
     * 提交编辑板的内容
     */
    submitEdition () {
      if (this.editBoardType === 0) {
        // TODO: 创建链接
      } else {
        // TODO: 编辑链接
      }
      this.$refs.editBoard.close()
    }
  }
}
</script>

<style lang="sass">
#links
  .link-item
    display: flex
    align-item: center
    padding: 5px 10px
    border-bottom: 1px solid #e9e9e9
    &:first-child
      margin-top: 15px
    &:last-child
      border-bottom: none
    span
      flex-grow: 1
      font-size: 18px
      line-height: 40px
</style>


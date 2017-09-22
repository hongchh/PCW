<template lang="pug">
md-card#home-info
  md-card-header
    div.md-title 首页信息
  md-card-content
    div.info-item
      img(:src="course.photo")
      md-input-container
        label 课程简介
        md-textarea(maxlength="400", required, v-model="course.description")
      div.action
        md-button.md-raised.md-warn(@click.native="updateImg(0)") 更换图片
        md-button.md-raised.md-primary(@click.native="updateDescription(0)") 更新描述
    div.info-item
      img(:src="team.photo")
      md-input-container
        label 科研团队
        md-textarea(maxlength="400", required, v-model="team.description")
      div.action
        md-button.md-raised.md-warn(@click.native="updateImg(1)") 更换图片
        md-button.md-raised.md-primary(@click.native="updateDescription(1)") 更新描述
    div.info-item
      img(:src="achievement.photo")
      md-input-container
        label 教学成果
        md-textarea(maxlength="400", required, v-model="achievement.description")
      div.action
        md-button.md-raised.md-warn(@click.native="updateImg(2)") 更换图片
        md-button.md-raised.md-primary(@click.native="updateDescription(2)") 更新描述
  //- 提示语
  md-dialog-alert(ref="dialog", md-title="提示", :md-content="dialogContent")
</template>

<script>
import axios from 'axios'

export default {
  name: 'info',
  data () {
    return {
      course: {
        photo: '',
        description: ''
      },
      team: {
        photo: '',
        description: ''
      },
      achievement: {
        photo: '',
        description: ''
      },
      dialogContent: ' ' // 弹窗提示文本
    }
  },
  created () {
    axios.get('/static/data/home.json').then(res => {
      if (res.status === 200) {
        this.course.photo = res.data.course.photo
        this.team.photo = res.data.team.photo
        this.achievement.photo = res.data.achievement.photo
        // 加上换行再去掉，使textarea的高度显示正常
        this.course.description = res.data.course.description + '\n'
        this.team.description = res.data.team.description + '\n'
        this.achievement.description = res.data.achievement.description + '\n'
        setTimeout(() => {
          this.course.description = this.course.description.substr(0, this.course.description.length - 1)
          this.team.description = this.team.description.substr(0, this.team.description.length - 1)
          this.achievement.description = this.achievement.description.substr(0, this.achievement.description.length - 1)
        }, 100)
      }
    })
  },
  methods: {
    /*
     * 更新信息项的配图
     * @param  { Number }  which  标记对应的信息栏, 0: 课程简介  1: 团队简介  2: 成果简介
     */
    updateImg (which) {
      let imgPicker = document.createElement('input')
      imgPicker.type = 'file'
      imgPicker.onchange = (event) => {
        console.log(event.target.files[0].name)
        console.log(event.target.files[0].size)
        console.log(event.target.files[0].type)
        if (event.target.files[0].type.split('/')[0] !== 'image') {
          this.dialogContent = '请选择图片文件！'
          this.$refs.dialog.open()
        } else if (event.target.files[0].size > 200000) {
          this.dialogContent = '文件不能超过200KB！'
          this.$refs.dialog.open()
        } else {
          // TODO: 更新配图
        }
      }
      imgPicker.click()
    },
    /*
     * 更新信息项的描述
     * @param  { Number }  which  标记对应的信息栏, 0: 课程简介  1: 团队简介  2: 成果简介
     */
    updateDescription (which) {
      // TODO: 更新描述
    }
  }
}
</script>

<style lang="sass">
#home-info
  .info-item
    display: flex
    align-items: center
    margin: 10px 5px
    img
      width: 150px
      height: 150px
      margin: 10px
    .md-input-container
      flex-grow: 1
      textarea
        padding: 12px
    .action
      text-align: center
</style>

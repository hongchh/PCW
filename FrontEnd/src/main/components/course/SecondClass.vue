<template lang="pug">
div#second-class
  el-row(type="flex", justify="center")
    el-col(:span="8")
      div.img-item(v-for="item in columnImg[0]")
        img(:src="item.url")
        p.description {{ item.description }}
    el-col(:span="8")
      div.img-item(v-for="item in columnImg[1]")
        img(:src="item.url")
        p.description {{ item.description }}
    el-col(:span="8")
      div.img-item(v-for="item in columnImg[2]")
        img(:src="item.url")
        p.description {{ item.description }}
</template>

<script>
// import axios from 'axios'
import defaultImg from '../../../common/default.jpg'
import data from '../../../../static/data/second-class.json'

export default {
  name: 'second-class',
  data () {
    return {
      columnImg: [[], [], []],
      allImgs: null,
      ajaxCount: 3
    }
  },
  created () {
    // axios.get('./static/data/second-class.json').then(res => {
    //   if (res.status === 200) {
    //     this.allImgs = []
    //     this.columnImg = [[], [], []]
    //     for (let i = 0, j = 0; i < res.data.length; ++i) {
    //       this.columnImg[j].push({
    //         description: res.data[i].description,
    //         url: defaultImg
    //       })
    //       this.allImgs.push(res.data[i].url)
    //       j = Number.parseInt((j + 1) % 3)
    //     }
    //     this.loadImgs(0)
    //   }
    // })
    this.allImgs = []
    this.columnImg = [[], [], []]
    for (let i = 0, j = 0; i < data.length; ++i) {
      this.columnImg[j].push({
        description: data[i].description,
        url: defaultImg
      })
      this.allImgs.push(data[i].url)
      j = Number.parseInt((j + 1) % 3)
    }
    this.loadImgs(0)
  },
  methods: {
    /*
     * 图片懒加载
     * @param  { Number }  index  当前到达第几张图片
     */
    loadImgs (index) {
      // let promises = []
      for (let i = 0; index < this.allImgs.length && i < 3; ++i, ++index) {
        let col = Number.parseInt(index % 3)
        let row = Number.parseInt(index / 3)
        let tmp = index
        // promises.push(new Promise((resolve, reject) => {
        //   let img = new Image()
        //   img.src = this.allImgs[tmp]
        //   img.onload = () => {
        //     this.columnImg[col][row].url = img.src
        //     resolve()
        //   }
        //   // 加载失败则使用默认图片，不reject以免影响其他图片的正常加载
        //   img.onerror = () => {
        //     resolve()
        //   }
        // }))
        // 兼容IE，暂不使用promise写法
        let img = new Image()
        img.src = this.allImgs[tmp]
        img.onload = () => {
          this.columnImg[col][row].url = img.src
          this.ajaxCount -= 1
          if (this.ajaxCount === 0 && index < this.allImgs.length) {
            this.ajaxCount = 3
            this.loadImgs(index)
          }
        }
        // 加载失败则使用默认图片，不reject以免影响其他图片的正常加载
        img.onerror = () => {
          this.ajaxCount -= 1
          if (this.ajaxCount === 0 && index < this.allImgs.length) {
            this.ajaxCount = 3
            this.loadImgs(index)
          }
        }
      }
      // Promise.all(promises).then(() => {
      //   if (index < this.allImgs.length) {
      //     this.loadImgs(index)
      //   }
      // })
    }
  }
}
</script>

<style lang="sass">
#second-class
  .el-col
    position: relative
    padding: 0 4px
    .img-item
      width: 100%
      position: relative
      margin: 8px 0
      img
        width: 100%
        height: auto
      .description
        position: absolute
        bottom: 0
        left: 0
        right: 0
        margin: 0
        background: rgba(0, 0, 0, 0.45)
        color: white
        padding: 10px
        font-size: 24px
</style>

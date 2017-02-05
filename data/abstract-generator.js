let fs = require('fs')
let base = '病理生理学是一门连接基础医学与临床医学的桥梁学科'
let data = {}
let generate = () => {
  let str = '    '
  for (let i = 0; i < 240; ++i) {
    str += base[Number.parseInt(Math.random() * base.length)]
    if (i === 120) str += '。\n\n    '
  }
  return str + '。'
}
data.course = generate()
data.team = generate()
data.achievement = generate()

fs.writeFileSync(__dirname + '/abstract.json', JSON.stringify(data))
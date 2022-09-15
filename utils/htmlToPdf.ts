import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

const htmlToPdf = ({ id, title }: { id: string; title: string }) => {
  const element = document.getElementById(`${id}`) as HTMLElement
  const opts = {
    scale: 5, // 缩放比例，提高生成图片清晰度
    useCORS: true, // 允许加载跨域的图片
    allowTaint: false, // 允许图片跨域，和 useCORS 二者不可共同使用
    tainttest: true, // 检测每张图片已经加载完成
    logging: true, // 日志开关，发布的时候记得改成 false
  }

  html2Canvas(element, opts)
    .then((canvas) => {
      let contentWidth = canvas.width
      let contentHeight = canvas.height
      // 一页pdf显示html页面生成的canvas高度;
      let pageHeight = (contentWidth / 592.28) * 841.89
      // 未生成pdf的html页面高度
      let leftHeight = contentHeight
      // 页面偏移
      let position = 0
      // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      let imgWidth = 595.28
      let imgHeight = (592.28 / contentWidth) * contentHeight
      let pageData = canvas.toDataURL('image/jpeg', 1.0)

      // a4纸纵向，一般默认使用；new JsPDF('landscape'); 横向页面
      let PDF = new JsPDF('p', 'pt', 'a4')

      // 当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        // addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
      } else {
        // 超过一页时，分页打印（每页高度841.89）
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          if (leftHeight > 0) {
            PDF.addPage()
          }
        }
      }
      PDF.save(title + '.pdf')
    })
    .catch((error) => {
      console.log('打印失败', error)
    })
}

const drawMain = (drawing_elem: HTMLCanvasElement, percent: number, forecolor: string, bgcolor: string) => {
  /*
        @drawing_elem: 绘制对象
        @percent：绘制圆环百分比, 范围[0, 100]
        @forecolor: 绘制圆环的前景色，颜色代码
        @bgcolor: 绘制圆环的背景色，颜色代码
    */
  var context = drawing_elem.getContext('2d') as CanvasRenderingContext2D
  var center_x = drawing_elem.width / 2
  var center_y = drawing_elem.height / 2
  var rad = (Math.PI * 2) / 100
  var speed = percent

  // 绘制背景圆圈
  function backgroundCircle() {
    context.save()
    context.beginPath()
    context.lineWidth = 8 //设置线宽
    var radius = center_x - context.lineWidth
    context.lineCap = 'round'
    context.fillStyle = bgcolor
    context.arc(center_x, center_y, radius, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()
  }

  //绘制运动圆环
  function foregroundCircle(n: number) {
    context.save()
    context.strokeStyle = forecolor
    context.lineWidth = 8
    context.lineCap = 'round'
    var radius = center_x - context.lineWidth
    context.beginPath()
    context.arc(center_x, center_y, radius, -Math.PI / 2, -Math.PI / 2 + -n * rad, true) //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
    context.stroke()
    context.closePath()
    context.restore()
  }

  //执行动画
  ;(function drawFrame() {
    backgroundCircle()
    foregroundCircle(speed)
  })()
}

export { drawMain }
export default htmlToPdf

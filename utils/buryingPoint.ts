//click_touch_concat_form 弹出表单的click事件
export const buryingPoint = (event: any) => {
  if (window.dataLayer) {
    typeof event == 'string'
      ? window.dataLayer.push({
          event,
        })
      : window.dataLayer.push({
          ...event,
        })
  }
}

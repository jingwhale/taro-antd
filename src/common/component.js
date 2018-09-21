import Taro, { Component } from '@tarojs/taro'

const objectToString = style => {
  if (typeof style === 'object') {
    let styleStr = ''
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      styleStr += `${lowerCaseKey}:${style[key]};`
    })
    return styleStr
  }
  return style
}

export default class TdComponent extends Component {
  static options = {
    addGlobalClass: true
  }

  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */
  mergeStyle (style1, style2) {
    return objectToString(style1) + objectToString(style2)
  }

  getClassName (arg) {
    const { className } = this.props

    if (!className) {
      return arg
    }

    let componentClass = arg
    let propsClass = className

    if (!Array.isArray(propsClass)) {
      propsClass = [propsClass]
    }

    if (!Array.isArray(componentClass)) {
      componentClass = [componentClass]
    }

    return componentClass.concat(propsClass)
  }
}
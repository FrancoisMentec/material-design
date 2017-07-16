(function () {
  if (!window) throw Error('This library is for client side only')

  // Material colors from: https://material.io/guidelines/style/color.html
  const COLORS = {
    'red': {
      50:  '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#F44336',
      600: '#E53935',
      700: '#D32F2F',
      800: '#C62828',
      900: '#B71C1C'
    },
    'pink': {
      50:  '#FCE4EC',
      100: '#F8BBD0',
      200: '#F48FB1',
      300: '#F06292',
      400: '#EC407A',
      500: '#E91E63',
      600: '#D81B60',
      700: '#C2185B',
      800: '#AD1457',
      900: '#880E4F'
    },
    'purple': {
      50:  '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0',
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C'
    },
    'deep purple': {
      50:  '#EDE7F6',
      100: '#D1C4E9',
      200: '#B39DDB',
      300: '#9575CD',
      400: '#7E57C2',
      500: '#673AB7',
      600: '#5E35B1',
      700: '#512DA8',
      800: '#4527A0',
      900: '#311B92'
    },
    'indigo': {
      50:  '#E8EAF6',
      100: '#C5CAE9',
      200: '#9FA8DA',
      300: '#7986CB',
      400: '#5C6BC0',
      500: '#3F51B5',
      600: '#3949AB',
      700: '#303F9F',
      800: '#283593',
      900: '#1A237E'
    },
    'blue': {
      50:  '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1'
    },
    'light blue': {
      50:  '#E1F5FE',
      100: '#B3E5FC',
      200: '#81D4FA',
      300: '#4FC3F7',
      400: '#29B6F6',
      500: '#03A9F4',
      600: '#039BE5',
      700: '#0288D1',
      800: '#0277BD',
      900: '#01579B'
    },
    'cyan': {
      50:  '#E0F7FA',
      100: '#B2EBF2',
      200: '#80DEEA',
      300: '#4DD0E1',
      400: '#26C6DA',
      500: '#00BCD4',
      600: '#00ACC1',
      700: '#0097A7',
      800: '#00838F',
      900: '#006064'
    },
    'teal': {
      50:  '#E0F2F1',
      100: '#B2DFDB',
      200: '#80CBC4',
      300: '#4DB6AC',
      400: '#26A69A',
      500: '#009688',
      600: '#00897B',
      700: '#00796B',
      800: '#00695C',
      900: '#004D40'
    },
    'green': {
      50:  '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20'
    },
    'light green': {
      50:  '#F1F8E9',
      100: '#DCEDC8',
      200: '#C5E1A5',
      300: '#AED581',
      400: '#9CCC65',
      500: '#8BC34A',
      600: '#7CB342',
      700: '#689F38',
      800: '#558B2F',
      900: '#33691E'
    },
    'lime': {
      50:  '#F9FBE7',
      100: '#F0F4C3',
      200: '#E6EE9C',
      300: '#DCE775',
      400: '#D4E157',
      500: '#CDDC39',
      600: '#C0CA33',
      700: '#AFB42B',
      800: '#9E9D24',
      900: '#827717'
    },
    'yellow': {
      50:  '#FFFDE7',
      100: '#FFF9C4',
      200: '#FFF59D',
      300: '#FFF176',
      400: '#FFEE58',
      500: '#FFEB3B',
      600: '#FDD835',
      700: '#FBC02D',
      800: '#F9A825',
      900: '#F57F17'
    },
    'amber': {
      50:  '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#FFC107',
      600: '#FFB300',
      700: '#FFA000',
      800: '#FF8F00',
      900: '#FF6F00'
    },
    'orange': {
      50:  '#FFF3E0',
      100: '#FFE0B2',
      200: '#FFCC80',
      300: '#FFB74D',
      400: '#FFA726',
      500: '#FF9800',
      600: '#FB8C00',
      700: '#F57C00',
      800: '#EF6C00',
      900: '#E65100'
    },
    'deep orange': {
      50:  '#FBE9E7',
      100: '#FFCCBC',
      200: '#FFAB91',
      300: '#FF8A65',
      400: '#FF7043',
      500: '#FF5722',
      600: '#F4511E',
      700: '#E64A19',
      800: '#D84315',
      900: '#BF360C'
    },
    'brown': {
      50:  '#EFEBE9',
      100: '#D7CCC8',
      200: '#BCAAA4',
      300: '#A1887F',
      400: '#8D6E63',
      500: '#795548',
      600: '#6D4C41',
      700: '#5D4037',
      800: '#4E342E',
      900: '#3E2723'
    },
    'grey': {
      50:  '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    'blue grey': {
      50:  '#ECEFF1',
      100: '#CFD8DC',
      200: '#B0BEC5',
      300: '#90A4AE',
      400: '#78909C',
      500: '#607D8B',
      600: '#546E7A',
      700: '#455A64',
      800: '#37474F',
      900: '#263238'
    }
  }

  // Material design
  class MaterialDesign {
    constructor (primaryColor = 'blue', secondaryColor = 'orange', errorColor = 'red') {
      this.styleSheet = null
      for (var i = 0, li = document.styleSheets.length; i < li; i++) {
        if (document.styleSheets[i].href.endsWith('material-design.css')) {
          this.styleSheet = document.styleSheets[i]
          break
        }
      }

      if (!this.styleSheet) throw new Error('Can\'t find material-design.css, be sure to load this file after material-design.css and don\'t use file protocol')
      this.rules = this.styleSheet.cssRules || this.styleSheet.rules

      this.primaryColor = primaryColor
      this.secondaryColor = secondaryColor
      this.errorColor = errorColor
    }

    get primaryColor () {
      return this._primaryColor
    }

    set primaryColor (value) {
      this.setColor('primary-color', value)
      this._primaryColor = value
    }

    get secondaryColor () {
      return this._secondaryColor
    }

    set secondaryColor (value) {
      this.setColor('secondary-color', value)
      this._secondaryColor = value
    }

    get errorColor () {
      return this._errorColor
    }

    set errorColor (value) {
      this.setColor('error-color', value)
      this._errorColor = value
    }

    setColor (name, value) {
      if (!COLORS[value]) throw new Error('Color ' + value + ' not supported, check supported color on: https://material.io/guidelines/style/color.html')

      for (var i in COLORS[value]) {
        this.rules[0].style.setProperty('--' + name + '-' + i, COLORS[value][i])
      }
    }
  }

  /**********************************************************************************************************************************************************
   * Elements
   */
  class MaterialDesignElement extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({mode: 'open'})
      this._style = document.createElement('style')
      this.shadow.appendChild(this._style)
      this.wrap = document.createElement('div')
      this.shadow.appendChild(this.wrap)
    }

    static get observedAttributes () {
      return ['class', 'parentElement']
    }

    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'class') {
        if (oldValue) {
          oldValue = oldValue.split(' ')
          for (var i = 0; i < oldValue.length; i++) {
            this.wrap.classList.remove(oldValue[i])
          }
        }
        if (newValue) {
          newValue = newValue.split(' ')
          for (var i = 0; i < newValue.length; i++) {
            this.wrap.classList.add(newValue[i])
          }
        }
      }
    }
  }
  /**********************************************************************************************************************************************************
   * Text field
   */
  class TextField extends MaterialDesignElement {
    constructor () {
      super()
      var self = this

      this._style.innerHTML = `
        input {
          width: 100%;
          padding: 24px 0 8px 0;
          border: none;
          border-bottom: 2px solid #BDBDBD; /* gray 400 */
          background-color: transparent;
          font-size: 16px;
          outline: none;
        }

        .dark input {
          border-color: #E0E0E0; /* gray 300 */
          color: white;
        }

        .label {
          transition: 0.2s;
          position: absolute;
          left: 0;
          top: 24px;
          color: #9E9E9E; /* gray 500 */
          font-size: 16px;
          pointer-events: none;
        }

        .dark .label {
          color: #E0E0E0; /* gray 300 */
        }

        .focus .label, .notEmpty .label {
          top: 8px;
          font-size: 12px;
        }

        .focus .label {
          color: var(--primary-color-500) !important; /* override dark */
        }

        .secondary.focus .label {
          color: var(--secondary-color-500);
        }

        .error.focus .label {
          color: var(--error-color-500);
        }

        .border {
          transition: 0.2s;
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: var(--primary-color-500);
        }

        .secondary .border {
          background-color: var(--secondary-color-500);
        }

        .error .border {
          background-color: var(--error-color-500);
        }

        .focus .border {
          width: 100%;
        }

        .message {
          padding-top: 8px;
          color: #9E9E9E; /* gray 500 */
          font-size: 12px;
        }

        .dark .label {
          color: #E0E0E0; /* gray 300 */
        }

        .error .message {
          color: var(--error-color-500);
        }
      `

      this._label = document.createElement('span')
      this._label.className = 'label'
      this.wrap.appendChild(this._label)

      this.input = document.createElement('input')
      this.input.type = 'text'
      this.input.addEventListener('focus', function () {
        self.wrap.classList.add('focus')
      })
      this.input.addEventListener('focusout', function () {
        self.wrap.classList.remove('focus')
      })
      this.input.addEventListener('keyup', function (e) {
        if (self.value.length > 0) self.wrap.classList.add('notEmpty')
        else self.wrap.classList.remove('notEmpty')
        if (e.keyCode == 13) {
          self.input.dispatchEvent(new Event('enter'))
        }
      })
      this.wrap.appendChild(this.input)

      this.border = document.createElement('div')
      this.border.className = 'border'
      this.wrap.appendChild(this.border)

      this._message = document.createElement('div')
      this._message.className = 'message'
      this.wrap.appendChild(this._message)
    }

    static get observedAttributes () {
      return super.observedAttributes.concat(['label', 'type', 'message'])
    }

    attributeChangedCallback (name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue)
      if (name === 'label') {
        this._label.innerHTML = newValue
      } else if (name === 'type') {
        this.input.type = newValue
      } else if (name === 'message') {
        this._message.innerHTML = newValue
      }
    }

    get label () {
      return this.getAttribute('label')
    }

    set label (value) {
      this.setAttribute('label', value)
    }

    get value () {
      return this.input.value
    }

    set value (value) {
      this.input.value = value
    }

    get message () {
      return this.getAttribute('message')
    }

    set message (value) {
      this.setAttribute('message', value)
    }

    addEventListener (name, listener) {
      this.input.addEventListener(name, listener)
    }
  }

  customElements.define('text-field', TextField)

  window.materialDesign = new MaterialDesign()
})()

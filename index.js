const backgroundColor = '#F2EEDE'
const foregroundColor = '#000000'
const cursorColor = '#000000'
const cursorAccentColor = '#F2EEDE'
const borderColor = 'rgba(213, 216, 199, 30%)'

const colors = [
  '#000000', // black
  '#CC3E28', // red
  '#216609', // green
  '#B58900', // yellow
  '#1E6FCC', // blue
  '#5C21A5', // violet
  '#158C86', // cyan
  '#AAAAAA', // light gray
  '#555555', // medium gray
  '#CC3E28', // red
  '#216609', // green
  '#B58900', // yellow
  '#1E6FCC', // blue
  '#5C21A5', // violet
  '#158C86', // cyan
  '#AAAAAA', // white
  foregroundColor
]



exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
      }
      .hyperterm_main {
      	border: transparent !important;
      }
      .cursor-node {
        width: .325rem !important;
      }
      .tabs_list {
        border-color: transparent !important;
      }
      .tab_tab {
        border: transparent !important;
        color: ${foregroundColor} !important;
        background-color: #D5D8C7;
      }
      .tabs_title {
        color: ${foregroundColor} !important;
      }
      .tab_tab.tab_active:before {
        border-bottom: transparent !important;
      }
      .tab_tab.tab_active {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
        border-bottom: none !important;
      }
      .tabs_nav {
      	background-color: ${backgroundColor} !important;
      }
      .tabs_borderShim {
      	border: transparent;
      }
      .splitpane_divider {
      	background-color: #D5D8C7 !important;
      }
      .header_shape
      {
        color: #000000;
      }
      .header_appTitle
      {
        color: #000000;
      }
    `
  })
}


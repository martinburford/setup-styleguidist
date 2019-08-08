const path = require('path');

module.exports = {
  exampleMode: 'expand',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    const dir = path.dirname(componentPath)
    return `import ${name} from '${dir}';`
  },
  sections: [
    {
      name: 'SCA UI',
      content: './src/styleguide/StyleguideRenderer/readme.md',
    },
    {
      name: 'Components',
      components: './src/components/**/[A-Z]*.{js,jsx}',
    },
  ],
  serverPort: 8081,
  showSidebar: true,
  skipComponentsWithoutExample: true,
  sortProps: props => props,
  styleguideComponents: {
    // Markdown: path.join(__dirname, 'src/styleguide/MarkdownRenderer'),
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuideRenderer'),
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  styleguideDir: 'build/',
  styles: {
    ComponentsList: {
      item: {
        marginBottom: 0,
        marginTop: 0
      },
      list: {
        paddingLeft: 0
      }
    },
    Heading: {
      heading: {
        // fontWeight: 'bold'
      }
    },
    Playground: {
      controls: {
        margin: '16px 0'
      },
      preview: {
        backgroundColor: '#ffffff',
        border: '1px solid #dedede',
        borderRadius: 0
      },
      tab: {
        border: '1px solid #dedede'
      }
    },
    ReactComponent: {
      root: {
        borderBottom: '2px solid #cccccc',
        marginBottom: '24px'
      }
    },
    SectionHeading: {
      toolbar: {
        display: 'none'
      }
    },
    Table: {
      table: {
        background: '#ffffff',
        border: '1px solid #dedede',
        marginBottom: 0
      },
      cellHeading: {
        background: '#f6f6f6',
        padding: '8px 16px'
      },
      cell: {
        borderTop: '1px solid #dedede',
        padding: '8px 16px',
      }
    },
    TableOfContents: {
      input: {
        background: '#ffffff',
        border: '1px solid #dedede',
        boxSizing: 'border-box',
        display: 'block',
        margin: '0 10px',
        padding: '5px 10px',
        width: '100%'
      },
      search: {
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        height: '50px',
        padding: 0
      }
    },
    ToolbarButton: {
      button: {
        display: 'none'
      }
    }
  },
  // template: {
  //   head: {
  //     scripts: [
  //       {
  //         src: 'assets/js/babelHelpers.min.js'
  //       }
  //     ],
  //     links: [
  //       {
  //         'data-brand': 'lloyds',
  //         rel: 'stylesheet',
  //         href:
  //           'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
  //       }
  //     ]
  //   }
  // },
  theme: {
    font: ['Tahoma', 'sans-serif'],
  },
  usageMode: 'expand',
  version: '0.0.1',
  webpackConfig: require('./webpack.config.js')
};
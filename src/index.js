import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Find all widget divs
// const WidgetDivs = document.querySelectorAll('.widget')

// // Inject our React App into each
// WidgetDivs.forEach(Div => {
//   ReactDOM.render(
//       <App domElement={Div}/>,
//     Div
//   );
// })
let NSconfig = null;

export default {
  config: (config) => {
    NSconfig = config;
  },
  widgets: {
    myWidget: {
      new: (config) => {
        return{
          render(arg) {            
            ReactDOM.render(
              <App src={config.url || arg.url || NSconfig.url} />,
              document.querySelector(config.selector)
            );
          },
          unmount(){
            ReactDOM.unmountComponentAtNode(document.querySelector(config.selector));
            // alt.recycle(MyStore);            
          }
        }
      }
    }
  }
}  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

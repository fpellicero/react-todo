import TodoAppContainer from './Containers/TodoAppContainer';
import reducer from './reducers/reducers';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger();
var store = createStore(reducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>
  ,
  document.getElementById("app")
);

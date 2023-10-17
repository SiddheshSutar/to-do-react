import "./styles.css";
import Form from "./Form/Form";
import List from "./List/List";
import { Provider } from 'react-redux'
import { store } from "./store";
import { Toaster } from 'react-hot-toast';
import Notifications from "./Notifications/Notifications";

export default function App() {

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <Provider store={store}>
        <div className='content'>
          <Form />
          <List />
        </div>
        <Notifications />
      </Provider>
    </div>
  );
}

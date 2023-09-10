import List from './List';
import './App.css';

function App() {
  const items= 
    [
      "Aaren"
      ,
      "Aarika"
      ,
      "Abagael"
      ,
      "Abagail"
      ,
      "Abbe"
      ,
      "Abbey"
      ,
      "Abbi"
      ,
      "Abbie"
      ,
    ]
  return (
    <>
      <List l="numbered" items={items} />
      <List l="alpha" items={items} />
      <List l="bullet" items={items} />
    </>
  );
}

export default App;

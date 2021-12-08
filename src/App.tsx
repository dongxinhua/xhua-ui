import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <hr />
        <h2>Button</h2>
        <Button disabled> Hello </Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large} onClick={() => {console.log(123)}}> Hello </Button>
        <Button btnType={ButtonType.Primary}> Hello </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Hello </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com"> Hello </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com"> Hello </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled> Hello </Button>
        <hr />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

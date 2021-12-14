import React from 'react'
import Alert, { AlertType } from './components/Alert/alert';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

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
        <h2>Alert</h2>
        <Alert title="success!" type={AlertType.Success} />
        <Alert title="oh！Danger~" type={AlertType.Danger} description='这是危险的操作'/>
        <Alert title="this is title" closable onClose={() => {console.log('回调：关闭了')}} />
        <Alert title="this is title" type={AlertType.Warning} closable={false}/>
        <hr />
        <h2>Menu</h2>
        <Menu defaultIndex={2} onSelect={(index) => {console.log(index)}}>
          <MenuItem index={0}>
            menu1
          </MenuItem>
          <MenuItem index={1} disabled>
            menu2
          </MenuItem>
          <MenuItem index={2}>
            menu3
          </MenuItem>
        </Menu>
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

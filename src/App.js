import './App.css'
import ClassComponentExample from './components/ClassComponentExample'
import { useState } from 'react'
import UseEffectExample from './components/UseEffectExample'
import UnMountExample from './components/UnMountExample'
import LayoutExample from './components/LayoutExample'

function App() {
  const [component, setComponent] = useState()
  return (
    <div className='App'>
      <div>
        <button
          onClick={() => setComponent()}
          style={{ backgroundColor: 'red' }}
        >
          Remove
        </button>
        <button
          onClick={() => setComponent('classComponentExample')}
          style={{
            backgroundColor:
              component === 'classComponentExample' ? 'cyan' : '#4CAF50'
          }}
        >
          Class Component Example
        </button>
        <button
          onClick={() => setComponent('useEffectExample')}
          style={{
            backgroundColor:
              component === 'useEffectExample' ? 'cyan' : '#4CAF50'
          }}
        >
          use Effect Example
        </button>
        <button
          onClick={() => setComponent('unmountExample')}
          style={{
            backgroundColor:
              component === 'unmountExample' ? 'cyan' : '#4CAF50'
          }}
        >
          Unmount Example
        </button>
        <button
          onClick={() => setComponent('LayoutExample')}
          style={{
            backgroundColor:
              component === 'LayoutExample' ? 'cyan' : '#4CAF50'
          }}
        >
          Layout Example
        </button>
      </div>
      <hr />
      {component === 'classComponentExample' && <ClassComponentExample />}
      {component === 'useEffectExample' && <UseEffectExample />}
      {component === 'unmountExample' && <UnMountExample />}
      {component === 'LayoutExample' && <LayoutExample />}
    </div>
  )
}

export default App

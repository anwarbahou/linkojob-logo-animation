import './App.css'
import Loading from './components/Loading'
import Example2 from './components/Example2'
import Example3 from './components/Example3'
import Example4 from './components/Example4'
import Example5 from './components/Example5'
import Example6 from './components/Example6'

function App() {
  return (
    <div className="logo-grid">
      <div className="logo-item">
        <div className="animation-wrapper">
          <Loading />
        </div>
      </div>

      <div className="logo-item">
        <div className="animation-wrapper">
          <Example2 />
        </div>
      </div>

      <div className="logo-item">
        <div className="animation-wrapper">
          <Example3 />
        </div>
      </div>

      <div className="logo-item">
        <div className="animation-wrapper">
          <Example4 />
        </div>
      </div>

      <div className="logo-item">
        <div className="animation-wrapper">
          <Example5 />
        </div>
      </div>

      <div className="logo-item">
        <div className="animation-wrapper">
          <Example6 />
        </div>
      </div>
    </div>
  )
}

export default App

import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MemoAndCallback from './components/MemoAndCallback';
function App() {

  return (
    <>
      <div>
        <Navbar />
        <div className='main-section container'>
          <h4 className='mt-4 mb-4'>React performance optimization</h4>
          <ul className='list-group'>
            <li className='list-group-item bg-light'>
              <h5>React.memo and useCallback</h5>
              <MemoAndCallback/>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

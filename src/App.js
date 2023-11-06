import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Error Boundary</h1>
        {/* <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary> */}

      <ParentComponent/>
    </div>
  );
}

export default App;

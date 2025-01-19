import Student from './Student.jsx'
function App() {
  
    return (
      <>
          <Student name="Patrick" age={30} isStudent={true }/>
          <Student name="Shright" age={64} isStudent={false }/>
          <Student name="Tommy" age={21} isStudent={true }/>
          <Student/>
       </>
    );
}

export default App

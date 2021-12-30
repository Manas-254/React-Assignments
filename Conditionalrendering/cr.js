function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return<div>
          <h1>UserGreeting</h1>
      </div>
    }
    return <div>
        <h1>Guest Greeting</h1>
    </div>
  }
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('container')
  );
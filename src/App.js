import React, { Component } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha'
import './App.css';
class App extends Component {
  onVerifyCaptcha (token) {
    console.log("Verified: " + token)
    }
render() {
return (
<div className="App">
<h1>Sign Up Today!</h1>
<form>
<input type="text" placeholder="Enter your email!"/>
<HCaptcha sitekey="a8846830-b387-494a-87a4-994c8991cfe6" onVerify={this.onVerifyCaptcha}/>
<button type="submit">Sign Up!</button>
</form>
</div>
);
}
}
export default App;
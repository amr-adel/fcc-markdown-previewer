import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="sidebar">
          <img src={logo} alt="markdown previewer logo" className='logo' />
          <h1 className="brand">
            Markdown previewer
          </h1>
        </header>
        <div className="container">
          <textarea name="editor" id="editor"></textarea>
          <h2 className='label'>editor</h2>
        </div>
        <article className="container">
          <h2 className='label'>previewer</h2>
          <div className="preview" id='preview'>
            <h1>Neighborhood Map (React)</h1>

            <h2>Project Specification Criteria</h2>

            <a href="https://codepen.io/freeCodeCamp/full/GrZVVO">https://codepen.io/freeCodeCamp/full/GrZVVO</a>

            You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other <b>frontend frameworks</b> like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

            <img src={logo} alt="markdown previewer logo" className='logo' />

            <blockquote>You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery</blockquote>

            <ul>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum, dolor sit amet <code>Google Maps API</code> consectetur adipisicing elit. Maiores quia quisquam illo!</li>
            </ul>

            <pre>{`
  -- if class slot unavailable, check super class
    -- if applied to argument, pass it to the class method new        
    setmetatable(class, {
      __index = function(self,key) return self.super[key] end,
      __call  = function(self,...) return self.new(self,unpack(arg)) end 
    })
  
    -- if instance method unavailable, check method slot in super class    
    setmetatable(class.methods, {
      __index = function(self,key) return class.super.methods[key] end
    })
    return class`}</pre>

          </div>
        </article>
      </div>
    );
  }
}

export default App;

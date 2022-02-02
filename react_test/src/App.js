import './App.css';
import React, { useState } from "react";
import {useSpring, animated} from "react-spring";

const App = () => {
  const [flip, setFlip] = useState(false);
  const ani = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: ()=> setFlip(!flip),
  });


  
  return (
    <div className="App">
      <animated.h1 style={ani}>Hello react</animated.h1>
    </div>
  );
}

export default App;

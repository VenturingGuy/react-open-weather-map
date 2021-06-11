import React, { useState } from 'react';
import classes from './Mood.module.css';

const Mood = () => {
    
    let [mood, setMood] = useState('');
    function handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    return (
        
        <div className={classes.Wrapper}>
        <form>
          <label>
            Mood:
            <input 
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)} />
        </label>
        </form>
        <p>You're feeling {mood} about this weather.</p>
        </div>

   )
  }

export default Mood;
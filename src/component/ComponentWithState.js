import { Component } from 'react'
import styles from './styles.css'
import SectionsButton from './Button'
import Statistic from './Statistic'

class ComponentWithState extends Component {
    static defaultProp = {
        total: 0,
}

  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

    increase = (event) =>{
        this.setState((prevState) => {
            const good = prevState.good + 1;
            
            return {
                good,
               
            };   
        });
    };

    increaseNautral = (event) =>{
        this.setState((prevState) => { 
            const neutral = prevState.neutral + 1;
            return {    
                neutral,
            };   
        });
    };

increaseBad = (event) =>{
        this.setState((prevState) => { 
            const bad = prevState.bad + 1;
            return {    
                bad,
            };   
        });
    };

    countTotalFeedback = () => {
        const total = 0;
        const countTotal = 1  + 2;
        return (countTotal);
             
        
}

    
  render() {
    return (
        <>
            <SectionsButton
                good={this.increase}
                neutral={this.increaseNautral}
                bad={this.increaseBad}/>
            

            <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad} /> 
            <li>
                <span> Total: {0}{this.countTotal}</span>
            </li>

      </>
    )
  }
}
export default ComponentWithState;
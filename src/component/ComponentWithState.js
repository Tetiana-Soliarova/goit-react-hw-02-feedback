import { Component } from 'react'
//import styles from './styles.css'
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
    console.log('bad', this.increaseBad.value)
    };

    countTotalFeedback = () => {
       return  Object.values(this.state).reduce((acc, value) => 
             acc + value,0
        )
         
      
}

    
    render() {
        let total = this.countTotalFeedback();
    return (
        <>
            <SectionsButton
                good={this.increase}
                neutral={this.increaseNautral}
                bad={this.increaseBad}/>
            

            <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}/> 
            

      </>
    )
  }
}
export default ComponentWithState;
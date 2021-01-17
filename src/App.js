import React from 'react'
import TitleFeetback from './component/TitleFeedback'
//import SectionsButton from './component/Button';
//import data from './data/statistic.json'
//import Statistic from './component/Statistic'
import ComponentWithState from './component/ComponentWithState'

export default App
function App() {
  return (
    <div>
      <TitleFeetback title="Please leave feedback" />
      <ComponentWithState />
    </div>
  )
}

//export default App;<SectionsButton neutral={data.neutral} />
/*   <Statistic
        good ={data.good}
        neutral={data.neutral} 
        bad={data.bad} />*/

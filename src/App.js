import React from 'react'
import Section from './component/Section'
import ComponentWithState from './component/ComponentWithState'


export default App
function App() {
  return (
    <div>
      <Section title="Please leave feedback">
        <ComponentWithState />
      </Section>
    </div>
  )
}



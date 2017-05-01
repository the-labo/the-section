'use strict'

import React from 'react'
import { TheSection, TheAccordionSection, TheSectionStyle } from 'the-section'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheSectionStyle/>

        <h3>Normal section</h3>
        <TheSection>
          <TheSection.Header>This is header</TheSection.Header>
          <TheSection.Body>This is content</TheSection.Body>
        </TheSection>

        <br/>

        <h3>Lined header section</h3>
        <TheSection>
          <TheSection.Header lined>This is lined header</TheSection.Header>
          <TheSection.Body>This is content</TheSection.Body>
        </TheSection>

        <br/>

        <TheAccordionSection heading='Try me!'>
          <p>
            This is the accordion body
          </p>
        </TheAccordionSection>
        <br/>
        <br/>
        <br/>
      </div>

    )
  }
}

export default ExampleComponent

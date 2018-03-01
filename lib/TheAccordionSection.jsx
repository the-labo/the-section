'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheSection from './TheSection'
import { TheIcon } from 'the-icon'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Accordion section
 */
class TheAccordionSection extends React.Component {
  constructor (props) {
    super(props)
    this.inner = null
    this.state = {
      open: props.open
    }
  }

  render () {
    const {props, state} = this
    let {
      className,
      children,
      heading
    } = props
    let {open} = state
    const {Header, Body} = TheAccordionSection
    return (
      <TheSection {...htmlAttributesFor(props, {except: ['className']})}
                  {...eventHandlersFor(props, {except: []})}
                  className={classnames('the-accordion-section', className, {
                    'the-accordion-section-open': open,
                    'the-accordion-section-closed': !open
                  })}
                  style={{maxHeight: this.getInnerHeight()}}
      >
        <div className='the-accordion-section-inner'
             ref={(inner) => { this.inner = inner }}
        >
          <Header onClick={(e) => this.toggleOpen()}
                  open={open}
          >
            {heading}
          </Header>
          <Body>
          {children}
          </Body>
        </div>
      </TheSection>
    )
  }

  getInnerHeight () {
    let {inner} = this
    return inner && inner.offsetHeight
  }

  toggleOpen () {
    this.setState({
      open: !this.state.open
    })
  }

  static Header (props) {
    let {className, children} = props
    return (
      <TheSection.Header {...htmlAttributesFor(props, {except: ['className']})}
                         {...eventHandlersFor(props, {except: []})}
                         className={classnames('the-accordion-section-header', className)}
      >
        <TheIcon className={classnames('the-accordion-header-icon', TheAccordionSection.UP_ICON)}/>
        <span>{children}</span>
      </TheSection.Header>
    )
  }

  static Body (props) {
    let {className, children} = props
    return (
      <TheSection.Body {...htmlAttributesFor(props, {except: ['className']})}
                       {...eventHandlersFor(props, {except: []})}
                       className={classnames('the-accordion-section-body', className)}
      >
        {children}
      </TheSection.Body>
    )
  }
}

TheAccordionSection.UP_ICON = 'fa fa-angle-up'

TheAccordionSection.propTypes = {
  /** Open  when mounted */
  open: PropTypes.bool,
  /** Heading component */
  heading: PropTypes.node.isRequired
}

TheAccordionSection.defaultProps = {
  open: false
}

TheAccordionSection.displayName = 'TheAccordionSection'

export default TheAccordionSection

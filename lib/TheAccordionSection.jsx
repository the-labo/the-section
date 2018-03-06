'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheIcon } from 'the-icon'
import TheSection from './TheSection'

/**
 * Accordion section
 */
class TheAccordionSection extends React.Component {
  static Body (props) {
    let {children, className} = props
    return (
      <TheSection.Body {...htmlAttributesFor(props, {except: ['className']})}
                       {...eventHandlersFor(props, {except: []})}
                       className={classnames('the-accordion-section-body', className)}
      >
        {children}
      </TheSection.Body>
    )
  }

  static Header (props) {
    let {children, className} = props
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

  constructor (props) {
    super(props)
    this.inner = null
    this.state = {
      open: props.open,
    }
  }

  getInnerHeight () {
    let {inner} = this
    return inner && inner.offsetHeight
  }

  render () {
    const {props, state} = this
    let {
      children,
      className,
      heading,
    } = props
    let {open} = state
    const {Body, Header} = TheAccordionSection
    return (
      <TheSection {...htmlAttributesFor(props, {except: ['className']})}
                  {...eventHandlersFor(props, {except: []})}
                  aria-expanded={open}
                  className={classnames('the-accordion-section', className, {
                    'the-accordion-section-closed': !open,
                    'the-accordion-section-open': open,
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

  toggleOpen () {
    this.setState({
      open: !this.state.open,
    })
  }
}

TheAccordionSection.UP_ICON = 'fa fa-angle-up'

TheAccordionSection.propTypes = {
  /** Open  when mounted */
  /** Heading component */
  heading: PropTypes.node.isRequired,
  open: PropTypes.bool,
}

TheAccordionSection.defaultProps = {
  open: false,
}

TheAccordionSection.displayName = 'TheAccordionSection'

export default TheAccordionSection

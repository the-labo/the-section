'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheSection from './TheSection'
import TheIcon from 'the-icon'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Accordion section
 */
class TheAccordionSection extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.inner = null
    s.state = {
      open: props.open
    }
  }

  render () {
    const s = this
    const { props, state } = s
    let {
      className,
      children,
      heading
    } = props
    let { open } = state
    const { Header, Body } = TheAccordionSection
    return (
      <TheSection {...htmlAttributesFor(props, { except: [ 'className' ] })}
                  {...eventHandlersFor(props, { except: [] })}
                  className={classnames('the-accordion-section', className, {
                    'the-accordion-section-open': open,
                    'the-accordion-section-closed': !open
                  })}
                  style={{ maxHeight: s.getInnerHeight() }}
      >
        <div className='the-accordion-section-inner'
             ref={(inner) => { s.inner = inner }}
        >
          <Header onClick={(e) => s.toggleOpen()}
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
    const s = this
    let { inner } = s
    return inner && inner.offsetHeight
  }

  toggleOpen () {
    const s = this
    s.setState({
      open: !s.state.open
    })
  }

  static Header (props) {
    let { className, children } = props
    return (
      <TheSection.Header {...htmlAttributesFor(props, { except: [ 'className' ] })}
                         {...eventHandlersFor(props, { except: [] })}
                         className={classnames('the-accordion-section-header', className)}
      >
        <TheIcon className={classnames('the-accordion-header-icon', TheAccordionSection.UP_ICON)}/>
        <span>{children}</span>
      </TheSection.Header>
    )
  }

  static Body (props) {
    let { className, children } = props
    return (
      <TheSection.Body {...htmlAttributesFor(props, { except: [ 'className' ] })}
                       {...eventHandlersFor(props, { except: [] })}
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

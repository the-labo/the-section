'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { TheSpin } from 'the-spin'
import TheSectionStyle from './TheSectionStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Section of the-components
 */
class TheSection extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      spinning,
      children
    } = props
    return (
      <section {...htmlAttributesFor(props, { except: [ 'className' ] })}
               {...eventHandlersFor(props, { except: [] })}
               className={classnames('the-section', className)}
      >
        <TheSpin className='the-section-spin'
                 cover
                 size='x-large'
                 enabled={spinning}/>
        {children}
      </section>
    )
  }

  static Header (props) {
    let { className, children, lined } = props
    return (
      <h2 {...htmlAttributesFor(props, { except: [ 'className' ] })}
          {...eventHandlersFor(props, { except: [] })}
          className={classnames('the-section-header', className, {
            'the-section-header-lined': lined
          })}
      >
        {children}
      </h2>
    )
  }

  static Body (props) {
    let { className, children } = props
    return (
      <div {...htmlAttributesFor(props, { except: [ 'className' ] })}
           {...eventHandlersFor(props, { except: [] })}
           className={classnames('the-section-body', className)}
      >
        {children}
      </div>
    )
  }
}

TheSection.Style = TheSectionStyle

TheSection.propTypes = {
  spinning: PropTypes.bool
}

TheSection.defaultProps = {
  spinning: false
}

TheSection.displayName = 'TheSection'

export default TheSection

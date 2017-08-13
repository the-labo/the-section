'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import { TheSpin } from 'the-spin'
import { TheButton } from 'the-button'
import TheSectionStyle from './TheSectionStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Section of the-components
 */
class TheSection extends React.PureComponent {
  render () {
    const s = this
    const {props} = s
    const {
      className,
      spinning,
      children
    } = props
    return (
      <section {...htmlAttributesFor(props, {except: ['className']})}
               {...eventHandlersFor(props, {except: []})}
               className={c('the-section', className)}
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
    const {
      className,
      children,
      lined,
      actionText,
      actionTo,
      onAction
    } = props
    return (
      <h2 {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={c('the-section-header', className, {
            'the-section-header-lined': lined
          })}
      >
        <span className="the-section-header-text">
          {children}
        </span>
        {
          actionText && (
            <TheButton className='the-section-header-action'
                       to={actionTo}
                       onClick={onAction}
                       simple
            >{actionText}</TheButton>
          )
        }
      </h2>
    )
  }

  static Body (props) {
    let {className, children} = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-section-body', className)}
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

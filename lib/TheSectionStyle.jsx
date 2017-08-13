'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheSection */
const TheSectionStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={classnames('the-section-style', className)}
            styles={TheSectionStyle.data(options)}
  />
)

TheSectionStyle.displayName = 'TheSectionStyle'
TheSectionStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheSectionStyle.defaultProps = {
  options: {}
}

TheSectionStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    borderColor = ThemeValues.borderColor,
    lightBorderColor = ThemeValues.lightBorderColor,
    backgroundColor = ThemeValues.backgroundColor,
    tappableHeight = ThemeValues.tappableHeight,
    hoverOpacity = ThemeValues.hoverOpacity,
    activeOpacity = ThemeValues.activeOpacity,
  } = options
  return Object.assign({},
    asStyleData('.the-section', {
      '&': {
        margin: '16px 0',
        display: 'block',
        fontWeight: 'normal',
        backgroundColor,
        position: 'relative'
      },
      '.the-section-header': {
        borderBottom: borderColor,
        fontWeight: 'normal',
        margin: 0,
        position: 'relative',
        boxSizing: 'border-box',
        padding: '0 8px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&.the-section-header-lined': {
          fontSize: '14px',
          borderBottom: '1px solid #F0F0F0',
          lineHeight: '16px',
          padding: '0 8px',
          marginBottom: '4px',
          color: '#999'
        },
        '.the-section-header-action': {
          minHeight: '16px',
          margin: 0,
          padding: '2px 4px'
        }
      },
      '.the-section-body': {
        display: 'block',
        padding: '8px'
      }
    }),
    asStyleData('.the-accordion-section', {
      '&': {
        transition: 'max-height 300ms',
        overflow: 'hidden',
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
        backgroundColor
      },
      '.the-accordion-section-inner': {},
      '.the-section-header': {
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '4px',
        display: 'flex',
        padding: 0,
        alignItems: 'center',
        margin: '-1px',
        fontSize: '1em',
        cursor: 'pointer',
        '&:hover': {opacity: hoverOpacity},
        '&:active': {opacity: activeOpacity},
        position: 'relative',
        lineHeight: tappableHeight,
        height: tappableHeight + 2,
        zIndex: 1
      },
      '.the-section-body': {
        overflow: 'hidden'
      },
      '.the-accordion-header-icon': {
        transformOrigin: '50% 50%',
        transform: 'rotate(90deg)',
        transition: 'transform 100ms',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: '1em',
        height: '1em'
      },
      '&.the-accordion-section-closed': {
        maxHeight: `${tappableHeight}px !important`
      },
      '&.the-accordion-section-open': {
        '.the-section-body': {},
        '.the-accordion-header-icon': {
          transform: 'rotate(180deg)'
        }
      }
    })
  )
}

export default TheSectionStyle

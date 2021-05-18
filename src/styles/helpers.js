import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const containerStyles = css`
  width: 100%;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;

  ${(props) => props.theme.mui.breakpoints.up('md')} {
    padding-left: 48px;
    padding-right: 48px;
  }

  ${(props) => props.theme.mui.breakpoints.up('lg')} {
    padding-left: 150px;
    padding-right: 150px;
  }

  ${(props) => props.theme.mui.breakpoints.up('xl')} {
    padding-left: 300px;
    padding-right: 300px;
  }
`

export const containerHomePageStyles = css`
  ${containerStyles}

  ${(props) => props.theme.mui.breakpoints.up('md')} {
    padding-right: 400px;
  }

  ${(props) => props.theme.mui.breakpoints.up('lg')} {
    padding-right: 500px;
  }

  ${(props) => props.theme.mui.breakpoints.up('xl')} {
    padding-right: 700px;
  }
`

export const Hidden = ({ children, ...props }) => {
  return <HiddenWrapper {...props}>{children}</HiddenWrapper>
}

Hidden.propTypes = {
  children: PropTypes.node,
  mdUp: PropTypes.bool,
  smDown: PropTypes.bool,
}

const HiddenWrapper = styled.div`
  ${(props) => {
    if (props.mdUp) {
      return css`
        ${props.theme.mui.breakpoints.up('md')} {
          display: none;
        }
      `
    } else if (props.smDown) {
      return css`
        ${props.theme.mui.breakpoints.down('sm')} {
          display: none;
        }
      `
    }
  }}
`

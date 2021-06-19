import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Hidden from "@material-ui/core/Hidden";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = {
  HEIGHT: 100,
};

/**
 * NavLinkList
 */

const NavLinkList = ({ links }) => {
  const filteredLinks = links.filter((l) => !l.visibleIfDrawerOnly);

  return (
    <List>
      {filteredLinks.map(
        (
          {
            title,
            url,
            target,
            selected,
            visibleIfDrawer,
            IconComponent,
            onClick,
          },
          i
        ) => {
          const last = filteredLinks.length - 1 === i;
          const isScroll = url.startsWith("#");
          const Link = isScroll ? ScrollLink : NavLink;

          const Component = (
            <Link
              key={title}
              selected={selected}
              href={url}
              last={isScroll ? undefined : last}
              offset={Nav.HEIGHT}
              onClick={onClick}
              target={target}
            >
              {IconComponent && <IconComponent style={iconStyle} />}
              {title}
            </Link>
          );

          if (visibleIfDrawer) {
            return Component;
          }

          return (
            <Hidden key={title} smDown>
              {Component}
            </Hidden>
          );
        }
      )}
    </List>
  );
};

/**
 * PropTypes
 */

NavLinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, url: PropTypes.string })
  ),
};

NavLinkList.defaultProps = {
  links: [],
};

/**
 * Styles
 */

const iconStyle = {
  marginRight: 8,
  height: 20,
};

const List = styled.ul`
  display: flex;
  flex-direction: row;
  //flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

const linkStyles = css`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.primary.regular};
  line-height: 15px;
  color: ${(props) =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.primary};
  text-decoration: none;
  font-weight: 700;
  margin-right: ${(props) => (props.last ? 0 : 42)}px;
  display: flex;
  align-items: center;

  ${(props) => props.theme.mui.breakpoints.down("sm")} {
    margin-right: 0px;
  }

  ${(props) => props.theme.mui.breakpoints.down("md")} {
    margin-right: ${(props) => (props.last ? 0 : 22)}px;
  }
`;

const NavLink = styled.a`
  ${linkStyles}
`;

const ScrollLink = styled(AnchorLink)`
  ${linkStyles}
`;

/**
 * Exports
 */

export { NavLink };
export default NavLinkList;

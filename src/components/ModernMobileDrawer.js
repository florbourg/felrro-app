import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import SearchInput from "../components/SearchInput";

import { useEscapePress, useOutsideElementClick } from "../lib/helpers";

const Nav = {
  HEIGHT: 100,
};

/**
 * ModernMobileDrawer
 */

const useStyles = makeStyles(() => {
  return {
    selectedText: {
      fontWeight: "bold",
    },
  };
});

const ModernMobileDrawer = ({
  className,
  visible,
  onRequestClose,
  items,
  showCTA,
  ctaComponent,
  theme,
}) => {
  const ref = useRef(null);
  const classes = useStyles(theme);

  const handleCloseButtonClick = () => {
    onRequestClose();
  };

  useEscapePress(onRequestClose, !visible);
  useOutsideElementClick(ref, onRequestClose, !visible);

  return (
    <Wrapper ref={ref} className={className} visible={visible}>
      {showCTA && <ComponentWrapper>{ctaComponent}</ComponentWrapper>}
      <Links>
        {items.map(
          ({ title, url, target, selected, IconComponent, onClick }, i) => {
            const last = i === items.length - 1;
            const isScrollable = url.startsWith("#");
            const textClass = { primary: selected ? classes.selectedText : "" };

            const handleClick = () => {
              onClick && onClick();
              handleCloseButtonClick();
            };

            const Link = (
              <ListItem
                button
                component="a"
                href={url}
                onClick={handleClick}
                target={target}
              >
                {IconComponent && <IconComponent style={iconStyle} />}
                <ListItemText primary={title} classes={textClass} />
              </ListItem>
            );

            return (
              <div key={title}>
                {isScrollable && (
                  <ScrollLink
                    href={url}
                    offset={Nav.HEIGHT}
                    onClick={handleClick}
                  >
                    {Link}
                  </ScrollLink>
                )}
                {!isScrollable && Link}
                {!last && <Divider />}
              </div>
            );
          }
        )}
      </Links>
      <SearchInput setDrawer={handleCloseButtonClick} />
    </Wrapper>
  );
};

ModernMobileDrawer.propTypes = {
  items: PropTypes.array.isRequired,
  onRequestClose: PropTypes.func,
  visible: PropTypes.bool,
  className: PropTypes.string,
};

ModernMobileDrawer.defaultProps = {
  visible: false,
  className: "",
};

/**
 * Styles
 */

const iconStyle = {
  marginRight: 8,
  height: 20,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  position: absolute;

  transition: top 0.3s ease-in-out;
  top: ${(props) => (props.visible ? "60px" : "-550%")};
  z-index: 99999;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ComponentWrapper = styled.div`
  width: 100%;
  display: block;
  margin: 10px 0px;
  ${(props) => props.theme.mui.breakpoints.up("md")} {
    display: none;
  }
`;

const Links = styled.div`
  width: 100%;
`;

const ScrollLink = styled.div`
  text-decoration: none;
  color: inherit;
`;

/**
 * Exports
 */

export default ModernMobileDrawer;

import React from "react";
import styled from "@emotion/styled";
import { sizes } from "settings/fonts";
import { Link, useLocation } from "react-router-dom";
import { MOVIES } from "pages/paths";
import { ReactComponent as LeftArrow } from "./left-arrow.svg";

type AppHeaderProps = {
  title?: string;
};

function AppHeader(props: AppHeaderProps) {
  const { title = "Movies Application" } = props;
  const location = useLocation();

  return (
    <AppHeader.Wrapper>
      <header>
        <div className="back">
          {location.pathname !== MOVIES && (
            <Link to={MOVIES}>
              <LeftArrow height="1.5rem" width="3.5rem" />
            </Link>
          )}
        </div>
        <div className="text">{title}</div>
      </header>

      {/* <main>
        <div>{children}</div>
      </main> */}
    </AppHeader.Wrapper>
  );
}

AppHeader.Wrapper = styled.div`
  header {
    background-color: #3f51b5;
    padding: 1rem;
    color: white;
    font-size: ${sizes.xLarge};
    display: flex;
    .back {
      width: 2.5rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    .text {
      text-align: center;
      width: 100%;
    }
  }
`;
export default AppHeader;

"use client";

import React from "react";
import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }

  *, *::before, *:after {
    box-sizing: inherit;
  }

  @font-face {
    font-family: 'radnika_next';
    src: url('/fonts/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'radnika_next', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'radnika_next', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var() (--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />

      <InnerStyles>{children}</InnerStyles>
    </div>
  );
};

export default Page;

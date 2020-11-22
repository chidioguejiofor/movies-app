import styled from "@emotion/styled";
import React from "react";
import { sizes } from "settings/fonts";

type TableProps = {
  children: React.ReactNode;
};

function Table(props: TableProps) {
  const { children } = props;

  return <Table.Wrapper>{children}</Table.Wrapper>;
}

Table.Wrapper = styled.table`
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;

  a{
      text-decoration: none;
  }
  tr {
    background-color: #fff;
    &:nth-of-type(2n) {
      background-color: #f1f1f1;
    }

    &:hover {
      background-color: rgba(175, 175, 175, 0.507);
    }
    td,
    th {
      text-align: left;
      padding: 1rem;
      border: none;
      border-top: 1px solid rgba(0, 0, 1, 0.171);
      border-bottom: 1px solid rgba(0, 0, 1, 0.171);
      font-size: ${sizes.large};
      &:first-of-type {
        border-left: 1px solid rgba(0, 0, 1, 0.171);
      }

      &:last-of-type {
        border-right: 1px solid rgba(0, 0, 1, 0.171);
      }
    }
  }
`;

export default Table;

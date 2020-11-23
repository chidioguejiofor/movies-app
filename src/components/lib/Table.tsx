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
  width: 100%;
  border-collapse: collapse;

  a {
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

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyD_u69XpwiHm1OxxBuecOJ9I9x0BLr3vTY",
//     authDomain: "movie-chat-app-90b11.firebaseapp.com",
//     databaseURL: "https://movie-chat-app-90b11.firebaseio.com",
//     projectId: "movie-chat-app-90b11",
//     storageBucket: "movie-chat-app-90b11.appspot.com",
//     messagingSenderId: "576275881530",
//     appId: "1:576275881530:web:b4256acf0e8d7cd41e5f03",
//     measurementId: "G-FZJB39FXS7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
export default Table;

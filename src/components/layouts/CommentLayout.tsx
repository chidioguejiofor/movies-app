import styled from "@emotion/styled";
import { Avatar } from "components/lib/media/Avatar";
import React, { SyntheticEvent } from "react";

type SingleCommentProps = {
  align?: "flex-end" | "flex-start";
  text: string;
};

const SingleComment = (props: SingleCommentProps) => {
  const { align = "flex-start", text } = props;

  return (
    <SingleComment.Wrapper align={align}>
      {align === "flex-start" && (
        <div className="avatar">
          <Avatar
            backgroundColor="#3f51b5"
            diameter="3rem"
            src="fdsaf"
            frameWidth="0"
            alt="User"
          />
        </div>
      )}

      <div className="text">{text}</div>

      {align === "flex-end" && (
        <div className="avatar">
          <Avatar
            backgroundColor="#3f51b5"
            diameter="3rem"
            src="fdsaf"
            frameWidth="0"
            alt="User"
          />
        </div>
      )}
    </SingleComment.Wrapper>
  );
};

SingleComment.Wrapper = styled.div<{ align: string }>`
  display: flex;
  padding: 0 4rem;
  padding-top: 1rem;
  align-items: center;
  justify-content: ${(props) => props.align};
  > .text {
    max-width: 50vw;
    min-height: 4rem;

    align-items: center;
    background: #3f51b5;
    color: #fff;
    border-radius: 1rem;
    padding: 2rem 1.5rem;

    margin-left: ${(props) => (props.align === "flex-start" ? "1rem" : "0")};
    margin-right: ${(props) => (props.align === "flex-end" ? "1rem" : "0")};
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

type CommentLayoutProps = {
  onSubmitComment: () => void;
  onChange: (e: SyntheticEvent) => void;
  values: Record<string, any>;
  comments: Record<string, any>[];
  myComments: string;
};

function CommentLayout(props: CommentLayoutProps) {
  const { onSubmitComment, comments, onChange, values, myComments } = props;
  const MY_COMMENTS = myComments?.split(",");

  const MY_UNIQUE_COMMENTS = new Set(MY_COMMENTS);

  return (
    <CommentLayout.Wrapper>
      <div className="messages">
        {comments.map((comment, index) => (
          <SingleComment
            key={index}
            text={comment.comment}
            align={
              MY_UNIQUE_COMMENTS.has(comment.id) ? "flex-end" : "flex-start"
            }
          />
        ))}
      </div>

      <div className="controls">
        <textarea
          name="comment"
          value={values.comment}
          onChange={onChange}
          placeholder="Type comment here"
        />
        <button onClick={onSubmitComment}>
          <img src="/send.svg" alt="Send" />
        </button>
      </div>
    </CommentLayout.Wrapper>
  );
}

CommentLayout.Wrapper = styled.main`
  .messages {
    background: #f2f2f2;

    height: calc(90vh - 74px);
    overflow: auto;
  }
  .controls {
    height: 10vh;
    background: white;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    textarea {
      display: block;
      height: 100%;
      width: 90%;
      font-size: 1rem;
      resize: none;
      appearance: none;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-;
      padding: 1.5rem;
      border: none;
      outline: none;
    }

    button {
      display: block;
      border: none;
      min-width: 4rem;
      min-height: 2rem;
      padding: 0.5rem 1rem;
      border-radius: 50%;
      cursor: pointer;
      color: white;
      background: yellowgreen;
      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;

export default CommentLayout;

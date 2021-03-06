import React, { useEffect, useState } from "react";
import AppHeader from "components/lib/AppHeader";
import CommentLayout from "components/layouts/CommentLayout";
import { commentCollection } from "services/firebase";
import { RouteComponentProps } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Comments(props: RouteComponentProps<{ movieSlug: string }>) {
  const [comments, setComments] = useState<Record<string, any>[]>([]);
  const { movieSlug } = props.match.params;
  const movieTitle = movieSlug.split("-").join(" ");
  const [myComments, setMyComments] = useState(
    localStorage.getItem("MY_COMMENTS") || ""
  );
  const [values, setValues] = useState<Record<string, any>>({
    comment: "",
    movieSlug,
  });

  useEffect(() => {
    const fetchData = async () => {
      commentCollection
        .where("movieSlug", "==", movieSlug)
        .orderBy("commentedAt")
        .onSnapshot(({ docs }) => {
          const comments = docs
            .map((doc) => doc.data())
            .filter((comment) => comment.movieSlug === movieSlug);

          setComments(comments);
          setValues((prev) => ({
            ...prev,
            comment: "",
          }));
        });
    };

    fetchData();
  }, [movieSlug]);

  const title = `${movieTitle} Comments`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (values.comment) {
      const commentId = uuid();

      const userComments = localStorage.getItem("MY_COMMENTS");
      let splittedComments: string[] = [];

      if (userComments) {
        splittedComments = userComments.split(",");
      }

      splittedComments.push(commentId);
      const newMyComments = splittedComments.join(",");

      localStorage.setItem("MY_COMMENTS", newMyComments);
      setMyComments(newMyComments);
      await commentCollection.add({
        ...values,
        id: commentId,
        comment: values.comment.trim(),
        commentedAt: new Date().toISOString(),
      });
    }
  };

  return (
    <div>
      <AppHeader title={title} />

      <CommentLayout
        onChange={handleChange}
        onSubmitComment={handleSubmit}
        comments={comments}
        values={values}
        myComments={myComments}
      />
    </div>
  );
}

export default Comments;

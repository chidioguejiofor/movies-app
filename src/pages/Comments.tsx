import React, { useEffect, useState } from "react";
import AppHeader from "components/lib/AppHeader";
import CommentLayout from "components/layouts/CommentLayout";
import { commentCollection } from "firebaseConfig";
import { RouteComponentProps } from "react-router-dom";

function Comments(props: RouteComponentProps<{ movieSlug: string }>) {
  const [comments, setComments] = useState<Record<string, any>[]>([]);
  const { movieSlug } = props.match.params;
  const movieTitle = movieSlug.split("-").join(" ");
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
      await commentCollection.add({
        ...values,
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
      />
    </div>
  );
}

export default Comments;

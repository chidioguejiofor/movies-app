import React from "react";
import AppHeader from "components/lib/AppHeader";

function Comments(props) {
  console.log('props=', props);

  const movieTitle = props.match.params.movieSlug.split('-').join(' ');
  const title = `${movieTitle} Comments`

  return (
    <div>
    <AppHeader title={title} />
    <div>Comments Page</div>
    </div>
  );
}

export default Comments;

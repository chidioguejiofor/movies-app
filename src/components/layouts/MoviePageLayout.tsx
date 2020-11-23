import { SelectInput, TextInput } from "components/lib/controls/Input";
import Table from "components/lib/Table";
import React from "react";
import { Link } from "react-router-dom";
import AppHeader from "components/lib/AppHeader";
import styled from "@emotion/styled";

export type MovieType = {
  year: string;
  votes: string;
  title: string;
  runtime: string;
  revenue: string;
  rating: string;
  rank: string;
  metascore: string;
  genre: string[];
  director: string;
  description: string;
  actors: string[];
};
type MoviePageLayoutProps = {
  data: MovieType[];
  uniqueGenres: string[];
  onValueChange: (e) => void;
  values: Record<"selectedGenre" | "search", string>;
};

const sluggify = (text: string) => {
  return text.split(" ").join("-");
};

const MoviePageLayout = (props: MoviePageLayoutProps) => {
  const { data, uniqueGenres, onValueChange, values } = props;

  return (
    <div>
      <AppHeader />
      <MoviePageLayout.Main>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Runtime</th>
              <th>Rating</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={4}>
                <TextInput
                  name="search"
                  onChange={onValueChange}
                  value={values.search}
                />
              </td>

              <td>
                <SelectInput
                  name="selectedGenre"
                  onChange={onValueChange}
                  value={values.selectedGenre}
                >
                  <option value="all">--Show All--</option>
                  {uniqueGenres.map((genre, index) => (
                    <option key={index} value={genre}>
                      {genre}
                    </option>
                  ))}
                </SelectInput>
              </td>
            </tr>
            {/* Data from movies.json */}

            {data.map((movie, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/comments/${sluggify(movie.title)}`}>
                    {movie.title}
                  </Link>
                </td>
                <td>{movie.year}</td>
                <td>{movie.runtime}</td>
                <td>{movie.rating}</td>
                <td>{movie.genre.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MoviePageLayout.Main>
    </div>
  );
};

MoviePageLayout.Main = styled.main`
  padding: 0 4rem;
`;
export default MoviePageLayout;

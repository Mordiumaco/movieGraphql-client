import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";
//Apollo는 graphQL 클라이언트와 관련됨
//react-apollo는 리엑트에 연결하는 방법
//redux, fetch, state 이딴거 필요 없이 쿼리 컴포넌트로 끝내버린다.

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => {
  const { data, error, loading } = useQuery(HOME_PAGE);

  return (
    <Container>
      <Helmet>
        <title>Home | Movie QL API</title>
      </Helmet>

      {loading && "Loading"}
      {error && "Something is happened"}
      {!loading &&
        data &&
        data.movies &&
        data.movies.map(movie => {
          const { id, medium_cover_image, title, rating } = movie;
          const image_url = "https://yst.am/";
          return (
            <Movie
              id={id}
              key={id}
              poster={image_url+medium_cover_image}
              title={title}
              rating={rating}
            />
          );
        })}
    </Container>
  );
};

export default Home;

import gql from "graphql-tag";

//module graphql-tag는 우리가 프론트엔드에 graphQL를 작성하는 방법

const HOME_PAGE = gql`
  query {
    movies(limit: 20, rating: 7) {
      id
      title
      language
      rating
      medium_cover_image
    }
  }
`;

const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;

export { HOME_PAGE, MOVIE_DETAILS };

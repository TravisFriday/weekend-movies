import { organizePopularMovies, getLikedMovies } from "./utils";

const movies = [
  {
    adult: false,
    backdrop_path: "/iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
    genre_ids: [16, 10751, 35, 14],
    id: 508947,
    original_language: "en",
    original_title: "Turning Red",
    overview:
      "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
    popularity: 13178.401,
    poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    release_date: "2022-03-10",
    title: "Turning Red",
    video: false,
    vote_average: 7.5,
    vote_count: 700,
  },
];

const likedMoviesID = {
  liked: {
    "508947": 1,
  },
};

test("testing organizePopularMovies function", () => {
  expect(organizePopularMovies(movies)).toStrictEqual([
    {
      original_title: "Turning Red",
      poster_path:
        "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      vote_average: 7.5,
      overview:
        "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
      genre_ids: "16,10751,35,14",
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
      movie_id: "508947",
    },
  ]);
});

test("getLikedMovies function", () => {
  expect(getLikedMovies(likedMoviesID, movies)).toStrictEqual([
    {
      original_title: "Turning Red",
      poster_path:
        "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      vote_average: 7.5,
      overview:
        "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
      genre_ids: "16,10751,35,14",
      backdrop_path:
        "https://image.tmdb.org/t/p/w500/iPhDToxFzREctUA0ZQiYZamXsMy.jpg",
      movie_id: "508947",
    },
  ]);
});

export const organizeGenres = (data) => {
  console.log();
  if (data) {
    const json = data["genres"].map((d) => d);
    console.log(JSON.stringify(json, null, 2));
    return JSON.stringify(json, null, 2);
  }
};

export const organizePopularMovies = (data) => {
  const json = data.map((d) => d);
  console.log(JSON.stringify(json, null, 2));
  return JSON.stringify(json, null, 2);
};

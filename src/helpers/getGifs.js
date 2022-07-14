export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=e2Q9wQhHyg6LL8BAJK6RxIKiwk5PzMlU&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = await data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

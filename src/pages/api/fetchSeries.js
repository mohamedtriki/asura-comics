export const handler = async (req, res) => {
  const url = `${process.env.API_URL}series`;

  const fetchedData = await fetch(url)
    .then((resp) => resp.json())
    .catch((err) => {
      console.error(err);
    });

  const series = fetchedData.map((item) => ({
    link: `/comics/${item.id}-${item.slug}`,
    image: `${process.env.NEXT_PUBLIC_IMG_URL}thumbnail/${item.poster_uuid}.jpg`,
    title: item.title,
    genres: item.genres,
    id: item.id,
    status: item.status,
  }));

  if (!fetchedData) res.status(404);
  else {
    res.status(200).json({
      series
    });
  }

  res.end();
};

export default handler;

/* eslint-disable camelcase */

import axios from 'axios';

export const handler = async (req, res) => {
  const { seriesId, uid, rating } = req.body;

  const url = `${process.env.API_URL}user/${uid}/ratings`;

  const output = await axios
    .put(url, {
      series_id: seriesId,
      rating,
    })
    .then((result) => result.data);

  const { success } = output;

  if (!success) {
    res.status(204);
  } else {
    res.status(200);
  }

  res.end();
};

export default handler;

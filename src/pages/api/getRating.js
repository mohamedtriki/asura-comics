/* eslint-disable camelcase */

import axios from 'axios';

export const handler = async (req, res) => {
  const { seriesId, uid } = req.body;
  const url = `${process.env.API_URL}user/${uid}/ratings`;

  const output = await axios
    .get(url, { data: { series_id: seriesId } }).then((result) => result.data);

  const { success, rating } = output;

  if (!success) {
    res.status(204);
  } else {
    res.status(200).json({ rating });
  }

  res.end();
};

export default handler;

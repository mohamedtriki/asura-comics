/* eslint-disable camelcase */

import axios from 'axios';

export const handler = async (req, res) => {
  const { seriesID, uid } = req.body;

  const url = `${process.env.API_URL}user/${uid}/bookmarks`;

  const output = await axios
    .post(url, {
      series_id: seriesID,
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

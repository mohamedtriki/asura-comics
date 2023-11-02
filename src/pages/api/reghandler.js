const handler = async (req, res) => {
  if (req.method !== 'POST') return res.status(401).json({ error: 'Not allowed' });

  const { email, username, password } = JSON.parse(req.body);

  const url = `${process.env.API_URL}auth/register`;

  console.log(email);

  const reg = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      username,
      password
    })
  });

  return res.status(reg.status).json(await reg.json());
};

export default handler;

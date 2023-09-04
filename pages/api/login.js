import { loginUser } from "../lib/auth";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Invalid request method' });
    return;
  }

  const { email, password } = req.body;

  try {
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

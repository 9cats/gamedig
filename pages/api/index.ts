// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Gamedig from "gamedig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const queryOptions : Gamedig.QueryOptions  = req.body;
  try {
    const data = await Gamedig.query(queryOptions);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e);
  }
}

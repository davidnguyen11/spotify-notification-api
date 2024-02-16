// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const data = require("./data.json");

type Data = {
  targetUrl: string;
  imageUrl: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data);
}

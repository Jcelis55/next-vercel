// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse } from "next";


type Data ={
  name: string;
}

export default function handler (req:NextApiResponse, res:NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}

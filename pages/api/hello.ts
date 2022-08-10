// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  value: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth()+1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  res.status(200).json({ value: `${year}年${month}月${date}日${hour}時${min}分${sec}秒` })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IMail } from '@/interfaces/IMail'
import type { NextApiRequest, NextApiResponse } from 'next'
import mailData from './mail_list.json'

type Data = {
  mail_list: IMail[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    mail_list: mailData.mail_list
  });
}

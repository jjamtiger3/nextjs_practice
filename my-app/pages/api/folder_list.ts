// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IMailFolder } from '@/interfaces/IMailFolder'
import type { NextApiRequest, NextApiResponse } from 'next'
import folderData from './folder_list.json'

type Data = {
  folder_list: IMailFolder[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    folder_list: folderData.folder_list
  })
}

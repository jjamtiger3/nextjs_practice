import { IMail } from '@/interfaces/IMail';
import { useState, useEffect } from 'react';

export default function Main() {
  const [mailList, setMailList] = useState<IMail[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = '/api/mail_list';
      const response = await fetch(url);
      const data = await response.json();
      const { mail_list } = data;
      setMailList(mail_list);
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mail-contents-container">
      <table>
        <tbody>
          {
            mailList.map((mail, index) => {
              return (
                <tr key={`mail_${index}`} className={`${mail.read ? '' : 'unread'}`}>
                  <td className="mark">
                    <input type="checkbox" />
                  </td>
                  <td className="mark">
                    <span className={`icon star ${mail.important ? 'fill' : ''}`}></span>
                  </td>
                  <td className="mark">
                    <span className={`icon clip`}></span>
                  </td>
                  <td className="sender">
                    <span>{mail.senderName}</span>
                  </td>
                  <td>
                    {
                      mail.subject
                    }
                  </td>
                  <td className="send-date">
                    {
                      mail.sendDate
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </main>
  )
}

import Button from "@/components/Button";
import { IMailFolder } from "@/interfaces/IMailFolder";
import { useEffect, useState } from "react";

export default function Side() {
  const [folderList, setFolderList] = useState<IMailFolder[]>([]);
  const mailWriteProps = {
    label: '편지쓰기',
    icon: 'pencil',
    theme: 'white',
    style: {
      borderRadius: 5,
      width: '150px',
      padding: '10px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  }

  function getIconName(index: number): string {
    return 'important';
    // return {
    //   0: 'box',
    //   1: 'send',
    //   2: 'important',
    //   3: 'document',
    //   4: 'spam'
    // }[index] || '';
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = '/api/folder_list';
      const response = await fetch(url);
      const data = await response.json();
      const { folder_list } = data;
      setFolderList(folder_list);
    };

    fetchData();
  }, []);

  return (
    <aside className="mail-aside-menu">
      <div className='mail-write-wrapper'>
        <Button {...mailWriteProps}></Button>
        <ul className="mail-folder-list">
          {
            folderList.map((folder: IMailFolder, index) => {
              return (
                <li className="mail-folder black" key={`folder_${index}`}>
                  <div className='label-wrapper'>
                    <span className={`icon ${getIconName(index)} white`}></span>
                    <span>
                      { folder.label }
                    </span>
                  </div>
                  <span>
                    { folder.mailCount.toLocaleString() }
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}

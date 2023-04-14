import Button from "@/components/Button";
import { useEffect } from "react";

export default function Side() {
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

  useEffect(() => {
    const fetchData = async () => {
      const url = '/api/folder_list';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <aside className="mail-aside-menu">
      <div className='mail-write-wrapper'>
        <Button {...mailWriteProps}></Button>
      </div>
    </aside>
  )
}

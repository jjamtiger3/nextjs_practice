import { useRouter } from 'next/router';
import Header from './header';
import Side from './side';
import ReadMail from './ReadMail';

function Read() {
  const router = useRouter();
  const { read } = router.query;
  console.log(read);

  return (
    <>
      <Header />
      <Side />
      <ReadMail />
    </>
  );
}

export default Read;

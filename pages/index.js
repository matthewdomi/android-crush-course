import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { Share } from '@capacitor/share';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const share = async () => {
    await Share.share({
      title: 'Domi',
      text: 'How are you',
      url: 'https://www.json.com',
      dialogTitle: 'wOW',
    });
  };
  return (
    <Layout>
      <h1>Welcome to my Next.js app</h1>
      <p>This is the home page</p>
      <button onClick={() => share()}>Share All</button>
    </Layout>
  );
}

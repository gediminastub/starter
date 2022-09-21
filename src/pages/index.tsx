import type {NextPage} from 'next';
import Head from 'next/head';
import {trpc} from '../utils/trpc';
import {useSession} from 'next-auth/react';
import {Button} from '../components/Button';
import {useRouter} from 'next/router';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['user.hello', {text: 'from tRPC'}]);
  const hello2 = trpc.useQuery(['auth.getSecretMessage']);
  const {data} = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main
        className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1
          className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">T3</span> App
        </h1>
        <Button onClick={() => router.push('/api/auth/signin')}>txt</Button>
        <div className={'border-2'}>
          {data?.user?.email}
        </div>
        <div className={'border-2'}>
          {hello2.data}
        </div>
        <div
          className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;

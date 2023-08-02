import UserContent from 'components/user/UserContent';
import UserInfo from 'components/user/UserInfo';
import Head from 'next/head';

import Logo from '../../public/hoobe.svg';

const Home: React.FC<UserResponse> = ({ user, userSocialPlatform, content }) => {
  return (
    <>
      <Head>
        <title>Hoo.be - {user.fullName}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between pt-10 shadow-current">
        <div className="bg-white max-w-2xl py-10 px-15 rounded-3xl w-full">
          <UserInfo user={user} userSocialPlatform={userSocialPlatform} />
          <UserContent content={content} />
        </div>
        <footer className="mt-36 pb-10 max-w-2xl w-full text-center text-sm text-bdbaba font-semibold font-family-semibold">
          <div className="mb-5 rounded-xl bg-primary p-2 w-56 mx-auto ">
            <a href="/create-hoobe" className="text-white flex items-center justify-center px-5">
              <div className="bg-white text-primary rounded-full mr-2 p-1">
                <Logo width={20} height={20} />
              </div>{' '}
              create your hoo.be
            </a>
          </div>
          <div>
            <a href="/login" className="">
              login
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch user data from the mock API
  const response = await fetch('http://localhost:3001/hoobe');
  const data: UserResponse = await response.json();

  return {
    props: data,
  };
}

export default Home;

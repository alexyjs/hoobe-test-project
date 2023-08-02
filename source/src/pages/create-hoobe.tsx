import Image from 'next/image';

const CreateHoobe = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-10 shadow-current">
      <div className="bg-white max-w-2xl py-10 px-15 rounded-3xl w-full text-center flex flex-col items-center">
        <Image src="/hoobe-icon.png" alt="hoobe Logo" width={100} height={24} priority />
        <h1 className="mt-10">Create your hoo.be</h1>
        <a href="/" className="mt-10 text-primary">
          Back
        </a>
      </div>
    </main>
  );
};

export default CreateHoobe;

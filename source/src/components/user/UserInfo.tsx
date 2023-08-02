import Image from 'next/image';
import { getSocialNameFromLink } from 'utils/getSocialNameFromLink';

interface IProps {
  user: User;
  userSocialPlatform: UserSocialPlatform[];
}

export default function UserInfo({ user, userSocialPlatform }: IProps) {
  const renderSocialButton = (social: UserSocialPlatform) => {
    const socialName = getSocialNameFromLink(social.link);
    if (!socialName) return null;

    return (
      <div
        key={social.altId}
        className="rounded-full bg-black p-2 mx-1 hover:scale-110 duration-300 ease-in-out"
      >
        <a href={social.link} className="text-white">
          <Image src={`/${socialName}.svg`} alt="socialName Logo" width={24} height={24} priority />
        </a>
      </div>
    );
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <Image src="/hoobe-icon.png" alt="hoobe Logo" width={100} height={24} priority />
      <p className="pt-5">{user.fullName}</p>
      <div className="flex mt-5">
        {userSocialPlatform.map((social: UserSocialPlatform) => renderSocialButton(social))}
      </div>
    </div>
  );
}

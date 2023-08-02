import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';
import ImageCard from 'components/ImageCard/ImageCard';

interface IProps {
  content: Content[];
}

export default function UserContent({ content }: IProps) {
  const renderContentItem = (item: Content) => {
    if (item.content.hasPhoto) {
      return (
        <ImageCard key={item.content.id} link={item.content.link} title={item.content.title} />
      );
    }

    if (item.content.isEmbedEnabled) {
      return (
        <div
          key={item.content.id}
          className="mt-4 max-w-lg w-full h-72 rounded-xl hover:scale-105 duration-300 ease-in-out"
        >
          <YoutubeEmbed link="https://www.youtube.com/embed/videoseries?list=UUvd_AUR6ErsRblEWHrCxlDQ&enablejsapi=1&autoplay=0&playsinline=1" />
        </div>
      );
    }

    return <div key={item.content.id}></div>;
  };

  return (
    <div className="flex justify-center flex-col items-center mt-10">
      {content.map((item: Content) => renderContentItem(item))}
    </div>
  );
}

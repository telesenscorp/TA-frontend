import Image from "./Image";

export default function Slide({ image, name, to }: { image: string; name: string; to: string }) {
  const handleClick = (link: string) => {
    window.open(link);
  };
  return (
    <div className="image-box" onClick={() => handleClick(to)}>
      <Image image={image} alt={name} />
    </div>
  );
}

import Button from "./Button";
import Card from "./Card";
import IconButton from "./IconButton";
import Text from "./Text";
interface Props extends Content.Course {
  bg: string;
  mobile?: boolean;
}
function CourseCard({ tag, title, desc, action, bg, mobile }: Props) {
  return (
    <Card bgw className={`shadow-${bg}`}>
      <div className={`course-tag border-${tag.color}`}>
        <Text {...tag}>{tag.text}</Text>
      </div>
      <Text {...title}>{title.text}</Text>
      <div className="goodies g10">
        <Text {...desc}>{desc?.text}</Text>
        {mobile ? (
          <IconButton {...action}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8867 13L12 18L9.11322 13L11.5 13L11.5 6L12.5 6L12.5 13L14.8867 13Z"
                fill={`var(--${action.bg})`}
              />
            </svg>
          </IconButton>
        ) : (
          <Button {...action} compact />
        )}
      </div>
    </Card>
  );
}
export default CourseCard;

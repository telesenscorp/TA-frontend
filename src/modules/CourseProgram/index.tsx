import { storeSelector } from "../../config/redux";
import Main from "./CourseProgram.main";
import Mobile from "./CourseProgram.mobile";
interface Props extends Content.CourseProgram {}
const modifyProps = (props: Props) => {
  let modified: Gen.O = {};
  const visible: Content.Program[] = props.list.filter((v) => !v.parentId);
  props.list.forEach((v) => {
    if (v.parentId) {
      modified[v.parentId] ? modified[v.parentId].push(v) : (modified[v.parentId] = [v]);
    }
  });
  const ids = Object.keys(modified);
  return { ...props, list: visible.map((v) => (v.Id && ids.includes(v.Id) ? { ...v, list: modified[v.Id] } : v)) } as Props;
};
function CourseProgram(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...modifyProps(props)} /> : <Main {...modifyProps(props)} />;
}
export default CourseProgram;

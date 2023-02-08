import { storeSelector } from "../../config/redux";
import Main from "./ContactForm.main";
import Mobile from "./ContactForm.mobile";
interface Props extends Content.ContactForm {
  Id?: string;
  promptTitle?: Content.Text;
  promptMessage?: Content.Text;
}
function ContactForm(props: Props) {
  const { isMobile, mobileBrowser } = storeSelector(({ layout }) => layout);
  return isMobile && mobileBrowser ? <Mobile {...props} /> : <Main {...props} />;
}
export default ContactForm;

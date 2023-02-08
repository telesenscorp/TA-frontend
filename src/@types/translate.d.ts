declare namespace Translate {
  type Fields = {
    [key in FieldsKey]: Field;
  };
  type Language = "en" | "ua";
  type Field = { [key in Language]: string };
  type FieldsKey =
    | "placeholderName"
    | "placeholderEmail"
    | "placeholderPhone"
    | "placeholderUsername"
    | "placeholderPromo"
    | "placeholderCourse"
    | "placeholderFullName"
    | "placeholderComment"
    | "placeholderTeacher"
    | "btnSend"
    | "btnMore"
    | "errorRequired"
    | "errorEmail"
    | "errorPhone"
    | "errorMax128"
    | "defaultError"
    | "backToSelect"
    | "backToHome"
    | "errorPromo"
    | "copied"
    | "errorMax2000"
    | "backToCourse";
}

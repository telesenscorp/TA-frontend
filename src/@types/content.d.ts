declare namespace Content {
  interface Empty {
    bg: Mapper.Colors;
  }
  interface Peach {
    anchor?: string;
    visible?: boolean;
  }
  interface Image {
    image: string;
    name: string;
    to: string;
    width?: number;
    height?: number;
  }
  interface Double {
    bg: Mapper.Colors;
    bgTop: Mapper.Colors;
    percentage: number;
    percentage1440: number;
  }
  interface Link extends Partial<Text> {
    to: string;
    parent?: string;
  }
  interface Text {
    text: string;
    size: number;
    color: Mapper.Colors;
    type: keyof Classes.FontType;
    align: "center" | "left" | "right";
  }
  interface Button extends Text, Empty {
    to?: string;
    icon?: ReactElement;
  }
  interface ScheduleCard {
    tag: Text;
    title: Text;
    date: Text;
    duration: Text;
    count: Text;
    desc: Text;
    action: Button;
  }
  interface Block {
    title: Text;
    desc: Text;
  }
  interface Course {
    tag: Text;
    title: Text;
    desc: Text;
    action: Button;
  }
  interface Review {
    author: Text;
    authorLabel: Text;
    teacherLabel: Text;
    text: Text;
    teacher: Text;
  }
  interface Program extends Block {
    Id: string;
    parentId: string;
    status: Text;
    count: Text;
    duration: Text;
    list?: Program[];
  }
  interface CourseModule extends Block {
    status: Text;
    count: Text;
    duration: Text;
    list: Block[];
  }
  interface Header extends Peach {
    list: Link[];
  }
  interface About extends Block, Double, Peach {}
  interface Gallery extends Empty, Peach {
    listTitle: Text;
    list: Image[];
  }
  interface Reviews extends Block, Double, Peach {
    listTitle: Text;
    action: Button;
    list: Review[];
  }
  interface Hero extends Block, Double, Peach {
    action: Button;
  }
  interface Counter extends Empty, Peach {
    list: Block[];
  }
  interface Courses extends Block, Double, Peach {
    listTitle: Text;
    list: Course[];
  }
  interface Schedule extends Block, Double, Peach {
    timetableTag: Text;
    timetableTitle: Text;
    timetableDesc: Text;
    list: ScheduleCard[];
  }
  interface Graduates extends Block, Double, Peach {
    listTitle: Text;
    list: Image[];
    gridTitle: Text;
  }
  interface ContactForm extends Block, Empty, Peach {
    privacyPolicy: Text;
    secretTitle: Text;
    secretDesc: Text;
    code: Text;
  }
  interface Footer extends Block, Empty, Peach {}
  interface WhyUs extends Block, Empty, Peach {
    listTitle: Text;
    list: Block[];
  }
  interface CourseProgram extends Block, Double, Peach {
    list: Program[];
  }
  interface PriceFull extends Text {
    startDate: string;
    stock: string;
  }
  interface PricePartial extends PriceFull {
    instalmentPrice: string;
    instalmentCount: string;
  }
  interface PriceBlock {
    title: Partial<PricePartial>;
    desc: Text;
    count: Text;
  }
  interface ChangeProfession extends Block, Double, Peach {
    Id: string;
    priceTitle: PriceFull;
    priceDesc: Text;
    pricePartialTitle: PricePartial;
    pricePartialDesc: Text;
    instalmentCountDesc: Text;
    action: Button;
    proposalText1: Text;
    proposalText2: Text;
    payFull: Button;
    payFullTitle: Text;
    payFullDesc: Text;
    payPartial: Button;
    payPartialTitle: Text;
    payPartialDesc: Text;
    notReadyTitle: Text;
    notReadyButton: Button;
    codeForDiscount: string;
    privacyPolicy: Text;
  }
  interface Teacher extends Block, Double, Peach {
    subTitle: Text;
    image: Image;
  }
  interface PaySuccess extends Empty, Peach, Block {
    contactTitle: Text;
    phonesList: Link[];
    action: Button;
  }
  interface PayFailure extends PaySuccess {}
  interface NotFound extends Peach, Block {
    action: Button;
  }
  type Name =
    | "Header"
    | "Hero"
    | "About"
    | "Block"
    | "Double"
    | "ContactForm"
    | "Counter"
    | "Courses"
    | "Footer"
    | "Gallery"
    | "Graduates"
    | "Reviews"
    | "Schedule"
    | "WhyUs"
    | "CourseProgram"
    | "ChangeProfession"
    | "Teacher"
    | "TextBlock"
    | "PaySuccess"
    | "PayFailure"
    | "NotFound";
}

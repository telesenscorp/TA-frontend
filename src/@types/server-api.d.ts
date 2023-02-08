declare namespace ServerAPI {
  //Get
  interface G {
    [key: string]: any;
  }
  //Update
  interface U {
    [key: string]: any;
  }
  //Delete
  interface D {
    [key: string]: any;
  }
  //Put
  interface P {
    [key: string]: string;
  }
  //Get Comb Routes
  type GCR =
    | "userId"
    | "contentId"
    | "postId"
    | "postById"
    | "productId"
    | "receiptId"
    | "receiptById"
    | "cartId"
    | "mailBy"
    | "ping"
    | "analytics";
  //Get Routes
  type GR =
    | "content"
    | "allUsers"
    | "allPosts"
    | "allFiles"
    | "allMails"
    | "allBackups"
    | "allPostmen"
    | "allAnalytics"
    | "allProducts"
    | "allReceipts"
    | "allCarts"
    | "storeSetup"
    | "analyticsToday"
    | "analyticsThisWeek"
    | "analyticsThisMonth";
  //Update Comb Routes
  type UCR =
    | "userId"
    | "postId"
    | "mailId"
    | "contentId"
    | "receiptId"
    | "cartDetailsId"
    | "cartProductId"
    | "productId"
    | "cartDetailsInstalmentId"
    | "cartDetailsPromoId";
  //Delete Comb Routes
  type DCR =
    | "userId"
    | "allContent"
    | "contentId"
    | "allPosts"
    | "postId"
    | "allMails"
    | "mailId"
    | "fileId"
    | "postmanId"
    | "productId"
    | "receiptId"
    | "cartId";
  //Post Comb Routes
  type PCR = "userId" | "postmanId";
  //Post Routes
  type PR =
    | "login"
    | "first"
    | "refresh"
    | "createUser"
    | "createPost"
    | "createMail"
    | "createContent"
    | "files"
    | "filesBulk"
    | "filesBulkStrict"
    | "filesBackup"
    | "whoAmI"
    | "createPostman"
    | "createPosts"
    | "createContents"
    | "createProduct"
    | "createReceipt"
    | "createCart"
    | "storeSetup"
    | "createEvent"
    | "addToSheet"
    | "updateToSheet";
  //File Request
  type FileReq = <T = unknown>(i: any, s?: (v: T) => void, f?: (v: any) => void, o?: any) => Promise<T | null>;
  //Get Request
  type GetReq = <T = unknown>(k: GR | [GCR, string | number], s?: (v: T) => void, f?: (v: any) => void, o?: any) => Promise<T | null>;
  //Put Request
  type PutReq = <T = unknown>(k: [UCR, string | number], i: any, s?: (v: T) => void, f?: (v: any) => void, o?: any) => Promise<T | null>;
  //Del Request
  type DelReq = <T = unknown>(k: [DCR, string | number], s?: (v: T) => void, f?: (v: any) => void, o?: any) => Promise<T | null>;
  //Post Request
  type PostReq = <T = unknown>(
    k: PR | [PCR, string | number],
    i: any,
    s?: (v: T) => void,
    f?: (v: any) => void,
    o?: any
  ) => Promise<T | null>;
  type Setup = (t: string, f?: boolean) => void;

  //Open Request
  type OpenReq = <T = unknown>(k: string, i: any, s?: (v: T) => void, f?: (v: any) => void, o?: any) => Promise<T | null>;
}
declare namespace ServerRes {
  interface content {
    content: string;
    id: number;
    language: string;
    route: string;
  }
  interface info {
    ip: string;
    city: string;
    region: string;
    country: string;
    loc: string;
    org: string;
    postal: string;
    timezone: string;
  }
  interface Id {
    id: number | string;
  }
  interface message {
    message: string;
  }
  interface Analytic {
    ip: number;
    event: string;
    type: string;
    browser: string;
    mode: string;
    locale: string;
    location: string;
    created: string;
  }
}

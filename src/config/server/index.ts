import Axios from "axios";
import { API_URL } from "../../common/constants";
const Routes = {
  get: {
    ping: "ping",
    content: "content",
    allUsers: "auth/users/all",
    allPosts: "posts/all",
    allFiles: "files/all",
    allMails: "mails/all",
    allBackups: "backup/all",
    allAnalytics: "analytics/all",
    analyticsToday: "analytics/today",
    analyticsThisWeek: "analytics/this-week",
    analyticsThisMonth: "analytics/this-month",
    userId: "auth/users",
    contentId: "content",
    postId: "posts/id",
    postById: "posts/post-id",
    allProducts: "product/all",
    productId: "product/single",
    allReceipts: "receipt/all",
    receiptId: "receipt/id",
    receiptById: "receipt/order",
    allCarts: "cart/all",
    cartId: "cart/order",
    mailBy: "mails/by-type",
    allPostmen: "mails/all-postmen",
    storeSetup: "cart/store-setup",
    analytics: "analytics",
  },
  post: {
    login: "auth/login",
    first: "content/first",
    refresh: "auth/refresh",
    createUser: "auth/register",
    createPost: "posts/create",
    createMail: "mails/create",
    createContent: "content/create",
    files: "files",
    filesBulk: "files/bulk",
    filesBulkStrict: "files/bulk-strict",
    filesBackup: "files/backup",
    whoAmI: "auth/who-am-i",
    createPosts: "posts/bulk-create",
    createPostman: "mails/create-postman",
    createContents: "content/bulk-create",
    createEvent: "analytics/create-event",
    userId: "auth/users",
    createProduct: "product/create",
    createReceipt: "receipt/create",
    createCart: "cart/create",
    storeSetup: "cart/store-setup",
    postmanId: "mails/edit-postman",
    addToSheet: "sheets/add",
    updateToSheet: "sheets/update",
  },
  del: {
    userId: "auth/users",
    allContent: "content/all",
    contentId: "content/single",
    allPosts: "posts/all",
    postId: "posts/single",
    allMails: "mails/all",
    mailId: "mails/single",
    fileId: "files/single",
    productId: "product/single",
    receiptId: "receipt",
    cartId: "cart/order",
    postmanId: "mails/delete-postman",
  },
  put: {
    userId: "auth/users",
    postId: "posts",
    mailId: "mails",
    contentId: "content",
    productId: "product/single",
    receiptId: "receipt",
    cartDetailsId: "cart/order-details",
    cartDetailsInstalmentId: "cart/order-product-instalment",
    cartDetailsPromoId: "cart/order-product-promo",
    cartProductId: "cart/order-product",
  },
};
export const api = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const openApi = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const OpenPost: ServerAPI.OpenReq = async (route, input, fn = () => {}, fail = () => {}, opt) => {
  try {
    const { data, status } = await openApi.post(route, input, opt);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

export const Get: ServerAPI.GetReq = async (key, fn = () => {}, fail = () => {}) => {
  try {
    const route = typeof key === "string" ? Routes.get[key] : [Routes.get[key[0]], key[1]].join("/");
    const { data, status } = await api.get(route);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

export const Post: ServerAPI.PostReq = async (key, input, fn = () => {}, fail = () => {}, opt) => {
  try {
    const route = typeof key === "string" ? Routes.post[key] : [Routes.post[key[0]], key[1]].join("/");
    const { data, status } = await api.post(route, input, opt);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

export const Put: ServerAPI.PutReq = async ([key, Id], input, fn = () => {}, fail = () => {}) => {
  try {
    const { data, status } = await api.put([Routes.put[key], Id].join("/"), input);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

export const Del: ServerAPI.DelReq = async ([key, Id], fn = () => {}, fail = () => {}) => {
  try {
    const { data, status } = await api.delete([Routes.del[key], Id].join("/"));
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

export const Upload: ServerAPI.FileReq = async (input, fn = () => {}, fail = () => {}, opt) => {
  try {
    const buffer = new FormData();
    buffer.append("file", input);
    const { data, status } = await api.post(Routes.post.files, buffer, opt);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

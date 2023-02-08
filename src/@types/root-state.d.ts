declare namespace States {
  interface Section {
    section: Content.Name;
    props: Gen.O;
    override: Gen.O;
  }
  type SavedSection = {
    [Property in Content.Name]: Section;
  };
  interface CartInfo {
    id: string;
    clientName?: string;
    clientPhone?: string;
    clientEmail?: string;
    clientSocialMediaID?: string;
    orderStatus?: "Abandoned" | "Pending" | "Fulfilled" | "Cancelled";
    partial?: boolean;
    promo?: string;
  }
  interface CartData {
    data: string;
    url: string;
    signature: string;
  }
  type EmptyCart = CartInfo & CartData;
  interface cart {
    loading: boolean;
    requester: string;
    cart: EmptyCart;
  }
  interface auth {
    id: string;
    apiNotification: boolean;
    username: string;
    email: string;
    role: string;
    accessToken: string;
    refreshToken: string;
    gallery: any[];
    posts: any[];
    mails: any[];
    logged: boolean;
    toggleToEdit: boolean;
  }
  interface layout {
    language: Translate.Language;
    content: {
      routes: { route: string; id: number }[];
      pages: {
        [key: string]: Section[];
      };
    };
    user: {
      ip: string;
      locale: string;
      location: string;
    };
    savedSection: Partial<SavedSection>;
    savedPage: Partial<SavedSection>[];
    loaded: boolean;
    screenWidth: number;
    homeId: number;
    mails: any[];
    isFull: boolean;
    isWide: boolean;
    isTablet: boolean;
    isMobile: boolean;
    mobileBrowser: boolean;
    widthType: string;
    visible: boolean;
    hiddenHeader: boolean;
  }
  interface events {
    id: string;
    listener: string;
    active: boolean;
    read: boolean;
    value: any | null;
  }
  interface ShopSettings {
    version: number;
    action: string;
    language: string;
    currency: string;
    result_url: string;
    server_url: string;
  }
  interface ShopProduct {
    id: number;
    name: string;
    price: number;
    stock: number;
    instalmentPrice: number;
    instalmentCount: number;
    promotedPrice: number;
    type: string;
    status: "Active" | "Disabled" | "Archived";
    startDate: string;
  }
  interface ShopCart {
    id: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    clientSocialMediaID: string;
    orderStatus: "Abandoned" | "Pending" | "Fulfilled" | "Cancelled";
    product: ShopProducts;
  }
  interface ShopReceipt {
    id: number;
    order_id: string;
    action: string;
    amount: number;
    create_date: string;
    completion_date: string;
    currency: string;
    err_code: string;
    err_description: string;
    ip: string;
    sender_card_bank: string;
    sender_card_country: string;
    sender_card_mask2: string;
    sender_card_type: string;
    sender_commission: number;
    sender_first_name: string;
    sender_last_name: string;
    sender_phone: string;
    status: string;
  }
  type ShopPayload<T> = {
    index: number;
    value: never;
    key: keyof T;
  };
  type SPR = ShopPayload<ShopReceipt>;
  type SPC = ShopPayload<ShopCart>;
  type SPP = ShopPayload<ShopProduct>;
  interface shop {
    settings: ShopSettings;
    products: ShopProduct[];
    carts: ShopCart[];
    receipts: ShopReceipt[];
    timestamp: number;
  }
  type shopKeys = keyof shop;
  interface user {
    ip: string;
    locale: string;
    location: string;
  }
}

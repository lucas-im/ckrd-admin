// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    token: string;
    refreshToken: string;
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo;
}

/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface Route {
    /** 动态路由 */
    routes: AuthRoute.Route[];
    /** 路由首页对应的key */
    home: AuthRoute.RouteKey;
  }
}

declare namespace ApiDemo {
  interface DataWithAdapter {
    dataId: string;
    dataName: string;
  }
}

interface Transaction {
  userId: string;
  type: 'buy' | 'sell';
  network: string;
  exchange_rate: number;
  usd_amount: number;
  usdt_amount: number;
  wallet_address: string;
}

interface TimeStamp {
  seconds: number;
  nanoseconds: number;
}

declare namespace ApiUserManagement {
  interface UserTable {
    id: string;
    firstName: string;
    lastName: string;
    isPRO: boolean;
    isPending: boolean;
    phone_no: number;
    referralCode: number | null;
    referrals: number;
    expiryDate: string | null;
    countryCode: string | null;
    newItems: boolean | null;
    buy: Transaction | null;
    sell: Transaction | null;
  }

  interface PremiumRequestTable {
    userId: string;
    status: boolean;
    refferedBy: string;
  }
}

declare namespace ApiManagement {
  interface BuyAndSell {
    id: string;
    userId: string;
    type: 'buy' | 'sell';
    network: string;
    exchange_rate: number;
    usd_amount: number;
    usdt_amount: number;
    wallet_address: string;
    isProcessed: boolean;
    signature: string;
    idImage: string;
    signImage: string;
    date: TimeStamp;
    first_name: string;
    last_name: string;
    phone_no: number;
    commission: number;
    commission_percentage: number;
  }

  interface DocumentUpload {
    url: string;
  }

  interface UpdateDocument {
    result: boolean;
  }

  interface UpdateBuyAndSellProcessed {
    isProcessed: boolean;
  }

  interface GetReport {
    buyAmount: number;
    sellAmount: number;
    commission: number;
    premium_subscription: number;
    total_revenue: number;
  }

  interface GetStatistics {
    total_users: number;
    total_premium_users: number;
    total_former_premium_users: number;
    total_never_premium_users: number;
  }
}

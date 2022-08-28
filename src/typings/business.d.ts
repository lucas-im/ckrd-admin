/** 用户相关模块 */
declare namespace Auth {
  /**
   * 用户角色类型(前端静态路由用角色类型进行路由权限的控制)
   * - super: 超级管理员(该权限具有所有路由数据)
   * - admin: 管理员
   * - user: 用户
   * - custom: 自定义角色
   */
  type RoleType = keyof typeof import('@/enum').EnumUserRole;

  /** 用户信息 */
  interface UserInfo {
    /** 用户id */
    userId: string;
    /** 用户名 */
    userName: string;
    /** 用户角色类型 */
    userRole: RoleType;
  }
}

declare namespace Demo {
  interface DataWithAdapter {
    id: string;
    name: string;
  }
}

/** 系统消息 */
declare namespace Message {
  interface Tab {
    /** tab的key */
    key: number;
    /** tab名称 */
    name: string;
    /** badge类型 */
    badgeProps?: import('naive-ui').BadgeProps;
    /** 消息数据 */
    list: List[];
  }

  interface List {
    /** 数据唯一值 */
    id: number;
    /** 头像 */
    avatar?: string;
    /** 消息icon */
    icon?: string;
    svgIcon?: string;
    /** 消息标题 */
    title: string;
    /** 消息发送时间 */
    date?: string;
    /** 消息是否已读 */
    isRead?: boolean;
    /** 消息描述 */
    description?: string;
    /** 标签名称 */
    tagTitle?: string;
    /** 标签props */
    tagProps?: import('naive-ui').TagProps;
  }
}

/** 用户管理 */
declare namespace UserManagement {
  /** 用户表格 */
  interface UserTable {
    id: string;
    countryCode: string;
    expiryDate: string;
    first_name: string;
    last_name: string;
    isPRO: boolean;
    isPending: boolean;
    newItems: boolean;
    phone_no: number;
    referralCode: number;
    referrals: number;
  }
  interface PremiumRequestTable {
    userId: string;
    status: boolean;
    refferedBy: string;
  }
}

declare namespace Management {
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
}

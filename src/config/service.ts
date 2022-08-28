/** 请求超时时间 */
export const REQUEST_TIMEOUT = 60 * 1000;

/** 错误信息的显示时间 */
export const ERROR_MSG_DURATION = 3 * 1000;

/** 默认的请求错误code */
export const DEFAULT_REQUEST_ERROR_CODE = 'DEFAULT';

/** 默认的请求错误文本 */
export const DEFAULT_REQUEST_ERROR_MSG = '请求错误~';

/** 请求超时的错误code(为固定值：ECONNABORTED) */
export const REQUEST_TIMEOUT_CODE = 'ECONNABORTED';

/** 请求超时的错误文本 */
export const REQUEST_TIMEOUT_MSG = '请求超时~';

/** 网络不可用的code */
export const NETWORK_ERROR_CODE = 'NETWORK_ERROR';

/** 网络不可用的错误文本 */
export const NETWORK_ERROR_MSG = '网络不可用~';

/** 请求不成功各种状态的错误 */
export const ERROR_STATUS = {
  400: '400: Bad Request',
  401: '401: Unauthorized',
  403: '403: Forbidden',
  404: '404: Not Found',
  405: '405: Method Not Allowed',
  408: '408: Request Timeout',
  500: '500: Internal Server Error',
  501: '501: Not Implemented',
  502: '502: Bad Gateway',
  503: '503: Service Unavailable',
  504: '504: Gateway Timeout',
  505: '505: HTTP Version Not Supported',
  [DEFAULT_REQUEST_ERROR_CODE]: DEFAULT_REQUEST_ERROR_MSG
};

/** 不弹出错误信息的code */
export const NO_ERROR_MSG_CODE: (string | number)[] = [];

/** token失效需要刷新token的code(这里的66666只是个例子，需要将后端表示token过期的code填进来) */
export const REFRESH_TOKEN_CODE: (string | number)[] = [66666];

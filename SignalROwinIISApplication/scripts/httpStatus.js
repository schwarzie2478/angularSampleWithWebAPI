 /**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * and RFC2518 (WebDAV) are supported.
 *
 * Based on the org.apache.commons.httpclient.HttpStatus Java API.
 *
 * Ported by Bryce Neal.
 */

var statusCodes = {};

statusCodes.ACCEPTED = 202;
statusCodes.BAD_GATEWAY = 502;
statusCodes.BAD_REQUEST = 400;
statusCodes.CONFLICT = 409;
statusCodes.CONTINUE = 100;
statusCodes.CREATED = 201;
statusCodes.EXPECTATION_FAILED = 417;
statusCodes.FAILED_DEPENDENCY = 424;
statusCodes.FORBIDDEN = 403;
statusCodes.GATEWAY_TIMEOUT = 504;
statusCodes.GONE = 410;
statusCodes.HTTP_VERSION_NOT_SUPPORTED = 505;
statusCodes.INSUFFICIENT_SPACE_ON_RESOURCE = 419;
statusCodes.INSUFFICIENT_STORAGE = 507;
statusCodes.INTERNAL_SERVER_ERROR = 500;
statusCodes.LENGTH_REQUIRED = 411;
statusCodes.LOCKED = 423;
statusCodes.METHOD_FAILURE = 420;
statusCodes.METHOD_NOT_ALLOWED = 405;
statusCodes.MOVED_PERMANENTLY = 301;
statusCodes.MOVED_TEMPORARILY = 302;
statusCodes.MULTI_STATUS = 207;
statusCodes.MULTIPLE_CHOICES = 300;
statusCodes.NETWORK_AUTHENTICATION_REQUIRED = 511;
statusCodes.NO_CONTENT = 204;
statusCodes.NON_AUTHORITATIVE_INFORMATION = 203;
statusCodes.NOT_ACCEPTABLE = 406;
statusCodes.NOT_FOUND = 404;
statusCodes.NOT_IMPLEMENTED = 501;
statusCodes.NOT_MODIFIED = 304;
statusCodes.OK = 200;
statusCodes.PARTIAL_CONTENT = 206;
statusCodes.PAYMENT_REQUIRED = 402;
statusCodes.PRECONDITION_FAILED = 412;
statusCodes.PRECONDITION_REQUIRED = 428;
statusCodes.PROCESSING = 102;
statusCodes.PROXY_AUTHENTICATION_REQUIRED = 407;
statusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
statusCodes.REQUEST_TIMEOUT = 408;
statusCodes.REQUEST_TOO_LONG = 413;
statusCodes.REQUEST_URI_TOO_LONG = 414;
statusCodes.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
statusCodes.RESET_CONTENT = 205;
statusCodes.SEE_OTHER = 303;
statusCodes.SERVICE_UNAVAILABLE = 503;
statusCodes.SWITCHING_PROTOCOLS = 101;
statusCodes.TEMPORARY_REDIRECT = 307;
statusCodes.TOO_MANY_REQUESTS = 429;
statusCodes.UNAUTHORIZED = 401;
statusCodes.UNPROCESSABLE_ENTITY = 422;
statusCodes.UNSUPPORTED_MEDIA_TYPE = 415;
statusCodes.USE_PROXY = 305;

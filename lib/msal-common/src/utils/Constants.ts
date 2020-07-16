/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
export const Constants = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // Prefix for all library cache entries
    CACHE_PREFIX: "msal",
    // Prefix for storing throttling entries
    THROTTLE_PREFIX: "throttle",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    // ADFS String
    ADFS: "adfs",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    // Default response type for authorization code flow
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    // Default time to throttle RequestThumbprint in milliseconds
    DEFAULT_THROTTLE_TIME_MS: 120000,
    DEFAULT_MAX_THROTTLE_TIME_MS: 3600000
};

/**
 * Request header names
 */
export enum HeaderNames {
    CONTENT_TYPE = "Content-Type",
    RETRY_AFTER = "Retry-After",
    X_MS_LIB_CAPABILITY = "x-ms-lib-capability",
    X_MS_LIB_CAPABILITY_VALUE = "retry-after, h429"
}

/**
 * Persistent cache keys MSAL which stay while user is logged in.
 */
export enum PersistentCacheKeys {
    ID_TOKEN = "idtoken",
    CLIENT_INFO = "client.info",
    ADAL_ID_TOKEN = "adal.idtoken",
    ERROR = "error",
    ERROR_DESC = "error.description"
}

/**
 * String constants related to AAD Authority
 */
export enum AADAuthorityConstants {
    COMMON = "common",
    ORGANIZATIONS = "organizations",
    CONSUMERS = "consumers"
}

/**
 * Keys in the hashParams sent by AAD Server
 */
export enum AADServerParamKeys {
    CLIENT_ID = "client_id",
    REDIRECT_URI = "redirect_uri",
    RESPONSE_TYPE = "response_type",
    RESPONSE_MODE = "response_mode",
    GRANT_TYPE = "grant_type",
    CLAIMS = "claims",
    SCOPE = "scope",
    ERROR = "error",
    ERROR_DESCRIPTION = "error_description",
    ACCESS_TOKEN = "access_token",
    ID_TOKEN = "id_token",
    REFRESH_TOKEN = "refresh_token",
    EXPIRES_IN = "expires_in",
    STATE = "state",
    NONCE = "nonce",
    PROMPT = "prompt",
    SESSION_STATE = "session_state",
    CLIENT_INFO = "client_info",
    CODE = "code",
    CODE_CHALLENGE = "code_challenge",
    CODE_CHALLENGE_METHOD = "code_challenge_method",
    CODE_VERIFIER = "code_verifier",
    CLIENT_REQUEST_ID = "client-request-id",
    X_CLIENT_SKU = "x-client-SKU",
    X_CLIENT_VER = "x-client-VER",
    X_CLIENT_OS = "x-client-OS",
    X_CLIENT_CPU = "x-client-CPU",
    POST_LOGOUT_URI = "post_logout_redirect_uri",
    DEVICE_CODE = "device_code"
}

/**
 * IdToken claim string constants
 */
export enum IdTokenClaimName {
    ISSUER = "iss",
    OBJID = "oid",
    SUBJECT = "sub",
    TENANTID = "tid",
    VERSION = "ver",
    PREF_USERNAME = "preferred_username",
    NAME = "name",
    NONCE = "nonce",
    EXPIRATION = "exp",
    HOME_OBJID = "home_oid",
    SESSIONID = "sid",
    CLOUD_INSTANCE_HOSTNAME = "cloud_instance_host_name"
}

/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 */
export const PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};

/**
 * SSO Types - generated to populate hints
 */
export enum SSOTypes {
    ACCOUNT = "account",
    SID = "sid",
    LOGIN_HINT = "login_hint",
    ID_TOKEN = "id_token",
    DOMAIN_HINT = "domain_hint",
    ORGANIZATIONS = "organizations",
    CONSUMERS = "consumers",
    ACCOUNT_ID = "accountIdentifier",
    HOMEACCOUNT_ID = "homeAccountIdentifier"
}

/**
 * Disallowed extra query parameters.
 */
export const BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];

/**
 * allowed values for codeVerifier
 */
export const CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
};

/**
 * The method used to encode the code verifier for the code challenge parameter. can be one
 * of plain or s256. if excluded, code challenge is assumed to be plaintext. for more
 * information, see the pkce rcf: https://tools.ietf.org/html/rfc7636
 */
export const CodeChallengeMethodValuesArray: string[] = [
    CodeChallengeMethodValues.PLAIN,
    CodeChallengeMethodValues.S256
];

/**
 * allowed values for response_mode
 */
export enum ResponseMode {
    QUERY = "query",
    FRAGMENT = "fragment",
    FORM_POST = "form_post"
}

/**
 * allowed grant_type
 */
export enum GrantType {
    IMPLICIT_GRANT = "implicit",
    AUTHORIZATION_CODE_GRANT = "authorization_code",
    CLIENT_CREDENTIALS_GRANT = "client_credentials",
    RESOURCE_OWNER_PASSWORD_GRANT = "password",
    REFRESH_TOKEN_GRANT = "refresh_token",
    DEVICE_CODE_GRANT = "device_code"
}

/**
 * Account types in Cache
 */
export enum CacheAccountType {
    MSSTS_ACCOUNT_TYPE = "MSSTS",
    ADFS_ACCOUNT_TYPE = "ADFS",
    MSAV1_ACCOUNT_TYPE = "MSA",
    GENERIC_ACCOUNT_TYPE = "Generic" // NTLM, Kerberos, FBA, Basic etc
}

/**
 * Separators used in cache
 */
export enum Separators {
    CACHE_KEY_SEPARATOR = "-",
    CLIENT_INFO_SEPARATOR = "."
}

/**
 * Credentail Type stored in the cache
 */
export enum CredentialType {
    ID_TOKEN = "IdToken",
    ACCESS_TOKEN = "AccessToken",
    REFRESH_TOKEN = "RefreshToken",
}

/**
 * Credentail Type stored in the cache
 */
export enum CacheSchemaType {
    ACCOUNT = "Account",
    CREDENTIAL = "Credential",
    APP_META_DATA = "AppMetadata",
    TEMPORARY = "TempCache"
}

/**
 * Combine all cache types
 */
export enum CacheType {
    ADFS = 1001,
    MSA = 1002,
    MSSTS = 1003,
    GENERIC = 1004,
    ACCESS_TOKEN = 2001,
    REFRESH_TOKEN = 2002,
    ID_TOKEN = 2003,
    APP_META_DATA = 3001
};

/**
 * More Cache related constants
 */
export const APP_META_DATA = "appmetadata";
export const ClientInfo = "client_info";

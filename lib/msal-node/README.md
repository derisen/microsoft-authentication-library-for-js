# Microsoft Authentication Library for Node (msal-node)

[![npm version](https://img.shields.io/npm/v/@azure/msal-node.svg?style=flat)](https://www.npmjs.com/package/@azure/msal-node/)[![npm version](https://img.shields.io/npm/dm/@azure/msal-node.svg)](https://nodei.co/npm/@azure/msal-node/)[![Coverage Status](https://coveralls.io/repos/github/AzureAD/microsoft-authentication-library-for-js/badge.svg?branch=dev)](https://coveralls.io/github/AzureAD/microsoft-authentication-library-for-js?branch=dev)

| <a href="https://docs.microsoft.com/azure/active-directory/develop/guidedsetups/active-directory-javascriptspa" target="_blank">Getting Started</a> | <a href="https://aka.ms/aaddevv2" target="_blank">AAD Docs</a> | <a href="https://azuread.github.io/microsoft-authentication-library-for-js/ref/msal-node/" target="_blank">Library Reference</a> |
| --- | --- | --- |

Currently `msal-node` is under development, please track the project progress [here](https://github.com/AzureAD/microsoft-authentication-library-for-js/projects/4). This documentation is also in progress and will be changing as we release our `alpha` patches. **We do not recommend using this in a production environment yet**.

1. [About](#about)
2. [FAQ](#faq)
3. [Releases](#releases)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Samples](#samples)
8. [Build Library](#build-and-test)
9. [Security Reporting](#security-reporting)
10. [License](#license)
11. [Code of Conduct](#we-value-and-adhere-to-the-microsoft-open-source-code-of-conduct)

## About

MSAL Node enables applications to authenticate users using [Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview) work and school accounts (AAD), Microsoft personal accounts (MSA) and social identity providers like Facebook, Google, LinkedIn, Microsoft accounts, etc. through [Azure AD B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/active-directory-b2c-overview#identity-providers) service. It also enables your app to get tokens to access [Microsoft Cloud](https://www.microsoft.com/enterprise) services such as [Microsoft Graph](https://graph.microsoft.io).


### OAuth2.0 grant types supported:

The current alpha version supports the following ways of acquiring tokens:

- [Authorization Code Grant](https://oauth.net/2/grant-types/authorization-code/) with [PKCE](https://oauth.net/2/pkce/)
- [Device Code Grant](https://oauth.net/2/grant-types/device-code/)
- [Refresh Token Grant](https://oauth.net/2/grant-types/refresh-token/)
- [Silent Flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-acquire-cache-tokens#acquiring-tokens-silently-from-the-cache)

[Coming Soon] In the upcoming quarters we plan to add support for:

- [Authorization Code Grant (Confidential Client)](https://oauth.net/2/grant-types/authorization-code/)
- [Client Credential Grant](https://oauth.net/2/grant-types/client-credentials/)
- [On-behalf-of flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-on-behalf-of-flow)
- [Integrated Windows Authentication flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-authentication-flows#integrated-windows-authentication)
- [Username and Password flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-authentication-flows#usernamepassword)

More details on different grant types supported by Microsoft authentication libraries in general can be found [here](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-authentication-flows).

### Scenarios supported:

The scenarios supported with this library are:
- Destop app that calls web APIs
- Web app that calls web APIs (upcoming)
- Web APIs that call web APIs (upcoming)
- Daemon apps (upcoming)

More details on scenarios and the authentication flows that map to each of them can be found [here](https://docs.microsoft.com/en-us/azure/active-directory/develop/authentication-flows-app-scenarios).

## FAQ

See [here](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/faq.md).

## Releases

*Expect us to detail our major and minor releases moving forward, while leaving out our patch releases.  Patch release notes can be found in our change log.*

| Date | Release | Announcement | Main features |
| ------| ------- | ---------| --------- |
| July 13th, 2020 (Tentative) | @azure/msal-node v1.0.0-alpha.1 | No release notes yet | Full version of the `@azure/msal-node` package; relies on `@azure/msal-common` v1.0.0 |
| July 6th, 2020  | @azure/msal-node v1.0.0-alpha.0| No release notes yet | Full version of the `@azure/msal-node` package; relies on `@azure/msal-common` v1.0.0-beta.4 |

## Prerequisites

Before using `@azure/msal-node` you will need to register your app in the azure portal to get a valid `clientId` for configuration, and to register the routes that your app will accept redirect traffic on if applicable. Currently we support the below app registrations for `@azure/msal-node`:

- [Desktop app that calls web APIs: App registration](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-desktop-app-registration)

## Installation

### Via NPM:
```javascript
npm install @azure/msal-node
```
##  Usage

### MSAL basics
- [Initialize a Public Client Application](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-public-client-application.md)
- [Configuration](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md)
- [Request](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/request.md)
- [Response](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/response.md)

## Samples
There are multiple [samples](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples) included in the repository that use MSAL Node to acquire tokens. These samples are currently used for manual testing, and are not meant to be a reference of best practices, therefore use judgement and do not blindly copy this code to any production applications.

- [auth-code](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples/auth-code): Express app using OAuth2.0 authorization code flow.
- [device-code](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples/device-code): Command line app using OAuth 2.0 device code flow.
- [refresh-token](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples/refresh-token): Command line app using OAuth 2.0 refresh flow.
- [silent-flow](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples/silent-flow): Express app using OAuth2.0 authorization code flow to acquire a token and store in the token cache, and silent flow to use tokens in the token cache.
- [msal-node-extensions](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-node-extensions): Uses authorization code flow to acquire tokens then the [msal-extensions](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/extensions/msal-node-extensions) library to write the MSAL in-memory token cache to disk.

## Build and Test

- If you don't have [lerna](https://github.com/lerna/lerna) installed, run `npm install -g lerna`
- Run `lerna bootstrap` from anywhere within `microsoft-authentication-library-for-js.git`.
- Navigate to `microsoft-authentication-library-for-js/lib/msal-common` and run `npm run build`
- Navigate to `microsoft-authentication-library-for-js/lib/msal-node` and run `npm run build`

```javascript
// to link msal-node and msal-common packages
lerna bootstrap

// Change to the msal-node package directory
cd lib/msal-common/

// To run build only for node package
npm run build

// Change to the msal-node package directory
cd lib/msal-node/

// To run build only for node package
npm run build
```

### Local Development
Below is a list of commands you will probably find useful:

#### `npm run build:modules:watch`
Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab. The library will be rebuilt if you make edits.

#### `npm run build`
Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

#### `lerna bootstrap`
If you are running the project in development/watch mode, or have made changes in `msal-common` and need them reflecting across the project, please run `lerna bootstrap` to link all the symbols. Please note that `npm install` will unlink all the code, hence it is advised to run `lerna bootstrap` post installation.

#### `npm run lint`
Runs eslint with Prettier

#### `npm test`, `npm run test:coverage`, `npm run test:watch`
Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
Generate code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.

## Security Reporting

If you find a security issue with our libraries or services please report it to [secure@microsoft.com](mailto:secure@microsoft.com) with as much detail as possible. Your submission may be eligible for a bounty through the [Microsoft Bounty](http://aka.ms/bugbounty) program. Please do not post security issues to GitHub Issues or any other public site. We will contact you shortly upon receiving the information. We encourage you to get notifications of when security incidents occur by visiting [this page](https://technet.microsoft.com/security/dd252948) and subscribing to Security Advisory Alerts.

## License

Copyright (c) Microsoft Corporation.  All rights reserved. Licensed under the MIT License.

## We Value and Adhere to the Microsoft Open Source Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.




/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Account object with the following signature:
 * - homeAccountId          - Home account identifier for this account object
 * - environment            - Entity which issued the token represented as a full host of it (e.g. login.microsoftonline.com)
 * - tenantId               - Full tenant or organizational id that this account belongs to
 * - username               - preferred_username claim of the id_token that represents this account
 */
export type AccountInfo = {
    homeAccountId: string;
    environment: string;
    tenantId: string;
    username: string;
};
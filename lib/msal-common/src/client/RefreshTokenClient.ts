/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ClientConfiguration } from "../config/ClientConfiguration";
import { BaseClient } from "./BaseClient";
import { RefreshTokenRequest } from "../request/RefreshTokenRequest";
import { Authority, NetworkResponse } from "..";
import { ServerAuthorizationTokenResponse } from "../server/ServerAuthorizationTokenResponse";
import { RequestParameterBuilder } from "../server/RequestParameterBuilder";
import { ScopeSet } from "../request/ScopeSet";
import { GrantType } from "../utils/Constants";
import { ResponseHandler } from "../response/ResponseHandler";
import { AuthenticationResult } from "../response/AuthenticationResult";
import { NetworkManager } from '../network/NetworkManager';
import { RequestThumbprint } from '../cache/entities/RequestThumbprintEntity';

/**
 * OAuth2.0 refresh token client
 */
export class RefreshTokenClient extends BaseClient {

    constructor(configuration: ClientConfiguration) {
        super(configuration);
    }

    public async acquireToken(request: RefreshTokenRequest): Promise<AuthenticationResult>{
        const response = await this.executeTokenRequest(request, this.authority);

        const responseHandler = new ResponseHandler(
            this.config.authOptions.clientId,
            this.cacheManager,
            this.cryptoUtils,
            this.logger
        );

        responseHandler.validateTokenResponse(response.body);
        const tokenResponse = responseHandler.handleServerTokenResponse(
            response.body,
            this.authority
        );

        return tokenResponse;
    }

    private async executeTokenRequest(request: RefreshTokenRequest, authority: Authority)
        : Promise<NetworkResponse<ServerAuthorizationTokenResponse>> {

        const thumbprint = new RequestThumbprint(/* TODO: fill out */);
        const queryParams = {
            body: this.createTokenRequestBody(request),
            headers: this.createDefaultTokenRequestHeaders()
        };
        
        return this.networkManager.sendPostRequest(
            thumbprint, 
            authority.tokenEndpoint, 
            queryParams,
            false
        );
        // return this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers);
    }

    private createTokenRequestBody(request: RefreshTokenRequest): string {
        const parameterBuilder = new RequestParameterBuilder();

        parameterBuilder.addClientId(this.config.authOptions.clientId);

        const scopeSet = new ScopeSet(request.scopes || []);
        parameterBuilder.addScopes(scopeSet);
        
        parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);

        parameterBuilder.addClientInfo();

        const correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);

        parameterBuilder.addRefreshToken(request.refreshToken);

        return parameterBuilder.createQueryString();
    }
}

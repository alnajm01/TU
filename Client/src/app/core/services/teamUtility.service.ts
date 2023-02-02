import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AfmeEmployeeSearchCritiria } from "src/app/features/search/searchEmployee/models/afmeEmployeeSearchCritiria";
import { env } from "src/environments/env.dev";
import { AfmeEmployee } from "../models/afmeEmployee";
import { AfmeMarket } from "../models/afmeMarket";

@Injectable({
    providedIn: 'root'
})
export class TeamUtilityService {
    private readonly API_URL: string = env.TeamUtilityUrl;
    private readonly MARKET_ROOT = '/Market';
    private readonly EMPLOYEE_ROOT = '/Employee';

    constructor(private http: HttpClient) { }

    searchForEmployees(searchCritiria: AfmeEmployeeSearchCritiria) {
        const params = this.getHttpParams(searchCritiria);
        return this.http.get<AfmeEmployee[]>(
            this.API_URL +
            this.EMPLOYEE_ROOT +
            '/SearchForEmployees',
            { params: params }
        );
    }

    getEmployeeInfoByUserName(userName: string) {
        const params = this.getHttpParams({ userName: userName });
        return this.http.get<AfmeEmployee>(
            this.API_URL +
            this.EMPLOYEE_ROOT +
            '/GetEmployeeByUserName',
            { params: params }
        );
    }

    getAfmeMarkets() {
        return this.http.get<AfmeMarket[]>(
            this.API_URL +
            this.MARKET_ROOT +
            '/GetMarketsByRegion' + '?region=AFME'
        );
    }

    getCurrentUserProfile() {
        return this.http.get<AfmeEmployee>(
            this.API_URL +
            this.EMPLOYEE_ROOT +
            '/GetCurrentUserProfile'
        );
    }

    private getHttpParams(object: any): HttpParams {
        let params = new HttpParams();
        Object.keys(object).forEach((key) => {
            if (!object[key]) return;
            params = params.append(key, object[key])
        });
        return params;
    }
}
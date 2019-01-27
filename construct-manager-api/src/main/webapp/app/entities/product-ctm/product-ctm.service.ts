import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IProductCtm } from 'app/shared/model/product-ctm.model';

type EntityResponseType = HttpResponse<IProductCtm>;
type EntityArrayResponseType = HttpResponse<IProductCtm[]>;

@Injectable({ providedIn: 'root' })
export class ProductCtmService {
    public resourceUrl = SERVER_API_URL + 'api/products';

    constructor(protected http: HttpClient) {}

    create(product: IProductCtm): Observable<EntityResponseType> {
        return this.http.post<IProductCtm>(this.resourceUrl, product, { observe: 'response' });
    }

    update(product: IProductCtm): Observable<EntityResponseType> {
        return this.http.put<IProductCtm>(this.resourceUrl, product, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IProductCtm>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IProductCtm[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}

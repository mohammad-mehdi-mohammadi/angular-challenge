import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MapList} from "../../interface/map-list";
import {MapDetail} from "../../interface/map-detail";
import {Ticket} from "../../interface/ticket";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MapService {

    constructor(private http: HttpClient) {
    }

    getAllMap(): Observable<MapList[]> {
        return this.http.get<MapList[]>(`${environment.api_url}/map`);
    }

    getMapDetail(id: string): Observable<MapDetail> {
        return this.http.get<MapDetail>(`${environment.api_url}/map/${id}`)
    }

    ticket(id: string, x: number, y: number): Observable<Ticket> {
        return this.http.post<Ticket>(`${environment.api_url}/map/${id}/ticket`, {x, y})
    }
}

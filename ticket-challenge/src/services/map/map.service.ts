import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MapList} from "../../interface/map-list";
import {MapDetail} from "../../interface/map-detail";
import {Ticket} from "../../interface/ticket";

@Injectable({
    providedIn: 'root'
})
export class MapService {

    constructor(private http: HttpClient) {
    }

    getAllMap(): Observable<MapList[]> {
        return this.http.get<MapList[]>("http://localhost:3000/map");
    }

    getMapDetail(id: string): Observable<MapDetail> {
        return this.http.get<MapDetail>(`http://localhost:3000/map/${id}`)
    }

    ticket(id: string, x: number, y: number): Observable<Ticket> {
        return this.http.post<Ticket>(`http://localhost:3000/map/${id}/ticket`, {x, y})
    }
}

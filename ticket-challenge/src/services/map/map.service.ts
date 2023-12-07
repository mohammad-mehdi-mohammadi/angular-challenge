import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {MapList} from "../../interface/map-list";
import {MapDetail} from "../../interface/map-detail";

@Injectable({
    providedIn: 'root'
})
export class MapService {

    constructor(private http: HttpClient) {
    }

    getAllMap(): Observable<MapList[]> {
        return this.http.get<MapList[]>("./../../assets/mocks/map-list.json");
    }

    getMapDetail(id: string): Observable<MapDetail | undefined> {
        return this.http.get<MapDetail[]>("./../../assets/mocks/map-detail.json").pipe(
            map((data: MapDetail[]) => {
                return data.find((item) => item.id === id)
            })
        );
    }
}

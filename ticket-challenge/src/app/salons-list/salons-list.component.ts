import {Component, OnInit} from '@angular/core';
import {MapService} from "../../services/map/map.service";
import {Observable, Subject} from "rxjs";
import {MapList} from "../../interface/map-list";

@Component({
    selector: 'app-salons-list',
    templateUrl: './salons-list.component.html',
    styleUrls: ['./salons-list.component.scss']
})
export class SalonsListComponent implements OnInit {
    mapList$: Observable<MapList[]>;
    constructor(private mapService: MapService) {
        this.mapList$ = this.mapService.getAllMap();
    }

    ngOnInit(): void {

    }
}

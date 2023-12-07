import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MapDetail} from "../../interface/map-detail";
import {MapService} from "../../services/map/map.service";

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    mapDetail$!: Observable<MapDetail | undefined>;
    constructor(private route: ActivatedRoute, private mapService: MapService) {
        this.route.params.pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                console.log(params['id'])
                this.mapDetail$ = this.mapService.getMapDetail(params['id']);
            });
    }

    ngOnInit(): void {

    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}

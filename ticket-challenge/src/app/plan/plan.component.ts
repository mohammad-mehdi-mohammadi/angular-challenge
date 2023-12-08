import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MapDetail} from "../../interface/map-detail";
import {MapService} from "../../services/map/map.service";

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    mapDetail!: MapDetail;
    private mapId: string | null = null

    constructor(private route: ActivatedRoute, private mapService: MapService, private changeDetectorRef: ChangeDetectorRef) {
        this.route.params.pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                this.mapId = params['id']
                this.mapService.getMapDetail(params['id']).pipe(takeUntil(this.destroy$)).subscribe((res) => {
                    this.mapDetail = res
                    this.changeDetectorRef.detectChanges()
                });
            });
    }

    ngOnInit(): void {

    }

    onSeatClicked(x: number, y: number) {
        if (this.mapId) {
            this.mapService.ticket(this.mapId, x, y).subscribe(res => {
                this.mapDetail = {
                    ...this.mapDetail,
                    seats: this.mapDetail.seats.map((row, rowIndex) => {
                        return rowIndex === x ?
                            row.map((item, columnIndex) => {
                                return columnIndex === y ? +(!item) : item
                            }) : row

                    })
                };
                this.changeDetectorRef.detectChanges()

            })
        }

    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IRoomTypeCtm } from 'app/shared/model/room-type-ctm.model';
import { RoomTypeCtmService } from './room-type-ctm.service';

@Component({
    selector: 'jhi-room-type-ctm-update',
    templateUrl: './room-type-ctm-update.component.html'
})
export class RoomTypeCtmUpdateComponent implements OnInit {
    roomType: IRoomTypeCtm;
    isSaving: boolean;

    constructor(protected roomTypeService: RoomTypeCtmService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ roomType }) => {
            this.roomType = roomType;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.roomType.id !== undefined) {
            this.subscribeToSaveResponse(this.roomTypeService.update(this.roomType));
        } else {
            this.subscribeToSaveResponse(this.roomTypeService.create(this.roomType));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IRoomTypeCtm>>) {
        result.subscribe((res: HttpResponse<IRoomTypeCtm>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}

import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExampleDataTableService } from './example-data-table.service';

export class ExampleDataTableDatasource implements DataSource<any> {
    public datasSubject = new BehaviorSubject([]);
    public loadingSubject = new BehaviorSubject<boolean>(false);

    constructor(private exampleDataTableService: ExampleDataTableService) {}

    connect(collectionViewer: CollectionViewer): Observable<any> {
        return this.datasSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.datasSubject.complete();
        this.loadingSubject.complete();
    }

    loadDatas(
        filter = '',
        sortDirection = 'asc',
        column = 'firstname',
        pageIndex = 0,
        pageSize = 5
    ) {
        this.loadingSubject.next(true);

        return this.exampleDataTableService.getDatas(
            filter,
            sortDirection.toUpperCase(),
            column,
            pageIndex,
            pageSize
        );
    }
}

export class Module {
    private _id: number;
    private _title: string;
    private _lessons: [];


    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get lessons(): [] {
        return this._lessons;
    }
}
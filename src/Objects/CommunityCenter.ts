import Schedule from "./Schedule.ts";

export default class CommunityCenter {
    private readonly _name: string;
    private _gmapsUrl: string;
    private _address: string;
    private _website: string;
    private _lat: number;
    private _lng: number;
    private readonly _schedule: Array<Schedule>;

    constructor(name: string) {
        this._name = name;
        this._website = '';
        this._gmapsUrl = '';
        this._address = '';
        this._schedule = new Array<Schedule>();

        this._lat = 0;
        this._lng = 0;
    }

    public get name(): string {
        return this._name;
    }

    public get gmapsUrl(): string {
        return this._gmapsUrl;
    }

    public set gmapsUrl(value: string) {
        this._gmapsUrl = value;
    }

    public get schedule(): Array<Schedule> {
        return this._schedule;
    }

    public get address(): string {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }

    public get lat(): number {
        return this._lat;
    }

    public set lat(value: number) {
        this._lat = value;
    }

    public get lng(): number {
        return this._lng;
    }

    public set lng(value: number) {
        this._lng = value;
    }

    public get website(): string {
        return this._website;
    }

    public set website(value: string) {
        this._website = value;
    }

    public addSchedule(day: string, startHour: number, startMinute: number, endHour: number, endMinute: number) {
        this._schedule.push(new Schedule(day, startHour, startMinute, endHour, endMinute));
    }

    public getDirections(): string {
        return `https://www.google.com/maps?daddr=${this._address}`;
    }
}
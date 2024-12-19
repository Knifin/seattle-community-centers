import Schedule from "./Schedule.ts";

export default class CommunityCenter {
    private readonly _name: string;
    private _gmapsUrl: string;
    private _address: string;
    private _website: string;
    private _lat: number;
    private _lng: number;

    private readonly _totRoomSchedule: Array<Schedule>;
    private readonly _totGymSchedule: Array<Schedule>;

    private _totRoomEndDate: Date;
    private _totGymEndDate: Date;

    constructor(name: string) {
        this._name = name;
        this._website = '';
        this._gmapsUrl = '';
        this._address = '';

        this._totRoomSchedule = new Array<Schedule>();
        this._totGymSchedule = new Array<Schedule>();

        this._totRoomEndDate = new Date();
        this._totGymEndDate = new Date();

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

    public get totRoomSchedule(): Array<Schedule> {
        return this._totRoomSchedule;
    }

    public get totGymSchedule(): Array<Schedule> {
        return this._totGymSchedule;
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

    public get totRoomEndDate(): Date {
        return this._totRoomEndDate;
    }

    public set totRoomEndDate(value: Date) {
        this._totRoomEndDate = value;
    }

    public get totGymEndDate(): Date {
        return this._totGymEndDate;
    }

    public set totGymEndDate(value: Date) {
        this._totGymEndDate = value;
    }

    public addTotRoomSchedule(day: string, startHour: number, startMinute: number, endHour: number, endMinute: number) {
        this._totRoomSchedule.push(new Schedule(day, startHour, startMinute, endHour, endMinute));
    }

    public addTotGymSchedule(day: string, startHour: number, startMinute: number, endHour: number, endMinute: number) {
        this._totGymSchedule.push(new Schedule(day, startHour, startMinute, endHour, endMinute));
    }

    public getDirections(): string {
        return `https://www.google.com/maps?daddr=${this._address}`;
    }
}
import './style.css'
import CommunityCenter from "./Objects/CommunityCenter.ts";
import Schedule from "./Objects/Schedule.ts";

class main {
    protected _cc: Array<CommunityCenter>;
    protected _currDate: Date;

    constructor() {
        this._cc = new Array<CommunityCenter>();
        this._currDate = new Date();
        this.buildSchedule();
    }

    public currDateName(): string {
        return this._currDate.toLocaleString('en-US', {weekday: 'long'});
    }

    protected buildSchedule(): void {
        // Ballard CC
        let location: CommunityCenter = new CommunityCenter('Ballard Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/ballard-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/pAt8c88R5dbeEn8SA';
        location.address = '6020 28th Ave NW, Seattle, WA 98107';
        location.lat = 47.672843549999996;
        location.lng = -122.39218530611328;

        location.totRoomEndDate = new Date('2024-12-24 23:59:59');
        location.addTotRoomSchedule("Sunday", 10, 0,14, 0);
        location.addTotRoomSchedule("Monday", 10,0,19,0);
        location.addTotRoomSchedule("Tuesday", 10,0,19,0);
        location.addTotRoomSchedule("Wednesday", 10,0,19,0);
        location.addTotRoomSchedule("Thursday", 10,0,19,0);
        location.addTotRoomSchedule("Friday", 10,0,19,0);
        location.addTotRoomSchedule("Saturday", 10,0,17,0);

        location.totGymEndDate = new Date('2024-12-20 23:59:59');
        location.addTotGymSchedule("Monday",10,0,12,30);
        location.addTotGymSchedule("Wednesday",10,0,12,30);
        location.addTotGymSchedule("Friday",10,0,12,30);
        this._cc.push(location);

        // Bitter Lake CC
        location = new CommunityCenter('Bitter Lake Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/bitter-lake-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/X4JFhiQLesB2esoX8';
        location.address = '13035 Linden Ave N, Seattle, WA 98133';
        location.lat = 47.72479810602333;
        location.lng = -122.34855274323624;

        location.totGymEndDate = new Date('2024-12-30 23:59:59');
        location.addTotGymSchedule("Sunday",10,30,12,30);
        location.addTotGymSchedule("Monday",10,30,12,30);
        location.addTotGymSchedule("Wednesday",10,30,12,30);
        this._cc.push(location);

        // Delridge CC
        location = new CommunityCenter('Delridge Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/delridge-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/xkseYeTSJk59ukXs7';
        location.address = '4501 Delridge Wy SW, Seattle, WA 98106';
        location.lat = 47.564081801534634;
        location.lng = -122.3637378162162;

        location.totRoomEndDate = new Date('2024-12-14 23:59:59');
        location.addTotRoomSchedule("Monday", 10,0,15,0);
        location.addTotRoomSchedule("Tuesday", 10,0,15,0);
        location.addTotRoomSchedule("Wednesday", 10,0,15,0);
        location.addTotRoomSchedule("Thursday", 10,0,15,0);
        location.addTotRoomSchedule("Friday", 10,0,15,0);
        location.addTotRoomSchedule("Saturday", 10,0,14,0);
        this._cc.push(location);

        // Discovery Park VC
        location = new CommunityCenter('Discovery Park Visitor Center');
        location.website = 'https://www.seattle.gov/parks/allparks/discovery-park/discovery-park-visitor-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/bTgiCATNPByMVVSd6';
        location.address = '3801 Discovery Park Blvd, Seattle, WA 98199';
        location.lat = 47.65805149878053;
        location.lng = -122.40641396387382;

        location.totRoomEndDate = new Date('2024-12-31 23:59:59');
        location.addTotRoomSchedule("Tuesday", 9,0,16,30);
        location.addTotRoomSchedule("Wednesday", 9,0,16,30);
        location.addTotRoomSchedule("Thursday", 9,0,16,30);
        location.addTotRoomSchedule("Friday", 9,0,16,30);
        location.addTotRoomSchedule("Saturday", 9,0,16,30);
        this._cc.push(location);

        // Garfield CC
        location = new CommunityCenter('Garfield Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/garfield-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Qe3CxEXQmvKnWreZA';
        location.address = '2323 E Cherry St, Seattle, WA 98122';
        location.lat = 47.60785694038088;
        location.lng = -122.3012500192359;

        location.totGymEndDate = new Date('2024-12-30 23:59:59');
        location.addTotGymSchedule("Monday",10,0,13,0);
        location.addTotGymSchedule("Wednesday",10,0,13,0);
        this._cc.push(location);

        // Green Lake CC
        location = new CommunityCenter('Green Lake Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/green-lake-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/cneEd1behCzrQW476';
        location.address = '7201 East Green Lake Dr N, Seattle, WA 98115';
        location.lat = 47.68092457373161;
        location.lng = -122.32883869072076;

        location.totRoomEndDate = new Date('2024-12-31 23:59:59');
        location.addTotRoomSchedule("Monday", 10,0,13,0);
        location.addTotRoomSchedule("Monday", 14,0,20,0);
        location.addTotRoomSchedule("Tuesday", 10,0,13,0);
        location.addTotRoomSchedule("Tuesday", 14,0,20,0);
        location.addTotRoomSchedule("Wednesday", 10,0,13,0);
        location.addTotRoomSchedule("Wednesday", 14,0,20,0);
        location.addTotRoomSchedule("Thursday", 10,0,13,0);
        location.addTotRoomSchedule("Thursday", 14,0,20,0);
        location.addTotRoomSchedule("Friday", 10,0,13,0);
        location.addTotRoomSchedule("Friday", 14,0,20,0);
        location.addTotRoomSchedule("Saturday", 8,30,13,0);
        location.addTotRoomSchedule("Saturday", 14,0,16,30);
        this._cc.push(location);

        // High Point CC
        location = new CommunityCenter('High Point Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/high-point-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/mUj6TVHug8svuDgF7';
        location.address = '6920 34th Ave SW, Seattle, WA 98126';
        location.lat = 47.54083334641864;
        location.lng = -122.37470685082006;

        location.totGymEndDate = new Date('2024-12-21 23:59:59');
        location.addTotGymSchedule("Tuesday",10,0,12,30);
        location.addTotGymSchedule("Thursday",10,0,12,30);
        this._cc.push(location);

        // Jefferson CC
        location = new CommunityCenter('Jefferson Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/jefferson-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/4qKWT9fWfYqDd8z99';
        location.address = '3801 Beacon Ave S, Seattle, WA 98108';
        location.lat = 47.56950069332558;
        location.lng = -122.30811557961836;

        location.totGymEndDate = new Date('2024-12-19 23:59:59');
        location.addTotGymSchedule("Tuesday",10,0,14,0);
        location.addTotGymSchedule("Thursday",10,0,14,0);
        this._cc.push(location);

        // Lake City CC
        location = new CommunityCenter('Lake City Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/lake-city-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/KYMKB5UaL3M3qHip7';
        location.address = '12360 Lake City Way NE #100, Seattle, WA 98125';
        location.lat = 47.718953310478284;
        location.lng = -122.29432046098346;

        location.totRoomEndDate = new Date('2024-12-26 23:59:59');
        location.addTotRoomSchedule("Tuesday", 10,0,12,0);
        location.addTotRoomSchedule("Thursday", 10,0,12,0);
        this._cc.push(location);

        // Laurelhurst CC
        location = new CommunityCenter('Laurelhurst Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/laurelhurst-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/dHXpGs8YDqcouUuU9';
        location.address = '4554 NE 41st St, Seattle, WA 98105';
        location.lat = 47.706322076451094;
        location.lng = -122.29112529312832;

        location.totRoomEndDate = new Date('2024-12-31 23:59:59');
        location.addTotRoomSchedule("Monday", 14,30,18,0);
        location.addTotRoomSchedule("Tuesday", 9,30,13,0);
        location.addTotRoomSchedule("Wednesday", 14,30,18,0);
        location.addTotRoomSchedule("Thursday", 9,30,13,0);
        this._cc.push(location);

        // Loyal Heights CC
        location = new CommunityCenter('Loyal Heights Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/loyal-heights-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/C9Dbitw1FS75pqH49';
        location.address = '2101 NW 77th St, Seattle, WA 98117';
        location.lat = 47.68495525560374;
        location.lng = -122.38370665008466;

        location.totGymEndDate = new Date('2024-12-31 23:59:59');
        location.addTotGymSchedule("Tuesday",10,0,13,0);
        location.addTotGymSchedule("Thursday",10,0,13,0);
        this._cc.push(location);

        // Magnuson CC
        location = new CommunityCenter('Magnuson Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/magnuson-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Napje6m3oWYZSKpW6';
        location.address = '7110 62nd Ave NE, Seattle, WA 98115';
        location.lat = 47.680028065834605;
        location.lng = -122.26190036659878;

        location.totGymEndDate = new Date('2024-12-28 23:59:59');
        location.addTotGymSchedule("Wednesday",9,30,11,30);
        location.addTotGymSchedule("Saturday",12,30,14,30);
        this._cc.push(location);

        // Meadowbrook CC
        location = new CommunityCenter('Meadowbrook Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/meadowbrook-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/DaomguKiTcDo9ubFA';
        location.address = '10517 35th Ave NE, Seattle, WA 98125';
        location.lat = 47.70617515758765;
        location.lng = -122.29112527279621;

        location.totRoomEndDate = new Date('2024-12-20 23:59:59');
        location.addTotRoomSchedule("Monday", 12,30,14,30);
        location.addTotRoomSchedule("Wednesday", 12,30,14,30);
        location.addTotRoomSchedule("Friday", 12,30,14,30);
        this._cc.push(location);

        // Miller CC
        location = new CommunityCenter('Miller Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/miller-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/fbEsitkUkFhW9TDa6';
        location.address = '330 19th Ave E, Seattle, WA 98112';
        location.lat = 47.6212612930151;
        location.lng = -122.30706602348438;

        location.totRoomEndDate = new Date('2024-12-31 23:59:59');
        location.addTotRoomSchedule("Monday", 10,0,18,30);
        location.addTotRoomSchedule("Tuesday", 10,0,18,30);
        location.addTotRoomSchedule("Wednesday", 10,0,18,30);
        location.addTotRoomSchedule("Thursday", 10,0,18,30);
        location.addTotRoomSchedule("Friday", 110,0,18,30);

        location.totGymEndDate = new Date('2024-12-31 23:59:59');
        location.addTotGymSchedule("Tuesday",10,0,13,0);
        location.addTotGymSchedule("Thursday",10,0,13,0);
        this._cc.push(location);

        // Northgate CC
        location = new CommunityCenter('Northgate Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/northgate-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/KMuLLwEfYKGx9GGa6';
        location.address = '10510 5th Ave NE, Seattle, WA 98125';
        location.lat = 47.70629580360756;
        location.lng = -122.3225326413714;

        location.totGymEndDate = new Date('2024-12-31 23:59:59');
        location.addTotGymSchedule("Tuesday",9,0,11,30);
        location.addTotGymSchedule("Thursday",9,0,11,30);
        this._cc.push(location);

        // Queen Anne CC
        location = new CommunityCenter('Queen Anne Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/queen-anne-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/aF3DskRtQhuTBpJ87';
        location.address = '1901 1st Ave W, Seattle, WA 98119';
        location.lat = 47.63738697323356;
        location.lng = -122.35897071435109;

        location.totRoomEndDate = new Date('2024-12-31 23:59:59');
        location.addTotRoomSchedule("Monday", 9,0,19,30);
        location.addTotRoomSchedule("Tuesday", 9,0,19,30);
        location.addTotRoomSchedule("Wednesday", 9,0,19,30);
        location.addTotRoomSchedule("Thursday", 9,0,19,30);
        location.addTotRoomSchedule("Friday", 9,0,19,30);
        location.addTotRoomSchedule("Saturday", 9,0,16,30);

        location.totGymEndDate = new Date('2024-12-31 23:59:59');
        location.addTotGymSchedule("Tuesday",9,30,12,30);
        location.addTotGymSchedule("Thursday",9,30,12,30);
        this._cc.push(location);

        // Rainier CC
        location = new CommunityCenter('Rainier Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/rainier-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/PxSTAwYZ3vrkgd2z9';
        location.address = '4600 38th Ave. S, Seattle, WA 98118';
        location.lat = 47.561480074710275;
        location.lng = -122.28334756106187;

        location.totGymEndDate = new Date('2024-12-31 23:59:59');
        location.addTotGymSchedule("Monday",10,0,12,0);
        location.addTotGymSchedule("Wednesday",10,0,12,0);
        this._cc.push(location);

        // Rainier Beach CC
        location = new CommunityCenter('Rainier Beach Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/rainier-beach-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/zEmXHtuu9BoWhBBW8';
        location.address = '8825 Rainier Ave S, Seattle, WA 98118';
        location.lat = 47.52483356301034;
        location.lng = -122.27058996228826;

        location.totGymEndDate = new Date('2024-12-30 23:59:59');
        location.addTotGymSchedule("Monday",9,0,12,0);
        location.addTotGymSchedule("Thursday",9,0,12,0);
        location.addTotGymSchedule("Friday",9,0,12,0);
        this._cc.push(location);

        // Ravenna-Eckstein CC
        location = new CommunityCenter('Ravenna Eckstein Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/ravenna-eckstein-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/Xcor5qXBYTHG9XGq7';
        location.address = '6535 Ravenna Ave NE, Seattle, WA 98115';
        location.lat = 47.67647592126659;
        location.lng = -122.30513906458229;

        location.totRoomEndDate = new Date('2024-12-30 23:59:59');
        location.addTotRoomSchedule("Monday", 15,0,16,30);
        location.addTotRoomSchedule("Monday", 18,0,19,0);
        location.addTotRoomSchedule("Friday", 17,0,19,0);
        location.addTotRoomSchedule("Saturday", 11,30,16,30);

        location.totGymEndDate = new Date('2024-12-31 23:59:59');
        location.addTotGymSchedule("Monday",12,30,14,30);
        location.addTotGymSchedule("Tuesday",12,30,14,30);
        location.addTotGymSchedule("Wednesday",12,30,14,30);
        location.addTotGymSchedule("Thursday",12,30,14,30);
        this._cc.push(location);

        // Van Asselt CC
        location = new CommunityCenter('Van Asselt Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/van-asselt-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/XfB89UxqAVnfNjD5A';
        location.address = '2820 S Myrtle St, Seattle, WA 98108';
        location.lat = 47.5397172213937;
        location.lng = -122.29575124031376;

        location.totGymEndDate = new Date('2024-12-19 23:59:59');
        location.addTotGymSchedule("Tuesday",11,0,14,0);
        location.addTotGymSchedule("Thursday",11,0,14,0);
        this._cc.push(location);

        // Yesler CC
        location = new CommunityCenter('Yesler Community Center');
        location.website = 'https://www.seattle.gov/parks/all-community-centers/yesler-community-center';
        location.gmapsUrl = 'https://maps.app.goo.gl/ecf4yiA5q23TygT98';
        location.address = '917 E Yesler Wy, Seattle, WA 98122';
        location.lat = 47.60104392465421;
        location.lng = -122.31975867368088;

        location.totGymEndDate = new Date('2024-12-30 23:59:59');
        location.addTotGymSchedule("Monday",11,0,13,0);
        location.addTotGymSchedule("Wednesday",11,0,13,0);
        location.addTotGymSchedule("Wednesday",11,0,13,0);
        this._cc.push(location);
    }

    public printOpenNowSchedule(title: string, id: string, type: string): void {
        let rows: Set<string> = new Set();

        type ScheduleKey = 'totRoomSchedule' | 'totGymSchedule';
        const scheduleKey: ScheduleKey = type === 'tot rooms' ? 'totRoomSchedule' : 'totGymSchedule';

        this._cc.forEach((item: CommunityCenter) => {
            const schedule: Schedule[] = item[scheduleKey];
            if (Array.isArray(schedule)) {
                schedule.forEach((slot: Schedule) => {
                    if (slot.isOpen(this.currDateName(), this._currDate.getHours(), this._currDate.getMinutes(), item.totRoomEndDate)) {
                        rows.add(`
                            <tr>
                                <td><a href="${item.website}" target="_blank">${item.name}</a></td>
                                <td><a href="${item.getDirections()}" target="_blank">${item.address}</a></td>
                                <td>${slot.getHoursOpen()}</td>
                                <td>${slot.getTimeUntilClose(this._currDate.getHours(), this._currDate.getMinutes())}</td>
                            </tr>
                        `);
                    }
                });
            }
        });

        let output: string = `<p>Nothing open right now for ${type}.</p>`;
        if (rows.size > 0) {
            output = `<table><thead><tr><td colspan="4"><strong>${title}</strong></td></tr><tr><th>Name</th><th>Address</th><th>Schedule</th><th>Closes in</th></tr></thead>`;
            rows.forEach(row => {
               output += row;
            });
            output += `</table>`;
        }
        document.querySelector<HTMLDivElement>(id)!.innerHTML = output;
    }

    public printOpenTodaySchedule(title: string, id: string, type: string): void {
        let rows: Set<string> = new Set();

        type ScheduleKey = 'totRoomSchedule' | 'totGymSchedule';
        const scheduleKey: ScheduleKey = type === 'tot rooms' ? 'totRoomSchedule' : 'totGymSchedule';

        this._cc.forEach((item: CommunityCenter) => {
            const schedule: Schedule[] = item[scheduleKey];
            if (Array.isArray(schedule)) {
                schedule.forEach((slot: Schedule) => {
                    if (slot.isOpenToday(this.currDateName())) {
                        rows.add(`
                            <tr>
                                <td><a href="${item.website}" target="_blank">${item.name}</a></td>
                                <td><a href="${item.getDirections()}" target="_blank">${item.address}</a></td>
                                <td>${slot.getHoursOpen()}</td>
                            </tr>
                        `);
                    }
                });
            }
        });

        let output: string = `<p>Nothing open right now for ${type}.</p>`;
        if (rows.size > 0) {
            output = `<table><thead><tr><td colspan="4"><strong>${title}</strong></td></tr><tr><th>Name</th><th>Address</th><th>Schedule</th></tr></thead>`;
            rows.forEach(row => {
                output += row;
            });
            output += `</table>`;
        }
        document.querySelector<HTMLDivElement>(id)!.innerHTML = output;
    }
}

const app: main = new main();
app.printOpenNowSchedule(`Tot gym rooms currently open on ${app.currDateName()}`, '#gym-schedule-current', 'tot gym rooms');
app.printOpenNowSchedule(`Tot rooms currently open on ${app.currDateName()}`, '#tot-schedule-current', 'tot rooms');

app.printOpenTodaySchedule(`Tot gym rooms open on ${app.currDateName()}`, '#gym-schedule-today', 'tot gym rooms');
app.printOpenTodaySchedule(`Tot rooms open on ${app.currDateName()}`, '#tot-schedule-today', 'tot rooms');

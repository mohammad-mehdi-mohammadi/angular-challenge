import {MapList} from "./map-list";
import {Ticket} from "./ticket";

export interface MapDetail extends MapList{
    seats: number[][];
    ticket: Ticket[];
}

import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {openUrl} from "utils/utils"
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
}

export function onTap(args:EventData){
    console.log(args.object.get("id"));
    openUrl(args.object.get("id"));
}
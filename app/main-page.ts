import { EventData, Observable } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";
import {openUrl} from "utils/utils";
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;

    let myobservable = new Observable();

    myobservable.set("webviewid", "https://www.google.com");
    myobservable.set("webviewprop", "<span><font color='#ff0000'>Sample html code</font></span>");

    page.bindingContext = myobservable;
}

export function onTap(args:EventData){
    console.log(args.object.get("id"));
    openUrl(args.object.get("id"));
}

export function onWebViewTap(args:EventData){
    console.log(args.object.get("id"));
    openUrl(args.object.get("id"));
}
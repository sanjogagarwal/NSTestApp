/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, GestureEventData, GesturesObserver, GestureTypes, Page, TouchGestureEventData, View } from '@nativescript/core';
// Event handler for Page 'navigatingTo' event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = <Page>args.object;
    let testView = <View> page.getViewById("testView");
    const touchObserver = new GesturesObserver(testView, (args: GestureEventData) => {
        let action = (args as TouchGestureEventData).action;
        if (action === 'down') {
            testView.className = 'onPressStyle';
        } else if (action === 'up') {
            testView.className = undefined;
        }
    }, this);
    touchObserver.observe(GestureTypes.touch);
}
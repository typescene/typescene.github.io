import { BrowserApplication } from "@typescene/webapp";
import WidgetActivity from "./activity/WidgetActivity";
import SearchService from "./service/SearchService";

// create a layer on top of the document
let layer = document.createElement("div");
layer.id = "docwidget_layer";
layer.style.position = "fixed";
layer.style.zIndex = "1000000";

// register the search service and load its data
let search = new SearchService();
search.register();
search.loadAsync().catch((err) => {
  console.error(err);
});

// create the widget application and activate it
class Widget extends BrowserApplication.with(WidgetActivity) {
  async onManagedStateActiveAsync() {
    await super.onManagedStateActiveAsync();
    document.body.appendChild(layer);
    let activity = this.activities!.get(0);
    (window as any).showDocWidget = () => {
      activity.activateAsync();
    };

    // add an event handler for the ? key
    window.addEventListener("keydown", (e) => {
      if (e.key === "/") {
        activity.activateAsync();
        e.preventDefault();
      }
    });
  }
}
let widget = new Widget(layer);
widget.activateAsync();

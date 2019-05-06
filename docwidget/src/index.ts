import { BrowserApplication } from "@typescene/webapp";
import { compose, service } from "typescene";
import { WidgetActivity } from "./activity/WidgetActivity";
import { SearchService } from "./service/SearchService";

/** The widget application, includes a single activity */
class Widget extends BrowserApplication {
    @compose(WidgetActivity)
    activity?: WidgetActivity;

    @service("App.Search")
    search?: SearchService;

    /** Activate the widget; wired as `window.showDocWidget` as well */
    showDocWidget() {
        if (this.managedState && !this.activity!.isActive()) {
            this.activity!.activateAsync();
        }
        return false;
    }

    /** When active, add a keydown listener and load search data */
    async onManagedStateActiveAsync() {
        await super.onManagedStateActiveAsync();
        (window as any).showDocWidget = () => this.showDocWidget();
        window.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.key === "/") this.showDocWidget()
        });
        this.search!.loadAsync().catch(err => console.log(err));
    }
}

// create a layer on top of the document
let layer = document.createElement("div");
layer.id = "docwidget_layer";
layer.style.position = "fixed";
layer.style.zIndex = "1000000";

// register the search service once
new SearchService().register();

// create the widget application and activate it
let widget = new Widget(layer);
widget.activateAsync().then(() => {
    document.body.appendChild(layer);
});

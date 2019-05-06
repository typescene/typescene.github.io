import { DialogViewActivity, managedChild, ManagedList, ManagedRecord, rateLimit, service, UIComponent, UIComponentEvent, UIListCellAdapterEvent, UIRenderPlacement, UITextField } from "typescene";
import { SearchResult, SearchService } from "../service/SearchService";
import view from "./view";

export class WidgetActivity extends DialogViewActivity.with(view) {
    placement = UIRenderPlacement.DIALOG;
    modalShadeClickToClose = true;

    filter?: string;

    @managedChild
    filtered = new ManagedList<SearchResult & ManagedRecord>();

    @service("App.Search")
    search?: SearchService;

    constructor() {
        super();
        this.propagateChildEvents(e => {
            if (e.name === "CloseModal") this.deactivateAsync();
        });
    }

    updateFiltered() {
        let result = this.search!.find(this.filter || "");
        this.filtered.replace(result.map(r => {
            for (let existing of this.filtered) {
                if (existing.id === r.id && existing.type === r.type) {
                    return existing;
                }
            }
            return ManagedRecord.create(r);
        }));
    }

    setSearchFilter(e: UIComponentEvent<UITextField>) {
        this.filter = e.source.value || "";
    }

    focusFirst(e: UIComponentEvent) {
        let row = e.source.getParentComponent();
        let cell = row && row.getParentComponent();
        if (cell instanceof UIComponent) cell.requestFocusNext();
    }

    navigateFirst() {
        let first = this.filtered.first();
        if (first) {
            this.deactivateAsync();
            document.location.href = "/docs/ref/" + first.path;
        }
    }

    navigateResult(e: UIListCellAdapterEvent<SearchResult & ManagedRecord>) {
        if (e.object && e.object.path) {
            this.deactivateAsync();
            document.location.href = "/docs/ref/" + e.object.path;
        }
    }

    goToIndex() {
        this.deactivateAsync();
        document.location.href = "/docs";
    }

    ignoreArrowPress(e: UIComponentEvent) {
        if (e.event) (e.event as KeyboardEvent).preventDefault();
    }
}

class Observer {
    constructor (public readonly activity: WidgetActivity) { }
    @rateLimit(80)
    onFilterChangeAsync() {
        this.activity.updateFiltered();
    }
}
WidgetActivity.observe(Observer);

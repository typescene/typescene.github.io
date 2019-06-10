import { bind, bindf, tl, UIBorderlessTextField, UICell, UIExpandedLabel, UIFlowCell, UIImage, UILinkButton, UIListCellAdapter, UIListController, UIRow, UISelectionController, UISeparator } from "typescene";

export default UIFlowCell.with(
    {
        dimensions: { width: "100%", maxWidth: 384 },
        css: { className: "docwidget_cell" },
        background: "@background",
        borderColor: "@primary",
        borderThickness: { top: 4 },
        borderRadius: 4,
        dropShadow: .5,
        onArrowDownKeyPress: "ignoreArrowPress()",
        onArrowUpKeyPress: "ignoreArrowPress()"
    },

    // cell with text field input
    UICell.with(
        { padding: { x: 16, y: 8 } },
        UIRow.with(
            UIImage.with({
                url: "/assets/icons/search.svg",
                dimensions: { height: 16, width: 16 }
            }),
            UIBorderlessTextField.with({
                placeholder: bind("search.loaded|then(API search term...)|or(Loading...)|tt"),
                onInput: "setSearchFilter()",
                onEnterKeyPress: "navigateFirst()",
                onArrowDownKeyPress: "focusFirst()",
                textStyle: { lineHeight: 2 },
                requestFocus: true
            })
        )
    ),

    // error message, if any
    UICell.with(
        {
            hidden: bind("!search.error"),
            padding: { x: 16, y: 8 }
        },
        UIRow.with(tl("{@text/50%}An error occurred, please reload"))
    ),

    // results list
    UISelectionController.with(
        UIListController.with(
            {
                items: bind("filtered"),
                enableArrowKeyFocus: true,
                onNavigateResult: "navigateResult()"
            },
            UIListCellAdapter.with(
                {
                    padding: { x: 16 },
                    allowKeyboardFocus: true,
                    selectOnFocus: true,
                    highlight: {
                        selectedBackground: "@background^-10%",
                        selectedTextColor: "@text",
                        focusedSelectedBackground: "@primary",
                        focusedSelectedTextColor: "@primary:text"
                    },
                    onMouseEnter: "+Select",
                    onClick: "+NavigateResult",
                    onEnterKeyPress: "+NavigateResult",
                },
                UIRow.with(
                    UIImage.with({
                        dimensions: { width: 16, height: 16 },
                        url: bindf("/assets/icons/spec-${object.type}.svg"),
                        controlStyle: { css: { opacity: ".5" } }
                    }),
                    UIExpandedLabel.with({
                        text: bind("object.id"),
                        controlStyle: { css: { cursor: "pointer" } }
                    })
                )
            )
        )
    ),

    // footer with index link
    UISeparator,
    UIRow.with(
        UILinkButton.with({
            label: "Documentation index",
            shrinkwrap: false,
            textStyle: { lineHeight: 1.8 },
            onClick: "goToIndex()"
        })
    )
)

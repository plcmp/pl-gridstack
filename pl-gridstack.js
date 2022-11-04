import { html, css, PlElement } from "polylib";
import '@plcmp/pl-flex-layout';

class PlGridStack extends PlElement {
    static properties = {
        value: { type: String, observer: '_valueObserver' }
    }

    static css = css`
        :host {
            width: 100%;
            height: 100%;
        }

        .stack {
            width: 100%;
            height: 100%;
        }

        .grid-stack-item-content {
            background-color: #18BC9C; 
        }
    `;

    static template = html`
        <link href="gridstack/dist/gridstack.min.css" rel="stylesheet" type="text/css">
        <div id="stack" class="grid-stack"></div>
    `;

    connectedCallback() {
        super.connectedCallback();
        this.grid = GridStack.init({ resizable: { handles: 'all' } }, this.$.stack);

        let items = [
            { x: 0, y: 0, w: 4, h: 2, content: '1' },
            { x: 4, y: 0, w: 4, h: 4, noMove: true, noResize: true, locked: true, content: 'I can\'t be moved or dragged!<br><ion-icon name="ios-lock" style="font-size:300%"></ion-icon>' },
            { x: 8, y: 0, w: 2, h: 2, minW: 2, noResize: true, content: '<p class="card-text text-center" style="margin-bottom: 0">Drag me!<p class="card-text text-center"style="margin-bottom: 0"><ion-icon name="hand" style="font-size: 300%"></ion-icon><p class="card-text text-center" style="margin-bottom: 0">...but don\'t resize me!' },
            { x: 10, y: 0, w: 2, h: 2, content: '4' },
            { x: 0, y: 2, w: 2, h: 2, content: '5' },
            { x: 2, y: 2, w: 2, h: 4, content: '6' },
            { x: 8, y: 2, w: 4, h: 2, content: '7' },
            { x: 0, y: 4, w: 2, h: 2, content: '8' },
            { x: 4, y: 4, w: 4, h: 2, content: '9' },
            { x: 8, y: 4, w: 2, h: 2, content: '10' },
            { x: 10, y: 4, w: 2, h: 2, content: '11' },
        ];
        this.grid.load(items);
    }

    addWidget(el) {
        this.grid.addWidget(el);
    }
}

(async function () {
    let script = document.createElement('script');
    script.src = "gridstack/dist/gridstack-all.js";
    script.async = true;
    script.onload = (() => {
        customElements.define('pl-gridstack', PlGridStack);
    })

    document.head.appendChild(script);
}());

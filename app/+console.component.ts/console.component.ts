import { Component, OnInit } from "@angular/core";

import { ConsoleVO } from "./console.models";
@Component({
    moduleId: module.id,
    selector: "console",
    /*styles: [ require("./console.css").toString()],*/
    template: `<div id="terminal"></div>`,
})
export class ConsoleComponent implements OnInit {
    private destination: HTMLElement;
    private consoleData: ConsoleVO;

    constructor() {
        this.consoleData = new ConsoleVO();
    }

    public ngOnInit() {
        this.destination = document.getElementById("terminal");
        this.consoleWriter();
    }

    private consoleWriter():void {
        this.consoleData.sContents = this.consoleData.dollarSymbol;
        this.consoleData.iRow = Math.max(0, this.consoleData.iIndex - this.consoleData.iScrollAt);

        this.nextRow();
        this.nextLetterPosition();
    }

    private nextLetterPosition(): void {
        if ( this.consoleData.iTextPos++ === this.consoleData.iArrLength ) {
            this.consoleData.iTextPos = 0;
            this.consoleData.iIndex++;
            if ( this.consoleData.iIndex != this.consoleData.aText.length ) {
                this.consoleData.iArrLength = this.consoleData.aText[this.consoleData.iIndex].length;
                this.delayElementPrint(500);
            }
        } else {
            this.delayElementPrint(this.consoleData.iSpeed);
        }
    }

    private nextRow(): void {
        while ( this.consoleData.iRow < this.consoleData.iIndex ) {
            this.consoleData.sContents += `${this.consoleData.aText[this.consoleData.iRow++]} <br />${ this.consoleData.dollarSymbol }`;
        }
        this.destination.innerHTML = this.consoleData.sContents + this.consoleData.aText[this.consoleData.iIndex].substring(0, this.consoleData.iTextPos) + "_";
    }

    private delayElementPrint(time: number): void {
        setTimeout(() => {
            this.consoleWriter();
        }, time);
    }
}

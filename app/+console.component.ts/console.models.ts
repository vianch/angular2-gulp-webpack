class ConsoleVO {
    public aText: Array<string>;
    public iSpeed: number;
    public iIndex: number;
    public iArrLength: number ;
    public iScrollAt: number;
    public iTextPos: number;
    public sContents: string;
    public iRow: number;
    public dollarSymbol: string;
    
    constructor() {
        this.aText = [
            "hi, i'm Victor",
            "a web developer",
            "based in Bogota, Colombia",
            "i drink lot of tea",
            "and build beautiful websites"
        ];
        this.iSpeed = 100;
        this.iIndex = 0;
        this.iArrLength = this.aText[0].length;
        this.iScrollAt = 20;
        this.iTextPos = 0;
        this.sContents = "";
        this.iRow = null;
        this.dollarSymbol = `<span class="dollar"></span>`;
    }
}

export { ConsoleVO }
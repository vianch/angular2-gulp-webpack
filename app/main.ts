import { enableProdMode } from "@angular/core";
import { bootstrap }    from "@angular/platform-browser-dynamic";

import { ConsoleComponent } from "./+console.component.ts/console.component";

enableProdMode();

bootstrap(<any>ConsoleComponent, [])
    .then(success => { console.log("VIANCH is ready"); })
    .catch(error => console.log(error));

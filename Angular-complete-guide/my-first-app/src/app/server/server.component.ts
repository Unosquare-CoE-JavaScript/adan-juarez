// this is not a normal subclass, use decorators
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html'
})

export class ServerComponent {
    title = 'my-server-app-component'
}
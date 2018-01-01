import { Component } from '@angular/core'; // Imports the @Component() part

@Component({    // decorator that tells TS what the class is
    // metadata about this class
    selector: 'app-server',     // what html tag we use to select this
    templateUrl: './server.component.html',     // where the html file is for the component
    styles: [`
        .online {
            color: white;
        }
    `]
}) 
export class ServerComponent {

    serverId: number;
    serverStatus: string = 'offline';


    constructor() { 
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.round(Math.random() * 100);
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    getColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }

    getServerStatus() {
        return this.serverStatus;
    }

}


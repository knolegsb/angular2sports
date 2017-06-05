import { Component } from "@angular/core";

@Component({
    selector: "app",
    // template: `
    //     <div class="bg-success p-a-1 text-xs-center">
    //         This is SportStore
    //     </div>
    // `
    
    //template: "<store></store>"

    template: "<router-outlet></router-outlet>"
})

export class AppComponent { }
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, BarcodeScanner} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {
    private rootPage: any;

    constructor(private platform: Platform) {
        this.rootPage = HomePage;

        platform.ready().then(() => {
            console.log("App ready");
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp);

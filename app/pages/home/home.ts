import {Component} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {BarcodeScanner} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public barcodeData: any;
    constructor(private platform: Platform, private navCtrl: NavController) {
        platform.ready().then(() => {
            console.log("Home ready");
        });
    }

    scan(event) {
        BarcodeScanner.scan().then((data) => {
            this.barcodeData = data;
        }, (error) => {
            console.log("Error: ", error);
        })
    }
}

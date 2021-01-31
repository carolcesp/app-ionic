import { Component, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

    async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      // buttons: ['Cancel', 'Open Modal', 'Delete']
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        },
        {
          text: 'Open Modal',
          handler: () => { console.log('modal abierto')}
        },
        {
          text: 'Delete',
          handler: () => { console.log('borrado')}
        },
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          id: 'name',
          placeholder: 'Nombre'
        },
        {
          name: 'lastname',
          type: 'text',
          id: 'lastname',
          placeholder: 'Apellidos'
        },
        // multiline input.
        {
          name: 'adress',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Dirección'
        },
        {
          name: 'url',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Url favorita'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          placeholder: 'dd/mm/aaaa',
          label: 'Fecha nacimiento',
          min: '1900-01-01',
          max: '2021-02-01'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: any) => {
            console.log('Confirm Ok',data);
          }
        }
      ]
    });

    await alert.present();
  }

}

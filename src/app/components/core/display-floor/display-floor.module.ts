import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {TranslateModule} from '@ngx-translate/core';

import {DisplayFloorComponent} from './display-floor';

@NgModule({
    declarations: [
        DisplayFloorComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule.forChild()
    ],
    exports: [
        DisplayFloorComponent
    ]
})
export class DisplayFloorModule {
}

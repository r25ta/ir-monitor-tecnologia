import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const material = [ MatIconModule
                  ,MatButtonModule
                  ,MatButtonModule
                  ,MatBadgeModule
                  ,MatDialogModule
                  ,MatGridListModule
                  ,MatSlideToggleModule
                  ,MatFormFieldModule
                  ,MatInputModule
                  ,MatCardModule ];

@NgModule({

  imports: [material],
  exports: [material]
})
export class MaterialModule { }

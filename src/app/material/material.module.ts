import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';


const material = [ MatIconModule
                  ,MatButtonModule
                  ,MatButtonModule
                  ,MatBadgeModule
                  ,MatDialogModule
                  ,MatGridListModule ];

@NgModule({

  imports: [material],
  exports: [material]
})
export class MaterialModule { }

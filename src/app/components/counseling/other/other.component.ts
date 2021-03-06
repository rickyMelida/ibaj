import { Component, OnInit } from '@angular/core';
import { VersesService } from '../../../services/verses.service';
import { Versiculos } from '../../../models/versiculos.interface';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor( private _versesService: VersesService) { }
  p: any = [ {} ,{},{}, {} ];
  versiculos: Array<Versiculos>;

  ngOnInit(): void {
    this.getData()
    .then((result) => {
      this.versiculos = result.consejos;
    }).catch((err) => {
      console.log(err);
    });
  }

  getData():any {
    return new Promise((resolve, reject)=>{
      this._versesService.getVersiculos().subscribe(item=>{
        item.forEach(element=>{
          resolve(element.payload.doc.data());
        });
      });
    });
  }

}

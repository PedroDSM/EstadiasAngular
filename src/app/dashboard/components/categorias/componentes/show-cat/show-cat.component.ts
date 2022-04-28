import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/auth/Models/Cmodel';
import { CategoriasService } from 'src/app/dashboard/services/categorias.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  public cat:Categoria={}
  constructor(private service:CategoriasService, public dialogRef: MatDialogRef<ShowCatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.getCategoria(this.data.id)
    .subscribe((res:any)=>{
      this.cat = res.categoria!
      console.log(res);
  })}

  closeDialog(){
    this.dialogRef.close()
  }

}

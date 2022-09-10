import { Component, OnInit } from '@angular/core';
import { EkleDto } from 'src/app/dto/EkleDto';
import { GuncelleDto } from 'src/app/dto/GuncelleDto';
import { List } from 'src/app/dto/List';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  
  constructor(private getAllServicesService:GetAllService){}
  list: List[] = [];
  clickInformation : any[] = [];
  guncelleData: any;
  kayitId:any;
  searchText:any

  ngOnInit(): void {
    this.getAllServicesService.getAll().subscribe(data => {this.list = data});
  }
  click(kayitId:any,adiSoyadi:any , grubu:any,telefon:any){
    this.clickInformation=[kayitId,adiSoyadi,grubu,telefon]
  }
  btnEkle(adiSoyadi:any,telefon:any,grubu:any){
    let add = new EkleDto(adiSoyadi,telefon,grubu)

    alert("Kayıt Başarılı Bir Şekilde Eklendi")
    this.getAllServicesService.addService(add).subscribe()
  }

  btnSil(){

    alert("Kayıt Başarılı Bir Şekilde Silindi")

    let kayitId = this.clickInformation[0];

    this.getAllServicesService.deleteService(kayitId).subscribe()
  }
  btnGuncelle(adiSoyadi:any,telefon:any,grubu:any){
    this.kayitId = this.clickInformation[0]
    let add = new GuncelleDto(this.kayitId,adiSoyadi,grubu,telefon)
    
    alert("Kayıt Başarılı bir Şekilde Güncellenmiştir")

    this.getAllServicesService.updateService(add).subscribe(data =>{this.guncelleData = data})
  }

 
  
}

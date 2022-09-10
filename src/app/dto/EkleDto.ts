export class EkleDto{
    kayitId: any;
    adiSoyadi:any;
    grubu:any;
    telefon:any;
    tarih:any;
    constructor(
        adiSoyadi:any,
        telefon:any,
        grubu:any,
        
        ){
           
            this.adiSoyadi = adiSoyadi
            this.telefon = telefon
            this.grubu = grubu
            
        }
}
export class GuncelleDto{
    kayitId: any;
    adiSoyadi:any;
    grubu:any;
    telefon:any;
    constructor(
        kayitId: any,
        adiSoyadi:any,
        grubu:any,
        telefon:any
        
        ){
           
            this.kayitId = kayitId
            this.adiSoyadi = adiSoyadi
            this.telefon = telefon
            this.grubu = grubu
            
        }
}
function isValid(frm)
{
    var isim = frm.isim.value;
    var soyisim = frm.soyisim.value;
    var sehir = frm.sehirler.value;
    var email = frm.email.value;
    var atpos = email.indexOf("@");
    var nokta = email.lastIndexOf(".");
    var hobi = frm.hobi;
    var cinsiyet = frm.cinsiyet;
    var metin = frm.ileti.value;

    if ( isim==null || isim=="" || isim.length < 3 )
    {
        alert("İsim 3 karakterden az olamaz");
        return false;
    }
    if ( soyisim==null || soyisim=="" || soyisim.length < 2 )
    {
        alert("Soyisim 2 karakterden az olamaz");
        return false;
    }
    if ( sehir==null || sehir=="" || sehir.length < 3 )
    {
        alert("Şehir 3 karakterden az olamaz");
        return false;
    }
    if ( atpos<1 || nokta<atpos+2 || nokta+2>=email.length )
    {
        alert("Geçerli email adresi girin");
        return false;
    }
    var value = "";
    for(var i = 0; i<hobi.length;i++){
        if(hobi[i].checked){
            value=hobi[i].value;
        }
    } 
    if(value == "" || value == null){
        alert("Hobi seçimi yapmadınız!!");
        return false;
    }
    var value_2 = "";
    for(var i = 0; i<cinsiyet.length;i++){
        if(cinsiyet[i].checked){
            value_2=cinsiyet[i].value;
        }
    } 
    if(value_2 == "" || value_2 == null){
        alert("Cinsiyet seçimi yapmadınız!!");
        return false;
    }
    if(metin == "" || metin == null){
        alert("Mesaj kısmı boş bırakılmamalıdır");
        return false;
    }        
    return true;
}
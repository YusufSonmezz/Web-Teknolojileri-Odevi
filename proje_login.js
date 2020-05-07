
function isValid(frm)
{
    var kadi = frm.email.value;
    var sifre = frm.password.value;
    if ( kadi == "b181210071@sakarya.edu.tr" && sifre == "123" )
    {
        return true;
    }
    else{return false;}
}
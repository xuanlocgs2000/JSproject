var bieuthuc ="";
function toan_hang(x);
{
    bieuthuc = bieuthuc+x;

}
function toan_tu(tt)
{
    bieuthuc = bieuthuc+tt;

}
function thuc_hien()
{
    var ketqua =  eval(bieuthuc);//ham tinh gt bieu thuc
    bieuthuc = "";
    alert("Ket qua :"+ketqua);
    
    

}
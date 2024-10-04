let p= parseInt(prompt("Enter the value of m"))
let q = parseInt(prompt("Enter the value of n"))
let prdt=1
console.log(p+" "+q)
if (p>q){
    alert(1);}
else
{
    for (let i = p; i <q;i++)
    {
        if (i%2!==0)
        {
            console.log(i+" ");
            prdt *=  i;
        }
    }
    alert(prdt);
}

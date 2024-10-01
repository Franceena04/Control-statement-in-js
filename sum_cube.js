let m
let n
m = prompt("Enter the value of m")
n = prompt("Enter the value of n")
let sum=0;

if (m>n)
    console.log("0")
else
{
    for (let i=m;i<=n;i++)
        sum+=i*i*i;
}
console.log(sum);

let arr = [1,0,2,0,3,4,0,5]
let count=0;
let ans = [] ;
for (let i =0;i<arr.length;i++)
{
    if (arr[i] ==0)
        count++
    else
        ans.push(arr[i])
}
for (let i = 0; i < count;i++)
{
    ans.push(0)
}
console.log("The number of empty boxes are "+count )
console.log(ans)
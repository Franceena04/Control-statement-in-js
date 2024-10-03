let arr = [4,5,0,1,9,0,5,0]
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
console.log(ans)
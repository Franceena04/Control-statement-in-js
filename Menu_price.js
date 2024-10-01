alert("Hi \nWelcome to the Restaurant")
let  user 
//console.clear()
user = prompt("Please enter your name")
alert(`Hi ${user} \nHere's your menu`)
window.alert("Menu\n\n1.Pizza - Rs 200\n2.Burger - Rs 300\n3.Chicken Biriyani - Rs 250\n4.Apple Juice - Rs 100\n5.Idli - Rs 80");



let price=0
let x=true
while (x===true)
{
let choice
choice = parseInt(prompt("Enter your choice\n Enter 0 to check out"));
let quantity

switch (choice) 
{
    case 1:
        quantity =  parseInt(prompt("Enter the quantity"));
        price += quantity*200
        break;
        
    case 2:
        quantity =  parseInt(prompt("Enter the quantity"));
        price += quantity*300
        break;
    case 3:
        quantity =  parseInt(prompt("Enter the quantity"));
        price += quantity*250
        break;
    case 4:
        quantity =  parseInt(prompt("Enter the quantity"));
        price+= quantity*100
        break;
    case 5:
        quantity =  parseInt(prompt("Enter the quantity"));
        price += quantity*80
        break;
    case 0:
        x=false
        break;
    default:
        window.alert("Enter valid choice")
     

}
}
if (price>=500)
window.alert("Your total is " + (price-(price*0.1)));
else
window.alert("Your total is " + price);


alert("Thank you\nVisit again")

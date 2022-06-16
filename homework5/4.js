function filter357(a,b)
{
    var c = [];
    for (let i=a;i<=b;x++)
    {
        if((i%3!=0) && (i%5!=0) && (i%7!=0))
        c.push(i);
    }
    
    console.log(c);
}


console.log("filter357(5,15)=>", filter357(5,15));
console.log("filter357(1,30)=>", filter357(1,30));

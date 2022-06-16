function f1(num)
{
    var num1 = num
    var li = []
    var i = 1
    while (i<num1)
    {
        i += 1
        while (num1 % i == 0) 
        {
            num1/=i
            li.push(i)
        }   
    }
 console.log(num+'='+li.join('*'))
}


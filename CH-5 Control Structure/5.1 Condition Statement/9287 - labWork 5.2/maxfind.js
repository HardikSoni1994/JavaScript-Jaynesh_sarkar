// Write a Program to find the maximum number from the given 4 numbers using nested if else

    let a = +prompt("Enter the a value :");
    b = +prompt("Enter the b value :");
    c = +prompt("Enter the c value :");
    d = +prompt("Enter the d value :");
    
    if (a == b && a == c && b == c && a == d)
    {
        document.write(" All Numbers are equal..");
    }
    else
    {
        if (a == b || a == c || b == c || c == d)
        {
            document.write("Both Number are Equal..");
        }
        else{
            if (a > b)
            {
                if (a > c)
                {
                    if (a > d)
                    {
                        document.write(a, " is the Maximum number..");
                    }
                    else
                    {
                        document.write(d, " is the Maximum number..");
                    }
                }
                else
                {
                    if (c > d)
                    {
                        document.write(c, " is the Maximum number..");
                    }
                    else
                    {
                        document.write(d, " is the Maximum number..");
                    }
                    
                }
                
            }
            else
            {
                if (b > c)
                {
                    if (b > d)
                    {
                        document.write(b, " is the Maximum number..");
                    }
                    else
                    {
                        document.write(d, " is the Maximum number..");
                    }
                    
                }
                else
                {
                    if (c > d)
                    {
                        document.write(c, " is the Maximum number..");
                    }
                    else
                    {
                        document.write(d, " is the Maximum number..");
                    }
                    
                }
                
            }
            
        }
    }
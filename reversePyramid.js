function pattern(rows)
{
    for ( var i = 0; i < rows ; i++)
    {
        let strings = "";    
        for ( var j = rows - i; j > 0; j--)
        {
            strings += " ";
        }
        for ( var j = rows; j > i+1 ; j--)
        {
            strings += "*";
        }
        for ( var j = 0; j < i ; j++)
        {
            strings += "*";
        }
        

        console.log(strings)

    }

}

pattern(10);
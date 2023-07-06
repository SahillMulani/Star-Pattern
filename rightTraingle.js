function pattern(rows)
{
    let strings = "";
    for ( var i = 0; i <  rows; i++)
    {
        for ( var k = 0 ; k < rows-i ; k++)
        {
            console.log(k);
            strings += " ";
        }
        for ( var j = 0; j < i + 1; j++)
        {
            strings += "*";
        }
        strings += "\n";

    }
    console.log(strings)

}

pattern(5)
function pattern(rows)
{
    for ( var i = 0; i < rows ; i++)
    {
        let strings = "";
        for ( var j = 0; j < i + 1; j++)
        {
            strings += "*";
        }
        console.log(strings)
    }

}

pattern(5)
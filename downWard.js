function pattern(rows)
{
    for ( var i = 0; i < rows ; i++)
    {
        let strings = "";
        for ( var j = 0; j < rows - i ; j++)
        {
            strings += "*";
        }

        console.log(strings)

    }

}

pattern(10);
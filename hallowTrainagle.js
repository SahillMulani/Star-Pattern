function pattern(rows)
{
    for( var  i = 0; i < rows ; i++)
    {
        let strings = ""
        if(i === 0 || i === 1 || i === rows - 1)
        {
            for ( var j = 0; j < i + 1; j++)
        {
            strings += "*";
        }

        }
        else
        {
            strings += "*";
            for ( var j = 0; j < i - 1; j++)
            {
                strings += " ";
            }
            strings += '*';
        }
        console.log(strings);
    }
}
pattern(10);
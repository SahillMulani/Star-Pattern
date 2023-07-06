function completePattern(rows)
{   
    let str = ""
    for ( i = 0 ; i < rows ; i++)
    {
        str += "*"
    }
    console.log(str)
}
function partialPattern(rows)
{   
    let str = "*"
    for ( i = 0 ; i < rows - 2 ; i++)
    {
        str += " "
    }
    str += "*";
    console.log(str)
}


function pattern(rows)
{
    completePattern(rows);
    for( var i = 0 ; i < rows - 2; i++)
    {
        partialPattern(rows);
    }
    completePattern(rows);

}

pattern(10);
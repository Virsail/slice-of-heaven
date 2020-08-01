function ddselect()
{
    var d=document.getElementById("ddselect");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue").value=displayText;
}


function ddselect1()
{
    var d=document.getElementById("ddselect1");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue1").value=displayText;
}
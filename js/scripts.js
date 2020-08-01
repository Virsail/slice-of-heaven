function ddselect()
{
    var d=document.getElementById("ddselect");
    var displayText=d.options[d.selectedIndex].text;
    document.getElementById("textvalue").value=displayText;
}
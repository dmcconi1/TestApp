function MenuChoice(selection)
{
    
    document.getElementById("customerlist").style.visibility = "hidden";
    document.getElementById("createcustomer").style.visibility = "hidden";
    document.getElementById("deletecustomer").style.visibility = "hidden";
    
    switch (selection)
    {
        case "customerlist":
            document.getElementById("customerlist").style.visibility = "visible";
            break;
        case "createcustomer":
            document.getElementById("createcustomer").style.visibility = "visible";
            break;
        case "deletecustomer":
            document.getElementById("deletecustomer").style.visibility = "visible";
            break;
        case "None":
            break;
        default:
            alert("Please select a different menu option");
    }
}
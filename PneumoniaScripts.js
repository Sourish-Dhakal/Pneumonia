function Open(a,x) {
    if (document.getElementById(a).style.display=="none")
    {    
    document.getElementById(a).style.display="block";
    }
    else 
    {
    document.getElementById(a).style.display="none";
    }
    
    if (document.getElementById(a).style.display=="none") {
        document.getElementById(x).className="fa-solid fa-angle-up";
    }
    else {
        document.getElementById(x).className="fa-solid fa-angle-down";
    }
}
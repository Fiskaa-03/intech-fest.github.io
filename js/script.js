function openLink(tabname, element) {
    let tab_content, tablink;
    
    tab_content = document.getElementsByClassName('content-strength-desc');
    for (let i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = 'none';
    }

    document.getElementById(tabname).style.display = 'block';
    
}

document.getElementById("default").click();

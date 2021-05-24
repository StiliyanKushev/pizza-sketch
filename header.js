window.onload = () => {
    let home = document.getElementById("home-section");
    let about = document.getElementById("about-section");
    let top = document.getElementById("toppicks-section");
    let contact = document.getElementById("contact-section");
    let menu = document.getElementById("menu-section");    

    let [_home, _store, _about, _contact] = document.getElementById("header-navigation").children[0].children;
    let [_orderNow, _learnMore] = document.getElementById("home-buttons").children;

    applyOnclick();
    manipulateHeader();

    function applyOnclick(){
        _orderNow.addEventListener("click",() => scrollView(top));
        _learnMore.addEventListener("click",() => scrollView(about));
        _home.addEventListener("click",() => scrollView(home));
        _about.addEventListener("click",() => scrollView(about));
        _contact.addEventListener("click",() => scrollView(contact));
        _store.addEventListener("click",() => scrollView(menu));
    }
    
    function manipulateHeader(){
        const header = document.getElementsByTagName("header")[0];
        const logo = header.getElementsByTagName("img")[0];
    
        const light = () => {
            if("light" in header.classList) return;
            header.classList.add("light");
            let path = logo.src.split("/");
            path[path.length - 1] = "logo-light.png";
            logo.src = path.join("/");
        }
    
        const dark = () => {
            if(!"light" in header.classList) return;
            header.classList.remove("light");
            let path = logo.src.split("/");
            path[path.length - 1] = "logo-dark.png";
            logo.src = path.join("/");
        }
        
        const updateHeader = () => {
            // get the sections
            let home = document.getElementById("home-section").getBoundingClientRect().y <= 0;
            let about = document.getElementById("about-section").getBoundingClientRect().y <= 0;
            let top = document.getElementById("toppicks-section").getBoundingClientRect().y <= 0;
            let contact = document.getElementById("contact-section").getBoundingClientRect().y <= 0;
            let menu = document.getElementById("menu-section").getBoundingClientRect().y <= 0;
    
            let isLight = false;
    
            if(home) isLight = false;
            if(about) isLight = true;
            if(top) isLight = true;
            if(contact) isLight = false;
            if(menu) isLight = true;
    
            isLight ? light() : dark();
        }
    
        document.addEventListener("scroll", updateHeader);
    }
    
    function scrollView(el){
        el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
}
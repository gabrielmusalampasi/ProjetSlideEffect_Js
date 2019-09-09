let index_slide = 1;

function slides (n) {
    //recuperer les containeur respective des slides
    let slides_items = document.querySelectorAll("div.item_slide");

    //les cercles
    let circle_span = document.querySelectorAll(".dot");

    if( n > slides_items.length){
        index_slide = 1;
    }
    if ( n < 1){
        index_slide = slides_items.length;
    }

    //on cache tout les items de slide par defaut
    for( let i = 0; i < slides_items.length; i++ ){
        slides_items[i].style.display = "none";
    }

    //eteindre toutes span cicrculaire
    for (let i=0; i < circle_span.length; i++){
        circle_span[i].classList.remove("active");
    }
    //on va afficher le slide relativement a l'indec actuel
    slides_items[index_slide - 1].style.display = "flex";
    //on allume le cercle correspondant au slide actuellement afficher
    circle_span[index_slide - 1].classList.add("active");

}
//appel du gestionnaire de slide
slides(index_slide);

let prev = document.querySelector("a.prev");
let next = document.querySelector("a.next");

prev.addEventListener("click", function (e) {
    index_slide = index_slide - 1;
    slides(index_slide);
});

next.addEventListener("click", function (e) {
    index_slide = index_slide + 1;
    slides(index_slide);
});

let circle = document.querySelectorAll("span.dot");

for(let i = 0; i < circle.length; i++){
    let current_circle = circle[i];
    current_circle.addEventListener("click", function (e) {
        index_slide = (i + 1);
        slides(index_slide);
    })
}

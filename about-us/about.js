$(function() {

    //navbar css-js copied from index.js
    $("#dropdown").css("display", "none")

    $("#button").click(function() {
        $("#dropdown").slideToggle()
        $(this).find("img").toggle(100)
        $("#logo").find("img").toggle()
    });

    // manual carousel controls (explicity for about-us)
    $('.dnext').click(function() { $('#design').carousel('next'); return false; });
    $('.dprev').click(function() { $('#design').carousel('prev'); return false; });
    $('.wnext').click(function() { $('#write').carousel('next'); return false; });
    $('.wprev').click(function() { $('#write').carousel('prev'); return false; });
    $('.enext').click(function() { $('#edit').carousel('next'); return false; });
    $('.eprev').click(function() { $('#edit').carousel('prev'); return false; });

    $('.carousel').carousel({
        interval: 4500
    });

    var name = "";
    var designers = ["Bairu Li",
        "Felix Zhu",
        "Mariam Saleh",
        "Michelle Lin",
        "Shuquan Huang",
        "Mrs. Torres",
        "Wilson Zhang",
        "Yahia Elhag",
        "Zhiyuan Chen"
    ];

    var writers = ["Aaron Rodriguez",
        "Abrar Uddin",
        "Alex Cosme",
        "Ariana Ortiz",
        "Benny Chen",
        "Chris Toledo",
        "David Huang",
        "Donald Tang",
        "Dorion Kica",
        "Edwin Papalotzi",
        "Irene Chen",
        "Janine Zhang",
        "Jessica Paez",
        "Jordi Martinez",
        "Kaitlyn Lee",
        "Kashif Naseer",
        "Kenny Parra",
        "Mandy Mei",
        "Melissa Palapa",
        "Michelle Wu",
        "Ming Chen",
        "Munisa Ziyadullaeva",
        "Nyi Nyi Aung",
        "Serin Sarsour",
        "Sidney Chen",
        "Steve Xue",
        "Tony Lin"
    ];

    var editors = ["Aaron Kong",
        "Amy Liu",
        "Brian Lin",
        "Jackson Wu",
        "Jerry Li",
        "Kevin Hernandez",
        "Lianys Feliciano",
        "Melissa Romano",
        "Ronnie Lin",
        "Syeda Afroj",
        "Terry Xu",
        "Tommy Lin",
        "Vanessa Rong"
    ];

    const item = '<div class="carousel-item">';
    const active = '<div class="carousel-item active">';
    const code1 = '<div class="card" style="width: 100%;"><div class="card-header">';
    var pic;
    const code2 = '</div><div class="card-body" style="text-align:center; background-color:';
    var colour = "lightblue";
    const code3 = '"><p class="list-group-item"><a href="#" class="card-link">';
    const code4 = '</a></p></div></div></div>';
    var target;        //target selection-group

    function carouselCards() {
        pic = '<img class="card-img-top" src="../photos/' + name + '.jpg" width=100>';
        if (i > 0) {
            target.append(item + code1 + pic + code2 + colour + code3 + name + code4);
        }
        else {
            target.append(active + code1 + pic + code2 + colour + code3 + name + code4);
        }
        
    }

    for (i = 0; i < designers.length; i++) {
        name = designers[i];
        target = $("#design > div");
        carouselCards();
    }

    for (i = 0; i < writers.length; i++) {
        name = writers[i];
        target = $("#write > div");
        carouselCards();
    }

    for (i = 0; i < editors.length; i++) {
        name = editors[i];
        target = $("#edit > div");
        carouselCards();
    }

});

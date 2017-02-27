var connections = [
    github = {
        link: "https://github.com/VinnyV88",
        imgSrc: "assets/images/github.png"
    },
    linkedin = {
        link: "https://www.linkedin.com/in/vinnyv88",
        imgSrc: "assets/images/LinkedIn.png"
    },
    stackFlow = {
        link: "http://stackexchange.com/users/5347903/vincent-visconti",
        imgSrc: "assets/images/stackoverflow.png"
    },
    facebook = {
        link: "https://www.facebook.com/VinnyV88",
        imgSrc: "assets/images/Facebook.png"
    },
    twitter = {
        link: "https://twitter.com/VinnyV88",
        imgSrc: "assets/images/Twitter.png"
    },
    instagram = {
        link: "https://www.instagram.com/vinny88v/",
        imgSrc: "assets/images/Intsagram.png"
    }
];

for (var i = 0; i < connections.length; i++) {

    var $img = $('<img>').addClass('img-responsive link-ani footer-flex-item-logo').attr('src', connections[i].imgSrc);
    var $a = $('<a>').attr('href', connections[i].link).attr('target', '_blank');

    $a.html($img);

    $(".footer-connect").append($a);

};
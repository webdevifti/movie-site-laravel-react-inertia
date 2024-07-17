import poster from "./thumbnails/1.jpg";
import director from "./director/1.jpg";
import screen1 from "./screenshots/1.png";
import screen2 from "./screenshots/2.png";
import screen3 from "./screenshots/3.png";
import actor1 from "./actor/1.jpg";
import actor2 from "./actor/2.jpg";
import actor3 from "./actor/3.jpg";
import actor4 from "./actor/4.jpg";

const single_movie = [
    {
        id: 1,
        title: "Bad Cops: Season 1 Hindi HD",
        original_title: "Bad Cops",
        slug: "dab-cops-season-one",
        releasing_year: "3 July 2024",
        category: [{ name: "South Korean", slug: "south-korean" }],
        rating: 7.9,
        genres: [
            {
                name: "Action",
                slug: "action",
            },
            {
                name: "Adventure",
                slug: "adventure",
            },
            {
                name: "Fantasy",
                slug: "fantasy",
            },
            {
                name: "Dual Audio",
                slug: "dual-audio",
            },
        ],
        poster: poster,
        info: {
            screenshots: [
                {
                    screen: screen1,
                },
                {
                    screen: screen2,
                },
                {
                    screen: screen3,
                },
            ],
            description:
                "Alienoid 2 (2024) Alienoid Return to the Future (2024) Ean has a critical missionto return to the future to save everyone. However, she becomes trapped in the distant past while trying to prevent the escape of alien prisoners who are locked upin the bodies of humans. Meanwhile, Muruk, who helps Ean escape various predicaments, is unnerved when he begins sensing the presence of a strange being in his body. Traveling through the centuries, they are tryingto prevent the explosion of the haava…",
        },
        trailer:
            "https://www.youtube.com/embed/LK7-_dgAVQE?si=w6snnLPC4N-n60Px",
        links: [
            {
                download_url: "",
                quality: "1080 HEVC",
                size: "",
                language: "Dual Audio",
            },
            {
                download_url: "",
                quality: "1080p",
                size: "",
                language: "Dual Audio",
            },
            {
                download_url: "",
                quality: "720 HD",
                size: "",
                language: "Dual Audio",
            },
            {
                download_url: "",
                quality: "480",
                size: "",
                language: "Dual Audio",
            },
            {
                download_url: "",
                quality: "320",
                size: "",
                language: "Dual Audio",
            },
        ],
        casts: {
            director: {
                name: "Choi Dong-hoon",
                role: "Director",
                img: director,
            },
            actors: [
                {
                    name: "actor one",
                    movie_name: "Role Name",
                    img: actor1,
                    role: "actor"
                },
                {
                    name: "actor two",
                    movie_name: "Role Name",
                    img: actor2,
                    role: "actor"
                },
                {
                    name: "actor three",
                    movie_name: "Role Name",
                    img: actor3,
                    role: "actor"
                },
                {
                    name: "actor four",
                    movie_name: "Role Name",
                    img: actor4,
                    role: "actor"
                },
            ],
        },
    },
];
export default single_movie;

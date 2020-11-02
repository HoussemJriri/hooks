import { v4 as uuidv4 } from "uuid";
export function movies(){
    return([
        {
          id: "1",
          title: "venom",
          description: ` Venom est un film de super-héros américain réalisé par Ruben
          Fleischer, sorti en 2018. Il s'agit de l’adaptation
          cinématographique du personnage Venom, ennemi de Spider-Man,
          publié par Marvel Comics. Ce film est le premier volet de
          l'univers de fiction développé par Columbia Pictures et Marvel
          Entertainment, le Sony Pictures Universe of Marvel Characters.`,
          postUrl:
            "https://pm1.narvii.com/7055/f77a28962c4af7fd67f28c2a17d67713d702f4fbr1-1024-1280v2_uhq.jpg",
          rating: 4,
          trailerUrl:"https://www.youtube.com/embed/xLCn88bfW1o"
        },
        {
          id:"2",
          title: "Spider-Man Far From Home ",
          description: `Spider-Man: Far From Home, ou Spider-Man : Loin des siens au
          Québec, est un film de super-héros américain réalisé par Jon
          Watts, sorti en 2019. Vingt-troisième film de l'univers
          cinématographique Marvel et onzième et dernier de la phase III, il
          est le deuxième opus de Spider-Man joué par Tom Holland dans cet
          univers après Spider-Man: Homecoming, du même réalisateur, sorti
          en 2017. En dépassant un milliard de dollars de recettes mondiales
          en quatre semaines d'exploitation, il devient le plus lucratif des
          films parmi les différentes séries Spider-Man1.`,
          postUrl:
            "https://fr.web.img5.acsta.net/pictures/19/06/13/15/28/4575985.jpg",
          rating: 3,
          trailerUrl:"https://www.youtube.com/embed/Nt9L1jCKGnE"
    
        },
        {
          id: "3" ,
          title: "Spenser",
          description: `Spenser Confidential est un film d'action américain réalisé par
          Peter Berg, sorti en 2020 en exclusivité sur Netflix. Il s'agit
          d'une adaptation du personnage de détective privé Spenser, créé
          par l'écrivain Robert B. Parker et ensuite repris par Ace Atkins.`,
          postUrl:
            "https://fr.web.img3.acsta.net/pictures/20/01/21/07/49/3503136.jpg",
          rating: 4,
          trailerUrl:"https://www.youtube.com/embed/bgKEoHNi3Uc"
        },
      ])
}

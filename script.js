listaFilme = [
    {
      titulo: "Perdido em Marte",
      sinopse: "Me perdi em marte...",
      urlimg: "https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg",
      url: "https://www.adorocinema.com/filmes/filme-221524/"
    },
    {
      titulo: "Interstelar",
      sinopse: "Bo pro espaço...",
      urlimg: "https://images-na.ssl-images-amazon.com/images/I/91e4IzkgrKL.jpg",
      url:
        "https://www.primevideo.com/detail/0GURDFFNEFFK5UUUGQ3JT3HN1T/ref=atv_sr_fle_c_Tn74RA_1_1_1?qid=1646972537&pageTypeId=B07BMKPB33&pageTypeIdSource=ASIN&sr=1-1&language=pt_br"
    },
    {
      titulo: "Spider-Man",
      sinopse: "Varios Miranhas...",
      urlimg: "https://images-na.ssl-images-amazon.com/images/I/91BgOsdNHaL.jpg",
      url:
        "https://www.netflix.com/watch/81002747?trackId=253937124&tctx=3%2C1%2C69558d84-8774-41ed-9fe5-20b5981a44bb-14706080%2Cac673923-74e3-4cf3-ae2b-6ecc4c9eccf8_15340683X28X2298875X1646968457486%2Cac673923-74e3-4cf3-ae2b-6ecc4c9eccf8_ROOT%2C%2C%2C"
    },
    {
      titulo: "Panico",
      sinopse: "Todo mundo penerado...",
      urlimg:
        "https://i.etsystatic.com/17999342/r/il/0aad16/3098405525/il_570xN.3098405525_dfx9.jpg",
      url:
        "https://www.primevideo.com/detail/0TVOYNA71KRUKTOQXXOT1U8IC4/ref=atv_sr_fle_c_Tn74RA_2_1_2?pageTypeId=B081573X66&pageTypeIdSource=ASIN&qid=1646972497&language=pt_br&sr=1-2"
    },
    {
      titulo: "Venom",
      sinopse: "Amoeba parasita preta...",
      urlimg:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-venom-marvel-superhero-cover-slavei-hristov.jpg",
      url:
        "https://www.netflix.com/watch/80991034?trackId=13752289&tctx=0%2C0%2C122fd7a9881a1584488f615a1ac4723253df3107%3A478d030254714ae3e5a5f4f24ed11698b105e4be%2C122fd7a9881a1584488f615a1ac4723253df3107%3A478d030254714ae3e5a5f4f24ed11698b105e4be%2Cunknown%2C%2C%2CtitlesResults"
    },
    {
      titulo: "Baki",
      sinopse: "Trapezio descendente...",
      urlimg:
        "https://i.pinimg.com/originals/cf/c7/0e/cfc70e6a682cbce22d9a6377941f8f8d.jpg",
      url:
        "https://www.netflix.com/watch/80204909?trackId=13752289&tctx=0%2C0%2C5c0eb52d4f5d51879dd4e7f2062d715d7b4586a3%3Ae5958a66feebd13853f09e3f6ed10ddbcbc119ec%2C5c0eb52d4f5d51879dd4e7f2062d715d7b4586a3%3Ae5958a66feebd13853f09e3f6ed10ddbcbc119ec%2Cunknown%2C%2C%2CtitlesResults"
    }
  ];
  
listaFilme.forEach((filme) => {
    const div = document.getElementById("conteudo");
    const itemContainer = document.createElement("div");

    itemContainer.classList.add("itemContainer");

    itemContainer.innerHTML = ` <img class='cover-img' src='${filme.urlimg}'></img>
                                <div class='text'>
                                    <h3 class='titulo'>${filme.titulo}</h3>
                                    <p>${filme.sinopse}</p>
                                    <button class='assistirBtn' onclick=" window.open('${filme.url}','_blank')">Assistir</button>
                                </div>                            
`;
  
    div.appendChild(itemContainer);
});

function listaInputs(event) {
    console.log(event);
  }
  
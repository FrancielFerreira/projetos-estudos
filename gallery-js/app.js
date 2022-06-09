const gallery = document.querySelectorAll('.galeria .img_galeria'),
modal = document.querySelector(".modal"),
modalImg = modal.querySelector("img"),
closeModal = modal.querySelector("#btn_close_modal"),
currentImg = document.querySelector(".current_img"),
totalImg = document.querySelector(".total_img");

window.onload = ()=> { //apenas após carregar a página
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i // transformando o contador em uma nova variável
        let indexTitleImg 
        gallery[i].onclick = ()=> {
            indexTitleImg = newIndex // troca o índice da imagem na legenda
            function preview() {
                currentImg.textContent = newIndex + 1;
                let imageSelectedUrl = gallery[newIndex].querySelector("img").src; // pega o link da imagem clicada
                modalImg.src = imageSelectedUrl; // adiciona o link da imagem clicada a imagem do modal
            }

            // botão anterior e próximo
            const prevBtn = document.querySelector("#prev_img_modal");
            const nextBtn = document.querySelector("#next_img_modal");

            if(newIndex == 0) {
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = ()=> {
                newIndex--; //decremento do index
                if(newIndex == 0) {
                    preview(); 
                    prevBtn.style.display = "none";
                } else {
                    preview(); //chamando função novamente para atualizar a imagem
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=> {
                newIndex++; //incremento do index
                if(newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview(); //chamando função novamente para atualizar a imagem
                    prevBtn.style.display = "block";
                }
            }


            preview(); // chamando a função de click
            modal.classList.add("modal_active");
            document.querySelector("body").style.overflow = "hidden";

            closeModal.onclick = ()=> {
                newIndex = indexTitleImg //usa o primeiro click na imagem como índice da variável newIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                modal.classList.remove("modal_active");
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
}

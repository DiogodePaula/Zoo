const lista = [];

class Zoo {
    constructor(){
        this.especie = document.getElementById("txtEspecie");
        this.porte = document.getElementById("txtPorte");
        this.alimentacao = document.getElementById("txtAlimentacao");
        this.quantidade = document.getElementById("txtQuantidade"); 
        this.btnAdicionar1 = document.getElementById("btnAdicionar");
        this.botaoAdd();
    }

    botaoAdd(){
        this.btnAdicionar1.onclick = event => this.adicionar();
    }

    adicionar(){
        document.getElementById("divPai").innerHTML = "";
        const animalZoo = { 
            especieZoo: this.especie.value,
            porteZoo: this.porte.value,
            alimentacaoZoo: this.alimentacao.value,
            quantidadeZoo: this.quantidade.value
        }
        
        if(animalZoo.especieZoo && animalZoo.porteZoo && animalZoo.alimentacaoZoo && animalZoo.quantidadeZoo){
            lista.push(animalZoo);
        } else {
            alert("Por favor preencha todos os campos!")
        }

        console.log(lista);

        for(let i = 0; i < lista.length; i++){
            document.getElementById("divPai").innerHTML += `<br>
            <label class="dinamic">Espécie:${lista[i].especieZoo}/
                   Porte:${lista[i].porteZoo}/
                   Alimentação:${lista[i].alimentacaoZoo}/
                   Quantidade:${lista[i].quantidadeZoo}
            </label>
            <br>
            <br>
            `
        }
    } 

}
new Zoo();
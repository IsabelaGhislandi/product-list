//Método construtor. Todos os nossos atributos colocamos no método construtor. Priemira função que é chamada toda vez que executa essa classe
class Produto {
    constructor() {
        //atributos
        this.id = 1
        this.arrayProducts = []
        this.editId = null
    }

    //Toda vez que chamar essa função adicionar ele vai instanciar um novo objeto do tipo produto
    salvar() {
       let product = this.lerDados()

       if (this.validate(product)) {
     
        if(this.editId == null) {
           this.add(product)
          
       } else {
     
        this.atualizar(this.editId, product)
       
        }
               

       
       this.listaTabela()
       this.cancelar()
    }

}

    listaTabela() {
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProducts.length; i++) {
            let tr = tbody.insertRow()
            let tdId = tr.insertCell()
            let tdName = tr.insertCell()
            let tdValue = tr.insertCell()
            let tdAcao = tr.insertCell()

            tdId.innerText = this.arrayProducts[i].id
            tdName.innerText = this.arrayProducts[i].name
            tdValue.innerText = this.arrayProducts[i].value

           
            let imgEdit = document.createElement('img')
            let imgDelete = document.createElement('img')

            imgEdit.src = 'img/edit.svg'
            imgDelete.src = 'img/delete.svg'
            let button = document.getElementById('btn-att')

           imgEdit.addEventListener("click", () => {
                let infosName = this.arrayProducts[i].name
                let infosValue = this.arrayProducts[i].value
                
                

                document.getElementById('produto').value = infosName
                document.getElementById('valor').value = infosValue
                button.innerText = 'Atualizar'
                this.editId = this.arrayProducts[i].id
        

                
            
            })
      
            

          imgDelete.addEventListener("click", () => {
            if(confirm(`vc quer mesmo deletar o produto ${this.arrayProducts[i].name} da lista ?`)) {
                produto1.deletar(this.arrayProducts[i].id)
            }
        })

            tdAcao.appendChild(imgEdit)
            tdAcao.appendChild(imgDelete)
        }

        
        
    }
    add(produto) {
        produto.value = parseFloat(product.value)
        this.arrayProducts.push(produto)
        this.id++
    }
  
    atualizar(id, produto){
       
        
        
        for(let i = 0; i < this.arrayProducts.length; i++) {
           
            if(this.arrayProducts[i].id == id) {
               
               this.arrayProducts[i].name = produto.name
               this.arrayProducts[i].value = produto.value
           }
        }
    }
   

    lerDados() {
        let product = {}
        
        product.id = this.id
         product.name = document.getElementById('produto').value 
         product.value = document.getElementById('valor').value 

        return product
    }

    validate(produto) {
        let message = ''

        if (produto.name == '') {
            message += 'Informa o nome do produto \n'
        }
        if (produto.value == '') {
            message += 'Informa o preço do produto \n'
         }

         if ( message != '') {
            alert(message)
            return false
         }

         return true
    }

    cancelar() {
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''
        document.getElementById('btn-att').innerText = 'Salvar'
        this.editId = null
    }

    deletar(id){

    
        let tbody = document.getElementById('tbody')

        

        for(let i = 0; i < this.arrayProducts.length; i++) {
            if(this.arrayProducts[i].id == id){
                this.arrayProducts.splice(i, 1)
                tbody.deleteRow(i)
            }

        

    }

    }
}

//no html ele pegar esse novo objeto 
let produto1 = new Produto()
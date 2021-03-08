
const criarPost = () => {
    const form = document.getElementById("formulario") 
    const titleBlog = document.getElementById("titulo-post")    // ---> exerc.2
    const authorBlog = document.getElementById("autor-post")
    const contentBlog = document.getElementById("conteudo-post")
    const imageBlog = document.getElementById("image-post")

    if ((titleBlog.value == "") || (authorBlog.value == "") || (contentBlog.value == "") || (imageBlog.value == "")){     
       
        alert("Teste")
        return false
    }
    
    if(!imageBlog.value.includes("http")){               //*---> DESAFIO 1 - adicionar imagem
        imageBlog.value = ""  
        alert("Favor incluir imagem jpg")
    } 
    
    const postBlog = {
        title: titleBlog.value,
        author: authorBlog.value,
        content: contentBlog.value,
        
    }

    let arrayObjects = [] 
    arrayObjects.push(postBlog)  //---> exercício 3
    console.log(arrayObjects)

    titleBlog.value = ""
    authorBlog.value = ""
    contentBlog.value = ""


    const container = document.getElementById('container-de-posts') 
        container.innerHTML += "<h1>" + postBlog.title + "</h1>"//---> exercício 4 e 5
        container.innerHTML += "<h3>" + postBlog.author + "</h3>"
        container.innerHTML += "<p>" + postBlog.content + "</p>"
        container.innerHTML += `<img class="img" src="${imageBlog.value}">`

}
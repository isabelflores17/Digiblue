let apiFetch = new ApiFetch();
createProduct = async(event) => {
    console.log("Evento", event);
    event.preventDefault(); //no recarga la pagina
    //0- Validar informacion
    //1- Crear el objeto que voy a guardar

    let form = event.target;
    // let product = new Product();

    let product = new Product(0, form.txtName.value, form.txtMarca.value, form.txtModelo.value, parseInt(form.txtPrecio.value), form.txtAñoLanzamiento.value, form.txtPassword.value);
    console.log("Objeto", product);

    //2- Enviar el objeto(User) creado a backEnd
    product = await apiFetch.Post("Product/CreateProduct", product);
    if (product.Id > 0) {
        alert("Producto Registrado");
        $("#myModal").modal("hide");
        $(".modal-backdrop").hide();


    } else {
        alert("Producto no registrado");

    }


    //2.1 Obtener la informacion en el backEnd  
    //2.2 Enviar la informacion a la base de datos
    //2.3 Regresar la informacion

    //3-Validar la respuesat del backEnd
}

login = async(event) => {
    event.preventDefault();
    let product = new Product()
    product.Name = event.target.txtNameLogin.value;
    product.Password = event.target.txtPasswordLogin.value;

    let response = await apiFetch.Get(`Product/Login/${product.Name}/${product.Password}`);
    let json = await response.json();
    switch (response.status) {
        case 200:
            //redirecciono
            localStorage.setItem("product", JSON.stringify(json));
            window.location = "http://" + window.location.host + "/html/Product.html";
            break;
        case 404:
            alert(json.Message);
            break;
        default:
            break;
    }



}
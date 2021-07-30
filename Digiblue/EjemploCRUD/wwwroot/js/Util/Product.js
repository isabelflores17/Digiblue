let product = localStorage.getItem("product");
let apiFetch = new ApiFetch();

load = () => {


    if (!product)
        window.location = "http://" + window.location.host;
    product = JSON.parse(product);
    let tagNames = document.getElementsByClassName("lblName");


    for (let index = 0; index < tagNames.length; index++) {
        const element = tagNames[index];
        element.innerHTML = product.Name;

    }
    console.log(tagNames);

    txtName.value = product.Name;
    txtMarca.value = product.Marca;
    txtModelo.value = product.Modelo;
    txtPrecio.value = product.Precio;
    txtAñoLanzamiento.value = product.AñoLanzamiento;
    txtPassword.value = product.Password;
}
updateProduct = async(event) => {
    event.preventDefault();
    let form = event.target;
    product = new Product(product.Id, form.txtName.value, product.Marca, form.txtModelo.value, form.txtPrecio.value, form.txtAñoLanzamiento.value, form.txtPassword.value);


    let response = await apiFetch.Post("Product/UpdateProduct", product);
    if (response.IsUpdated) {
        alert("Producto actualizado");

        localStorage.setItem("product", JSON.stringify(product))
    } else
        alert("No se pudo actualizar el producto");



}

deleteProduct = async() => {



    let response = await apiFetch.Post("User/DeleteProduct/" + product.Id, {});

    if (response.IsDeleted)
        window.location = "http://" + window.location.hostname;
    else {
        $("#myModal").modal("hide");
        $(".modal-backdrop").hide()


        $("#myModalAlert").modal("show");
        $(".modal.backdrop").show();
    }


}
class ApiFetch {

    urlBase = "http://localhost:5000/"; //url de mi proyecto

    Get = async(path) => {
        let url = this.urlBase + path;

        let requesInit = {
            method: "GET",
            headers: { "content-type": "application/json" }
        }


        let response = await fetch(url, requesInit);
        return response;
    }

    Post = async(path, data) => {
        let url = this.urlBase + path;
        //http://localhost:5000/User/CreateUser
        console.log(url);
        //fetch aplica el protocolo HTTP
        //Get >  Obtener o consultar informacion
        //post > Guardar, Actualizar o eliminar informacion
        let body = "";
        if (data) {
            body = JSON.stringify(data);
        }
        let requesInit = {
            method: "POST",
            body: body,
            headers: { "content-type": "application/json" }
        }
        let response = await fetch(url, requesInit);
        let json = await response.json();
        return json;

    }
    Update = async() => {
        let url = this.urlBase + path;
        let requesInit = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        }
        let response = await fetch(url, requesInit);
        let json = await response.json();
        return json;



    }


}
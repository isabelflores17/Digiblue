using System.ComponentModel;
using System.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace EjemploCRUD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductDAO dao;

        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
            dao = new ProductDAO();
            
        }
[HttpGet("Login/{name}/{password}")]
public IActionResult Login(string name, string password){

    var product = new Product(){
        Name = name,
        Password = password
    };

    product = dao.Login(product);
    if(product == null)
       
    return NotFound(new { Message= $"El producto {name}, no ha sido encontrado"});


    return Ok(product);

}


[HttpPost("CreateProduct")]

   public IActionResult CreateProduct([FromBody]Product product){

      product = dao.CreateProduct(product);

    return Ok(product);

   }
   [HttpPost("UpdateProduct")]

   public IActionResult UpdateProduct([FromBody]Product product){

    bool isUpdated = dao.UpdateProduct(product);

       return Ok(new {IsUpdated = isUpdated});
   }
        [HttpPost("DeleteProduct/{id}")]
        public IActionResult DeleteProduct(int id){

            var isDeleted = dao.DeleteProduct(id);
            return Ok(new {IsDeleted = isDeleted});
        }

 }
}


using Microsoft.AspNetCore.Mvc;

namespace CinemaProject.Controllers
{
    public class PublicController : Controller
    {
        public IActionResult Unauthorized(string infoMessage)
        {
            return View("Unauthorized", infoMessage);
        }
    }
}

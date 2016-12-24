using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularForm.Models;

namespace AngularForm.Controllers
{
    public class PlayerController : Controller
    {

        private MyContext _context = null;

        public PlayerController()
        {
            _context = new MyContext();
        }
        
        // GET: Player
        public JsonResult AddPlayer(Player player)
        {
            _context.Players.Add(player);
            _context.SaveChanges();

            // Some datbase server version issues
            // (LocalDB)\v11.0
            // http://stackoverflow.com/questions/26346647/the-database-cannot-be-opened-because-it-is-version-782-this-server-supports-ve


            return Json(new { status = "Player Loaded Sucesfully" });
        }

        public JsonResult GetPlayer()
        {
            List<Player> players = _context.Players.ToList();
            return Json(new { list = players }, JsonRequestBehavior.AllowGet);
            
        }
    }
}
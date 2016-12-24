using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularForm.Models
{
    public class MyContext : DbContext
    {
        public DbSet<Player> Players { get; set; }
    }
}
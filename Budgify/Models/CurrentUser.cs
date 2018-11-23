using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.WebPages;
using System.Web.Mvc;

namespace Budgify.Models
{
    [AllowAnonymous]
    
    public class CurrentUser : IdentityUser
    {
        public virtual MyUserInfo MyUserInfo { get; set; }
    }

    public class MyUserInfo
    {
        public int Id { get; set; }
        public string inc { get; set; }
        public string exp { get; set; }
    }
    public class MyDbContext : IdentityDbContext<CurrentUser>
    {
        public MyDbContext()
            : base("DefaultConnection")
        {
        }
        public System.Data.Entity.DbSet<MyUserInfo> MyUserInfo { get; set; }
    } 
}
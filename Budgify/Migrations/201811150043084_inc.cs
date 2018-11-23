namespace Budgify.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class inc : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "inc", c => c.String(nullable: false));
            AddColumn("dbo.AspNetUsers", "exp", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "exp");
            DropColumn("dbo.AspNetUsers", "inc");
        }
    }
}

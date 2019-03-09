using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CarRentalApi.Models
{
    public partial class CarRentalContext : DbContext
    {
        public CarRentalContext()
        {
        }

        public CarRentalContext(DbContextOptions<CarRentalContext> options)
            : base(options)
        {
        }
        
        public virtual DbSet<Car> Cars { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=KELPI\\SQLEXPRESS;Database=CarRental;Trusted_Connection=True;");
            }
        }

         protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
             modelBuilder.HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

             modelBuilder.Entity<Car>(entity =>
             {
                 entity.Property(e => e.Brand)
                     .IsRequired()
                     .HasMaxLength(250);

                 entity.Property(e => e.Model)
                     .IsRequired()
                     .HasMaxLength(250);

                 entity.Property(e => e.RegistrationNumber).IsRequired();

                 entity.Property(e => e.Сlass)
                     .IsRequired()
                     .HasMaxLength(100);
             });

             modelBuilder.Entity<Order>(entity =>
             {
                 entity.Property(e => e.BeginDate).HasColumnType("date");

                 entity.Property(e => e.EndDate).HasColumnType("date");
               
             });

             modelBuilder.Entity<User>(entity =>
             {
                 entity.Property(e => e.Birth).HasColumnType("date");

                 entity.Property(e => e.LicenseNumber)
                     .IsRequired()
                     .HasMaxLength(250);

                 entity.Property(e => e.Name)
                     .IsRequired()
                     .HasMaxLength(200);

                 entity.Property(e => e.Surname)
                     .IsRequired()
                     .HasMaxLength(200);
             });
         }
    }
}

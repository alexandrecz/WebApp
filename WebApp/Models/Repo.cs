using System;
using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Repo
    {
        public Repo()
        {

        }

        public int Id { get; set; }

        public string Name { get; set; }
        public string Full_Name { get; set; }
        public string Description { get; set; }
        public string Language { get; set; }
        public RepoOwner Owner { get; set; }
        public DateTime? Updated_At { get; set; }
        public bool IsFavourite { get; set; }
    }



    public class RepoOwner
    {
        public RepoOwner()
        {

        }

        public string Login { get; set; }
    }
}
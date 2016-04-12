using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using WebApp.Models;

namespace WebApp.Controllers
{

    public class GitHubAlexandreController : ApiController
    {
        #region Attributes

        private WebClient client;
        private static List<Repo> repos = new List<Repo>();

        #endregion

        #region Methods

        public IEnumerable<Repo> GetAll()
        {
            this.client = new WebClient();
            this.client.Headers.Add("User-Agent: Other");

            var result = client.DownloadString(new Uri("https://api.github.com/users/alexandrecz/repos?type=owner"));
            if (result != null)
            {
                repos = JsonConvert.DeserializeObject<List<Repo>>(result);
            }

            List<Repo> favs = new Helper.IOHelper().GetRepos();

            foreach (var item in repos)
            {
                foreach (Repo favRepo in favs)
                {
                    if (favRepo.Name == item.Name)
                    {
                        item.IsFavourite = favRepo.IsFavourite;
                    }
                }
            }

            return repos;
        }

        public Repo GetRepoByName(string name)
        {
            Repo repo = repos.Find(f => f.Name == name);
            return (repo);
        }


        public void Post([FromBody]Repo repo)
        {
            FavouriteController fav = new FavouriteController();
            fav.Post(repo);
        }

        #endregion
    }
}
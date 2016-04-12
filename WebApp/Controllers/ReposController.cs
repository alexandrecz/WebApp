using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class ReposController : ApiController
    {
        #region Attributes

        private WebClient client;
        static List<Repo> repos = new List<Repo>();

        #endregion

        public IEnumerable<Repo> GetAll(string name)
        {
            this.client = new WebClient();
            this.client.Headers.Add("User-Agent: Other");

            if (!string.IsNullOrEmpty(name))
            {
                var result = client.DownloadString(new Uri("https://api.github.com/search/repositories?q=" + name));
                if (result != null)
                {
                    dynamic ob = JsonConvert.DeserializeObject<dynamic>(result);
                    repos = JsonConvert.DeserializeObject<List<Repo>>(ob.items.ToString());
                }

            }

            return repos;
        }

        /// <summary>
        /// Retorna o repositorio pelo id
        /// </summary>
        /// <param id="id"></param>
        /// <returns></returns>
        public Repo GetRepoByName(int id)
        {
            Repo repo = repos.Find(f => f.Id == id);
            return (repo);
        }


        /// <summary>
        /// adiciona o repositorio a lista de favoritos
        /// </summary>
        /// <param name="repo"></param>
        public void Post([FromBody]Repo repo)
        {
            FavouriteController fav = new FavouriteController();
            fav.Post(repo);
        }

    }
}
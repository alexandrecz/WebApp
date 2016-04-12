using System.Collections.Generic;
using System.Web.Http;
using WebApp.Helper;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class FavouriteController : ApiController
    {
        #region Attributes

        private static List<Repo> favRepos = new List<Repo>();
        private IOHelper helper;

        #endregion

        #region Methods


        public IEnumerable<Repo> GetAll()
        {
            helper = new Helper.IOHelper();
            favRepos = helper.GetRepos();

            return favRepos;
        }

        
        public Repo GetFavourite(int id)
        {
            Repo fav = favRepos.Find(f => f.Id == id);
            return (fav);
        }


        public void Post([FromBody]Repo repo)
        {
            helper = new Helper.IOHelper();
            favRepos = helper.GetRepos();

            if (!favRepos.Exists(f => f.Id == repo.Id))
            {
                favRepos.Add(repo);
            }

            helper.SaveRepos(favRepos);
        }

        #endregion
    }
}
using Newtonsoft.Json;
using System.Collections.Generic;

using System.IO;
using System.Web;
using WebApp.Models;

namespace WebApp.Helper
{
    public class IOHelper
    {

        #region Attributes

        private string repoFile = string.Format(@"..\{0}\data.json", System.Configuration.ConfigurationManager.AppSettings["RepoFolder"]);

        #endregion

        #region Constructor

        public IOHelper()
        {

        }

        #endregion

        #region Methods

        public void SaveRepos(List<Repo> repos)
        {
            JsonSerializer serializer = new JsonSerializer();
            using (FileStream file = new FileStream(HttpContext.Current.Server.MapPath(repoFile), FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
            {

                using (StreamWriter sw = new StreamWriter(file))
                {
                    using (JsonWriter writer = new JsonTextWriter(sw))
                    {
                        serializer.Serialize(writer, repos);

                    }
                    sw.Close();
                }
                file.Close();
            }
        }


        public List<Repo> GetRepos()
        {
            if (File.Exists(HttpContext.Current.Server.MapPath(repoFile)))
            {
                using (StreamReader r = new StreamReader(HttpContext.Current.Server.MapPath(repoFile)))
                {
                    string json = r.ReadToEnd();

                    return string.IsNullOrEmpty(json) ? new List<Repo>() : JsonConvert.DeserializeObject<List<Repo>>(json);
                }
            }
            else
            {
                using (FileStream file = new FileStream(HttpContext.Current.Server.MapPath(repoFile), FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
                {
                    file.Close();
                    return new List<Repo>();
                }
            }
        }

        #endregion
    }

}
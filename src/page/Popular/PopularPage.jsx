import { useEffect, useState } from "react";
import fetchPopularRepos from "../../api/requests";
import loader from '../../img/loader.svg';
import Tabs from "./Tabs";

const PopularPage = () => {
    const [selectedLanguage, setselectedLanguage] = useState('All');
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const languageParam = searchParams.get('language');
        if (languageParam) {
            setselectedLanguage(languageParam);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        fetchPopularRepos(selectedLanguage)
        .then(data => setRepos(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));

        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('language', selectedLanguage);
        window.history.replaceState(null, '', `?${searchParams.toString()}`);
    }, [selectedLanguage]);

    return(
        <>
            <Tabs selectedLanguage={selectedLanguage} setselectedLanguage={setselectedLanguage} />
            <ul className="popular-list">
                {repos.map((repo, i) => 
                    <li key={repo.id} className="popular-item list-item">
                        <div className="popular-rank">#{i + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url} alt="Avatar" className="avatar"/>
                            </li>
                            <li>
                               <a href={repo.html_url} target="blank">{repo.name}</a> 
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )}
            </ul>
            {loading ? 
            <div className="loader">
                <img src={loader}  className="loader-img" alt="loader"/>
            </div> : null}
        </>
    )
}

export default PopularPage;
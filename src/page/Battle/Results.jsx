import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeBattle } from "../../api/requests";
import Player from "./Player";
import loader from '../../img/loader.svg';

const Results = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);


    useEffect(() => {
        const params = new URLSearchParams(location.search);

        makeBattle([params.get('playerOneName'), params.get('playerTwoName')])
        .then(([winner, loser]) => {
            setWinner(winner);
            setLoser(loser);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, []);

    return(
        <div className="row">
            {winner && <Player
                label='Winner'
                score={winner.score}
                profile={winner.profile}
            />}
           {loser && <Player
                label='Loser'
                score={loser.score}  
                profile={loser.profile}        
            /> }
            {!loading ? null :
            <div className="loader">
                <img src={loader}  className="loader-img" alt="loader"/>
            </div>}
        </div>
    )
}

export default Results;
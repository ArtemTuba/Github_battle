import { useState } from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";


const BattlePage = () => {
    const [playerData, setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImg: null,
        playerTwoImg: null,
    })

    const handleSubmit = (id,userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Img`]: `http://github.com/${userName}.png?size200`,
        }))
    };

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Img`]: null,
        }))
    };

    return(
        <div >
            <div className="row">
                {playerData.playerOneImg ? 
                    <PlayerPreview
                        avatar={playerData.playerOneImg}
                        username={playerData.playerOneName}
                    > 
                         <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>

                    </PlayerPreview>:
                    <PlayerInput 
                    id='playerOne'
                    label={'Player 1'}
                    onSubmit={handleSubmit}
                />}
                {playerData.playerTwoImg ? 
                    <PlayerPreview
                        avatar={playerData.playerTwoImg}
                        username={playerData.playerTwoName}> 

                        <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>

                    </PlayerPreview> :
                    <PlayerInput 
                    id='playerTwo'
                    label={'Player 2'}
                    onSubmit={handleSubmit}
                />}
            </div>
            {playerData.playerOneImg && playerData.playerTwoImg ? 
                <Link to={{
                    pathname: 'results',
                    search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                }} 
                    className="button">
                    Battle
                </Link> : null
            }
        </div>
    )
}

export default BattlePage;

import { faContactBook, faGear, faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DefaultPage from './profilePages/DefaultPage';
import MessagePage from './profilePages/MessagePage';
import FavoritePage from './profilePages/FavoritePage';
import ContractPage from './profilePages/ContractPage';
import SettingPage from './profilePages/SettingPage';

export default function MyProfile() {
    const [profile, setProfile] = useState({
        default: true,
        message: false,
        fav: false,
        contracts: false,
        settings: false,
    });

    return (
        <div>
            <Row>
                <Col sm={3} style={{borderRight: "2px solid", height: "80vh"}}>
                    <button className="m-2 border-0 bg-white" onClick={() => setProfile({default: false, message: true, fav: false, contracts: false, settings: false})}>
                        <FontAwesomeIcon className='mx-2' icon={faMessage}></FontAwesomeIcon>
                        Messages
                    </button>
                    <br></br>
                    <button className="m-2 border-0 bg-white" onClick={() => setProfile({default: false, message: false, fav: true, contracts: false, settings: false})}>
                        <FontAwesomeIcon className='mx-2' icon={faHeart}></FontAwesomeIcon>
                        Favorites
                    </button>
                    <br></br>
                    <button className="m-2 border-0 bg-white" onClick={() => setProfile({default: false, message: false, fav: false, contracts: true, settings: false})}>
                        <FontAwesomeIcon className='mx-2' icon={faContactBook}></FontAwesomeIcon>
                        Contracts
                    </button>
                    <br></br>
                    <button className='m-2 border-0 bg-white' onClick={() => setProfile({default: false, message: false, fav: false, contracts: false, settings: true})}>
                        <FontAwesomeIcon className='mx-2' icon={faGear}></FontAwesomeIcon>
                        Settings
                    </button>
                </Col>
                <Col>
                    {profile.default && <DefaultPage />}
                    {profile.message && <MessagePage />}
                    {profile.fav && <FavoritePage />}
                    {profile.contracts && <ContractPage />}
                    {profile.settings && <SettingPage />}
                </Col>
            </Row>
            
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import CompetitionService from '../services/CompetitionService';

const CompetitionView = () => {
    const [competition, setCompetition] = useState([]);
    const [participants, setParticipant] = useState([]);
    const [matches, setMatch] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getCompetitionById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCompetitionById = async () => {
        await CompetitionService.getCompetitionById(id).then((res) => {
            setCompetition(res.data.data);
            setParticipant(res.data.data.Teams);
            setMatch(res.data.data.Matches);
        });
    };

    document.title = `${competition.name} - Matchapp`;

    return (
        <div className='container mt-5 justify-content-right'>
            <h1 className='text-center'>{competition.name}</h1>
            <p className='text-center'>{competition.location}, {(moment(competition.start).format('DD MMM YYYY'))} - {(moment(competition.end).format('DD MMM YYYY'))}</p>
            
            <h4>Participants:</h4>
            <div className='row'>
                {participants.map(participant => (
                    <div className='col-md-3 mt-2' key={participant.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5>{participant.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <h4 className='mt-5'>Schedule:</h4>
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <td>#</td>
                        <td>Date</td>
                        <td colSpan={3}>Match</td>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match, index) => (
                        <tr key={match.id}>
                            <td className='text-center'>{index + 1}</td>
                            <td>{(moment(match.date).format('dddd, DD MMM YYYY'))}</td>
                            <td className='text-right'>{match.Schedules[0].Team.name}</td>
                            <td className='text-center'>VS</td>
                            <td className='text-left'>{match.Schedules[1].Team.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default CompetitionView;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompetitionService from '../services/CompetitionService';

const CompetitionList = () => {
    const [competitions, setCompetition] = useState([]);

    useEffect(() => {
        getCompetitions();
    }, []);

    const getCompetitions = async () => {
        await CompetitionService.getCompetition().then((res) => {
            setCompetition(res.data.data)
        })
    }

    document.title = `Matchapp`;

    return (
        <div className='container mt-5'>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Competition</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {competitions.map((competition, index) => (
                        <tr key={competition.id}>
                            <td className='text-center'>{index + 1}</td>
                            <td><Link to={`competitions/${competition.id}`} className='text-dark' style={{textDecoration: 'none'}}>{competition.name}</Link></td>
                            <td>{competition.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default CompetitionList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompetitionService from '../services/CompetitionService';
import moment from 'moment'

const CompetitionList = () => {
    const [competitions, setCompetition] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('full');
    const [location, setLocation] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [team, setTeam] = useState('');
    const [createStatus, setCreateStatus] = useState([]);

    const addCompetition = async (e) => {
        e.preventDefault()
        try {
            let data = {
                name,
                type,
                location,
                start,
                end,
                team
            };
            await CompetitionService.createCompetition(data).then((res) => {
                setCreateStatus(res.data)
            });
            window.location.reload();
        } catch (error) {
            console.log(error)
        };
    };

    if (createStatus.status === 'error') {
        alert(createStatus.message)
    }

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

            <div className="dropdown float-end">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    MENU
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href='/#' data-bs-toggle="modal" data-bs-target="#createModal">ADD NEW</a></li>
                </ul>
            </div>

            <table className='table table-bordered table-hover mt-5 caption-top'>
                <caption>List of Competition</caption>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Competition</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {competitions.map((competition, index) => (
                        <tr key={competition.id}>
                            <td className='text-center'>{index + 1}</td>
                            <td><Link to={`competitions/${competition.id}`} className='text-dark' style={{ textDecoration: 'none' }}>{competition.name}</Link></td>
                            <td>{competition.location}</td>
                            <td className='text-center'>{moment(competition.start).format('DD MMM YYYY')} - {moment(competition.end).format('DD MMM YYYY')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="modal fade" id="createModal">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">ADD NEW COMPETITION</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={addCompetition}>
                                <div className='mb-3 row'>
                                    <label className='col-sm-2 col-form-label'>Name</label>
                                    <div className='col-sm-10'>
                                        <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-2 col-form-label'>Type</label>
                                    <div className='col-sm-10'>
                                        <select className='form-control' value={type} onChange={(e) => setType(e.target.value)}>
                                            <option value={'full'}>Full Competition</option>
                                            <option value={'half'}>Half Competition</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-2 col-form-label'>Location</label>
                                    <div className='col-sm-10'>
                                        <input type='text' className='form-control' value={location} onChange={(e) => setLocation(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-2 col-form-label'>Start</label>
                                    <div className='col-sm-10'>
                                        <input type='date' className='form-control' value={start} onChange={(e) => setStart(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-2 col-form-label'>End</label>
                                    <div className='col-sm-10'>
                                        <input type='date' className='form-control' value={end} onChange={(e) => setEnd(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-sm-2 col-form-label'>Participants</label>
                                    <div className='col-sm-10'>
                                        <input type='text' className='form-control' value={team} onChange={(e) => setTeam(e.target.value)} required/>
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    <button type='submit' className='btn btn-dark me-2'>SAVE</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">CLOSE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CompetitionList;
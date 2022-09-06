import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompetitionService from '../services/CompetitionService';

const CompetitionAdd = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('full');
    const [location, setLocation] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [team, setTeam] = useState('');
    const navigate = useNavigate();

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
            await CompetitionService.createCompetition(data);
            navigate('/');
        } catch (error) {
            console.log(error)
        };
    };

    return (
       
        <div className='container mt-5'>
            <form onSubmit={addCompetition}>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Name</label>
                    <div className='col-sm-10'>
                        <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Type</label>
                    <div className='col-sm-10'>
                        <select className='form-control' value={type} onChange={(e) => setType(e.target.value)}>
                            <option value={'full'}>Full Competition</option>
                            <option value={'half'}>Half Competition</option>
                        </select>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Location</label>
                    <div className='col-sm-10'>
                        <input type='text' className='form-control' value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Start</label>
                    <div className='col-sm-10'>
                        <input type='date' className='form-control' value={start} onChange={(e) => setStart(e.target.value)} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>End</label>
                    <div className='col-sm-10'>
                        <input type='date' className='form-control' value={end} onChange={(e) => setEnd(e.target.value)} />
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-sm-2 col-form-label'>Participants</label>
                    <div className='col-sm-10'>
                        <input type='text' className='form-control' value={team} onChange={(e) => setTeam(e.target.value)} />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type='submit' className='btn btn-success mr-2'>SAVE</button>
                </div>
            </form>
        </div>
    );
};

export default CompetitionAdd;
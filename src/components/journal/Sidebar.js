import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { startLogout } from '../../actions/auth';
import { starNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);

    const handleLogout=()=>{
        dispatch( startLogout() );
    }

    const handleAddNew =()=>{
        dispatch( starNewNote() );
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                <i class="far fa-face-monocle"></i>
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>
                <button 
                    className="btn"
                    onClick= {handleLogout}>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry"

                >
                <input 
                    type="text" 
                    className='journal__search'
                    placeholder="Search"
                />
                <i
                    className=" far fa-calendar-plus fa-2x"
                    onClick={ handleAddNew }></i>
                {/* <p className="mt-5">New entry</p> */}
            </div>
            <br />
            <hr />
            <JournalEntries />
        </aside>
    )
}

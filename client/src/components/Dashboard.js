import React from 'react';
import {Link} from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                <i class="material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}
